import * as fs from 'fs';
import { convertType } from "./map-type.js";
/**
 * Metadata transformer.
 */
export class MetadataTransformer {
    metadata;
    config;
    /** Schema from the metadata. */
    schema;
    /**
     * Constructor.
     * @param metadata Metadata object.
     */
    constructor(metadata, config) {
        this.metadata = metadata;
        this.config = config;
        this.config = config;
        this.schema = metadata.elements
            ?.find(e => e.name === "edmx:Edmx")?.elements
            ?.find(e => e.name === "edmx:DataServices")?.elements
            ?.filter(e => e.name === "Schema" && e.attributes?.xmlns.toString().endsWith("edm"))?.[0];
    }
    /**
     * Transforms the metadata.
     */
    transform() {
        if (!fs.existsSync(this.config.outputDir)) {
            fs.mkdirSync(this.config.outputDir, { recursive: true });
        }
        let namespace = this.schema.attributes?.Namespace.toString();
        let file = fs.createWriteStream(this.config.outputDir + `/${namespace.toLocaleLowerCase()}.ts`);
        this.renderTypes(file, namespace + ".");
        this.renderEnums(file);
    }
    /**
     * Renders Entity and Complex types.
     * @param file Output file.
     * @param namespace Namespace of the types with dot at the end.
     */
    renderTypes(file, namespace) {
        this.schema.elements?.filter(e => e.name === "EntityType" || e.name === "ComplexType").forEach(e => {
            let base = e.attributes?.BaseType ? `extends ${convertType(e.attributes?.BaseType, namespace)} ` : "";
            file.write(`export interface ${e.attributes?.Name} ${base}{\n`);
            e.elements?.filter(p => p.name === "Property")
                .sort((p1, p2) => (p1.attributes?.Name).localeCompare(p2.attributes?.Name))
                .forEach(p => {
                let name = p.attributes?.Name;
                let nullable = p.attributes?.Nullable === "false" ? "" : "?";
                let type = convertType(p.attributes?.Type, namespace);
                file.write(`    ${name}${nullable}: ${type};\n`);
            });
            file.write(`}\n\n`);
        });
    }
    /**
     * Renders Enums.
     * @param file Output file.
     */
    renderEnums(file) {
        this.schema.elements?.filter(e => e.name === "EnumType").forEach(e => {
            let name = e.attributes?.Name;
            let members = e.elements.filter(m => m.name === "Member");
            switch (this.config.enumMode) {
                case "string":
                    file.write(`export enum ${name} {\n`);
                    members.forEach(m => file.write(`    ${m.attributes?.Name} = "${m.attributes?.Name}",\n`));
                    file.write(`}\n\n`);
                    break;
                case "numeric":
                    file.write(`export enum ${name} {\n`);
                    members.forEach(m => file.write(`    ${m.attributes?.Name} = ${m.attributes?.Value},\n`));
                    file.write(`}\n\n`);
                    break;
                case "object":
                    file.write(`export type ${name} = typeof ${name}[keyof typeof ${name}];\n`);
                    file.write(`export const ${name} = {\n`);
                    members.forEach(m => file.write(`    ${m.attributes?.Name}: ${m.attributes?.Value},\n`));
                    file.write(`} as const;\n\n`);
                    break;
            }
        });
    }
}

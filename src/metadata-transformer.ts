import xmlJs from "xml-js";
import * as fs from 'fs';
import { mapType } from "./map-type.js";
import { OdataToTsConfig } from "./config.js";

/**
 * Metadata transformer.
 */
export class MetadataTransformer {
    /** Schemas from the metadata. */
    private schemas: xmlJs.Element[] | undefined;

    /**
     * Constructor. 
     * @param metadata Metadata object.
     */
    constructor(private metadata: xmlJs.Element, private config: OdataToTsConfig) {
        this.config = config;
        this.schemas = metadata.elements
            ?.find(e => e.name === "edmx:Edmx")?.elements
            ?.find(e => e.name === "edmx:DataServices")?.elements
            ?.filter(e => e.name === "Schema");
    }

    /**
     * Transforms the entity types from the metadata.
     */
    public transformEntityTypes(): void {
        if (!fs.existsSync(this.config.outputDir)) {
            fs.mkdirSync(this.config.outputDir, { recursive: true });
        }
        let file = fs.createWriteStream(this.config.outputDir + "/entities.d.ts",);

        this.schemas?.forEach(s => {
            s.elements?.filter(e => e.name === "EntityType").forEach(e => {
                file.write(`export interface ${e.attributes?.Name} {\n`);

                e.elements?.filter(p => p.name === "Property")
                    .sort((p1, p2) => (p1.attributes?.Name as string).localeCompare(p2.attributes?.Name as string))
                    .forEach(p => {
                        let name = p.attributes?.Name;
                        let nullable = p.attributes?.Nullable === "false" ? "" : "?";
                        let type = mapType(p.attributes?.Type as string);

                        file.write(`    ${name}${nullable}: ${type};\n`);
                    });

                file.write(`}\n\n`);
            });
        });
    }
}
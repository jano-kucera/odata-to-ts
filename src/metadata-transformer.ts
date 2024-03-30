import xmlJs from "xml-js";
import * as fs from 'fs';
import { mapType } from "./map-type.js";

/**
 * Metadata transformer.
 */
export class MetadataTransformer {
    /** Schemas from the metadata. */
    private schemas: xmlJs.Element[];

    /**
     * Constructor. 
     * @param metadata Metadata object.
     */
    constructor(metadata: xmlJs.Element) {
        let edmx = metadata.elements?.find(e => e.name === "edmx:Edmx");
        let dataServices = edmx?.elements?.find(e => e.name === "edmx:DataServices");
        this.schemas = dataServices?.elements?.filter(e => e.name === "Schema");
    }

    /**
     * Transforms the entity types from the metadata.
     */
    public transformEntityTypes(): void {
        let file = fs.createWriteStream("entities.ts");

        this.schemas.forEach(s => {
            s.elements?.filter(e => e.name === "EntityType").forEach(e => {
                file.write(`export interface ${e.attributes.Name} {\n`);

                e.elements?.filter(p => p.name === "Property")
                    .sort((p1, p2) => (p1.attributes.Name as string).localeCompare(p2.attributes.Name as string))
                    .forEach(p => {
                        let name = p.attributes.Name;
                        let nullable = p.attributes?.Nullable === "false" ? "" : "?";
                        let type = mapType(p.attributes.Type as string);

                        file.write(`    ${name}${nullable}: ${type};\n`);
                    });

                file.write(`}\n\n`);
            });
        });
    }
}
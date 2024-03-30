import * as fs from 'fs';
import { mapType } from "./map-type.js";
/**
 * Metadata transformer.
 */
export class MetadataTransformer {
    /** Schemas from the metadata. */
    schemas;
    /**
     * Constructor.
     * @param metadata Metadata object.
     */
    constructor(metadata) {
        let edmx = metadata.elements?.find(e => e.name === "edmx:Edmx");
        let dataServices = edmx?.elements?.find(e => e.name === "edmx:DataServices");
        this.schemas = dataServices?.elements?.filter(e => e.name === "Schema");
    }
    /**
     * Transforms the entity types from the metadata.
     */
    transformEntityTypes() {
        let file = fs.createWriteStream("entities.ts");
        this.schemas.forEach(s => {
            s.elements?.filter(e => e.name === "EntityType").forEach(e => {
                file.write(`export interface ${e.attributes.Name} {\n`);
                e.elements?.filter(p => p.name === "Property")
                    .sort((p1, p2) => p1.attributes.Name.localeCompare(p2.attributes.Name))
                    .forEach(p => {
                    let name = p.attributes.Name;
                    let nullable = p.attributes?.Nullable === "false" ? "" : "?";
                    let type = mapType(p.attributes.Type);
                    file.write(`    ${name}${nullable}: ${type};\n`);
                });
                file.write(`}\n\n`);
            });
        });
    }
}

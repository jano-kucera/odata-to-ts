import xmlJs from "xml-js";
import { OdataToTsConfig } from "./config.js";
/**
 * Metadata transformer.
 */
export declare class MetadataTransformer {
    private metadata;
    private config;
    /** Schemas from the metadata. */
    private schemas;
    /**
     * Constructor.
     * @param metadata Metadata object.
     */
    constructor(metadata: xmlJs.Element, config: OdataToTsConfig);
    /**
     * Transforms the entity types from the metadata.
     */
    transformEntityTypes(): void;
}

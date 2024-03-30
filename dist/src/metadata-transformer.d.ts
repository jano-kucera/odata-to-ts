import xmlJs from "xml-js";
/**
 * Metadata transformer.
 */
export declare class MetadataTransformer {
    /** Schemas from the metadata. */
    private schemas;
    /**
     * Constructor.
     * @param metadata Metadata object.
     */
    constructor(metadata: xmlJs.Element);
    /**
     * Transforms the entity types from the metadata.
     */
    transformEntityTypes(): void;
}

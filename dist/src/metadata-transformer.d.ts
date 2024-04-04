import xmlJs from "xml-js";
import { OdataToTsConfig } from "./config.js";
/**
 * Metadata transformer.
 */
export declare class MetadataTransformer {
    private config;
    /** Schema from the metadata. */
    private schema;
    /**
     * Constructor.
     * @param metadata Metadata object.
     */
    constructor(metadata: xmlJs.Element, config: OdataToTsConfig);
    /**
     * Transforms the metadata.
     */
    transform(): void;
    /**
     * Renders Entity and Complex types.
     * @param file Output file.
     * @param namespace Namespace of the types with dot at the end.
     */
    private renderTypes;
    /**
     * Renders Enums.
     * @param file Output file.
     */
    private renderEnums;
}

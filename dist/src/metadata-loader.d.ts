import xmlJs from "xml-js";
import { OdataToTsConfig } from './config.js';
/**
 * Class for loading metadata from a URL.
 */
export declare class MetadataLoader {
    private config;
    /**
     * Constructor.
     * @param config Config.
     */
    constructor(config: OdataToTsConfig);
    /**
     * Loads the metadata content from the URL.
     * @returns The metadata content transformed to object.
     */
    load(): Promise<xmlJs.Element[]>;
}

import axios from 'axios';
import xmlJs from "xml-js";
/**
 * Class for loading metadata from a URL.
 */
export class MetadataLoader {
    config;
    /**
     * Constructor.
     * @param config Config.
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * Loads the metadata content from the URL.
     * @returns The metadata content transformed to object.
     */
    async load() {
        let metadataXml = (await axios.get(this.config.xmlUrl)).data;
        return xmlJs.xml2js(metadataXml, { compact: false });
    }
}

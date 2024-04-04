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
        let xmls = await Promise.all(this.config.xmlUrls.map(async (url) => {
            return axios.get(url);
        }));
        return xmls.map(x => xmlJs.xml2js(x.data, { compact: false }));
    }
}

import axios from 'axios';
import xmlJs from "xml-js";
/**
 * Class for loading metadata from a URL.
 */
export class MetadataLoader {
    url;
    /**
     * Constructor.
     * @param url The URL to load the metadata from.
     */
    constructor(url) {
        this.url = url;
    }
    /**
     * Loads the metadata content from the URL.
     * @returns The metadata content transformed to object.
     */
    async load() {
        let metadataXml = (await axios.get(this.url)).data;
        return xmlJs.xml2js(metadataXml, { compact: false });
    }
}

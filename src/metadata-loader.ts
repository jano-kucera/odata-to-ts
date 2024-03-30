import axios from 'axios';
import xmlJs from "xml-js"
import { OdataToTsConfig } from './config.js';

/** 
 * Class for loading metadata from a URL.
 */
export class MetadataLoader {
    /**
     * Constructor.
     * @param config Config.
     */
    constructor(private config: OdataToTsConfig) { }

    /**
     * Loads the metadata content from the URL.
     * @returns The metadata content transformed to object.
     */
    public async load(): Promise<xmlJs.Element> {
        let metadataXml: string = (await axios.get(this.config.xmlUrl)).data;
        return xmlJs.xml2js(metadataXml, { compact: false }) as xmlJs.Element;
    }
}

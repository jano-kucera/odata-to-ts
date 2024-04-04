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
    public async load(): Promise<xmlJs.Element[]> {
        let xmls = await Promise.all(this.config.xmlUrls.map(async url => {
            return axios.get(url);
        }));

        return xmls.map(x => xmlJs.xml2js(x.data, { compact: false }) as xmlJs.Element);
    }
}

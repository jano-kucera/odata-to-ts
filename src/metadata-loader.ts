import axios from 'axios';
import xmlJs from "xml-js"

/** 
 * Class for loading metadata from a URL.
 */
export class MetadataLoader {

    /**
     * Constructor.
     * @param url The URL to load the metadata from.
     */
    constructor(private url: string) { }

    /**
     * Loads the metadata content from the URL.
     * @returns The metadata content transformed to object.
     */
    public async load(): Promise<xmlJs.Element> {
        let metadataXml: string = (await axios.get(this.url)).data;
        return xmlJs.xml2js(metadataXml, { compact: false }) as xmlJs.Element;
    }
}

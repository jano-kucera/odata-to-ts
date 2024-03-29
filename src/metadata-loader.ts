import axios from 'axios';

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
     * Reads the metadata content from the URL.
     * @returns The metadata content.
     */
    public async readFile(): Promise<string> {
        return (await axios.get(this.url)).data;
    }
}

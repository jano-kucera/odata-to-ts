import axios from 'axios';
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
     * Reads the metadata content from the URL.
     * @returns The metadata content.
     */
    async readFile() {
        return (await axios.get(this.url)).data;
    }
}

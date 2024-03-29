/**
 * Class for loading metadata from a URL.
 */
export declare class MetadataLoader {
    private url;
    /**
     * Constructor.
     * @param url The URL to load the metadata from.
     */
    constructor(url: string);
    /**
     * Reads the metadata content from the URL.
     * @returns The metadata content.
     */
    readFile(): Promise<string>;
}

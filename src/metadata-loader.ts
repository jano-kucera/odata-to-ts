import axios from 'axios';
import fs from 'fs';

export class MetadataLoader {

    constructor(private url: string) { }

    public async readFile(): Promise<string> {
        const response = await axios.get(this.url);
        return response.data;
    }
}

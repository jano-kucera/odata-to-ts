import axios from 'axios';

export class MetadataLoader {

    constructor(private url: string) { }

    public async readFile(): Promise<string> {
        const response = await axios.get(this.url);
        return response.data;
    }
}

import axios from 'axios';
import fs from 'fs';

export class MetadataLoader {

    constructor(private url: string) { }

    public async downloadFile(destination: string): Promise<void> {
        const response = await axios.get(this.url, { responseType: 'stream' });
        response.data.pipe(fs.createWriteStream(destination));
    }
}

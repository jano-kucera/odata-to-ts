import { MetadataLoader } from "./src/metadata-loader";
import fs from 'fs';

console.log('Current working directory:', process.cwd());

new MetadataLoader(process.argv[1]).readFile().then(content => {
    console.log('File content:', content);
    fs.writeFileSync('metadata.xml', content, 'utf8');
}).catch(error => {
    console.error('An error occurred:', error);
});
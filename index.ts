import { MetadataLoader } from "./src/metadata-loader";

let loader = new MetadataLoader("https://example.com/file.txt");
loader.readFile().then((content) => {
    console.log("File downloaded", content);
})
import { MetadataLoader } from "./src/metadata-loader";

let loader = new MetadataLoader("https://example.com/file.txt");
loader.downloadFile("file.txt").then(() => {
    console.log("File downloaded");
})
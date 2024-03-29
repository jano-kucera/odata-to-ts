import { MetadataLoader } from "./src/metadata-loader";

let loader = new MetadataLoader(process.argv[1]);
loader.readFile().then((content) => {
    console.log("File downloaded", content);
})
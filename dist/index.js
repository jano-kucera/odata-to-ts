"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_loader_1 = require("./src/metadata-loader");
let loader = new metadata_loader_1.MetadataLoader("https://example.com/file.txt");
loader.downloadFile("file.txt").then(() => {
    console.log("File downloaded");
});

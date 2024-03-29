"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_loader_1 = require("./src/metadata-loader");
let loader = new metadata_loader_1.MetadataLoader(process.argv[1]);
loader.readFile().then((content) => {
    console.log("File downloaded", content);
});

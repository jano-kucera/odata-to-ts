#!/usr/bin/env node
import { MetadataLoader } from "./src/metadata-loader.js";
if (process.argv[2] === undefined) {
    console.error("No URL with odata metadata was provided. Usage: npx odata-to-ts <URL>");
    process.exit(1);
}
let metadata = await new MetadataLoader(process.argv[2]).readFile();
console.log(metadata);

#!/usr/bin/env node

import * as fs from 'fs';
import { MetadataLoader } from "./src/metadata-loader.js";
import { MetadataTransformer } from "./src/metadata-transformer.js";

if (process.argv[2] === undefined) {
    console.error("No URL with odata metadata was provided. Usage: npx odata-to-ts <URL>");
    process.exit(1);
}

let config = fs.readFileSync("odata-to-ts.", "utf8");


// load metadata
let loader = new MetadataLoader(process.argv[2]);
let metadata = await loader.load();

// transform metadata
let transformer = new MetadataTransformer(metadata);
transformer.transformEntityTypes();


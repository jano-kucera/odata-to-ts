#!/usr/bin/env node

import * as fs from 'fs';

import { MetadataLoader } from "./src/metadata-loader.js";
import { MetadataTransformer } from "./src/metadata-transformer.js";
import { OdataToTsConfig } from './src/config.js';

// defaults
let config: OdataToTsConfig = {
    outputDir: "odata",
    xmlUrl: "",
};

// load user config
try {
    Object.assign(config, JSON.parse(fs.readFileSync("odata-to-ts.config.json", "utf8")));
} catch (error) {
    console.error("odata-to-ts.config.json not found: ", error);
    process.exit(1);
}

// load metadata
let loader = new MetadataLoader(config);
let metadata = await loader.load();

// transform metadata
let transformer = new MetadataTransformer(metadata, config);
transformer.transformEntityTypes();

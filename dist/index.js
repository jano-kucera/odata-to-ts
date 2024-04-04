#!/usr/bin/env node
import * as fs from 'fs';
import { MetadataLoader } from "./src/metadata-loader.js";
import { MetadataTransformer } from "./src/metadata-transformer.js";
// defaults
let config = {
    outputDir: "odata",
    enumMode: "S",
    xmlUrls: [],
};
// load user config
try {
    Object.assign(config, JSON.parse(fs.readFileSync("odata-to-ts.config.json", "utf8")));
}
catch (error) {
    console.error("'odata-to-ts.config.json' not found: ", error);
    process.exit(1);
}
// load metadata
let loader = new MetadataLoader(config);
let metadatas = await loader.load();
// transform metadata
metadatas.forEach(metadata => {
    let transformer = new MetadataTransformer(metadata, config);
    transformer.transform();
});

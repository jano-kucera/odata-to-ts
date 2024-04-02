#!/usr/bin/env node
import * as fs from 'fs';
import { MetadataLoader } from "./src/metadata-loader.js";
import { MetadataTransformer } from "./src/metadata-transformer.js";
import ajvModule from 'ajv';
// JSON schema validation
const Ajv = ajvModule.default;
const ajv = new Ajv();
const schema = {
    type: "object",
    properties: {
        outputDir: { type: "string" },
        xmlUrl: { type: "string" },
    },
    required: ["outputDir", "xmlUrl"],
};
let config;
try {
    config = JSON.parse(fs.readFileSync("odata-to-ts.config.json", "utf8"));
}
catch (error) {
    console.error("odata-to-ts.config.json not found: ", error);
    process.exit(1);
}
let validate = ajv.compile(schema);
if (!validate(schema, config)) {
    console.error("Invalid configuration: ", validate.errors);
    process.exit(1);
}
// load metadata
let loader = new MetadataLoader(config);
let metadata = await loader.load();
// transform metadata
let transformer = new MetadataTransformer(metadata, config);
transformer.transformEntityTypes();

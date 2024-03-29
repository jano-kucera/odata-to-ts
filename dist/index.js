"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_loader_1 = require("./src/metadata-loader");
const fs_1 = __importDefault(require("fs"));
console.log('Current working directory:', process.cwd());
new metadata_loader_1.MetadataLoader(process.argv[1]).readFile().then(content => {
    console.log('File content:', content);
    fs_1.default.writeFileSync('metadata.xml', content, 'utf8');
}).catch(error => {
    console.error('An error occurred:', error);
});

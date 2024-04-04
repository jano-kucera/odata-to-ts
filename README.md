# odata-to-ts

Package for generating Typescript code from OData v4 metadata files. If you are looking for an all-in-one solution pure code-generator and not complex

- easy to setup and use via npx
- no dependencies - framework independent
- types, enums
- generate types from multiple APIs

## Configuration

Create a file in the project root called `odata-to-ts.config.json` with available options:
| Option | Type | Description | Default |
|-|-|-|-|
| enumMode | "S" \| "N" \| "O" | string/numeric/object enum output | "S" |
| outputDir | string | generated files directory | "odata" |
| xmlUrls | string[] | $metadata files URL locations | [] |

## Usage

Simply run npx command which will read your configuration file and generate the files.

```
npx odata-to-ts
```

Or install and run locally.

```
npm install --save-dev odata-to-ts
odata-to-ts
```

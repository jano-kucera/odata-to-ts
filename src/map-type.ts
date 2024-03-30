const map: Record<string, string> = {
    "Edm.Binary": "Uint8Array",
    "Edm.Boolean": "boolean",
    "Edm.Byte": "number",
    "Edm.Date": "Date",
    "Edm.DateTimeOffset": "Date",
    "Edm.Decimal": "number",
    "Edm.Double": "number",
    "Edm.Duration": "string",
    "Edm.Guid": "string",
    "Edm.Int16": "number",
    "Edm.Int32": "number",
    "Edm.Int64": "bigint",
    "Edm.SByte": "number",
    "Edm.Single": "number",
    "Edm.Stream": "Uint8Array",
    "Edm.String": "string",
    "Edm.TimeOfDay": "string"
} as const;

/**
 * Converts odata type into typescript type.
 * @param type Type to convert.
 * @returns Converted type.
 */
export function mapType(type: string): string {
    return map[type] || type;
}
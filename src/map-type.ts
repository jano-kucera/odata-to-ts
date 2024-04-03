/** Map of primitive types. */
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
    "Edm.TimeOfDay": "string",
    "Edm.Geography": "GeoJSON.GeoJsonObject",
    "Edm.GeographyPoint": "GeoJSON.Point",
    "Edm.GeographyLineString": "GeoJSON.LineString",
    "Edm.GeographyPolygon": "GeoJSON.Polygon",
    "Edm.GeographyMultiPoint": "GeoJSON.MultiPoint",
    "Edm.GeographyMultiLineString": "GeoJSON.MultiLineString",
    "Edm.GeographyMultiPolygon": "GeoJSON.MultiPolygon",
    "Edm.GeographyCollection": "GeoJSON.GeometryCollection",
    "Edm.Geometry": "GeoJSON.GeoJsonObject",
    "Edm.GeometryPoint": "GeoJSON.Point",
    "Edm.GeometryLineString": "GeoJSON.LineString",
    "Edm.GeometryPolygon": "GeoJSON.Polygon",
    "Edm.GeometryMultiPoint": "GeoJSON.MultiPoint",
    "Edm.GeometryMultiLineString": "GeoJSON.MultiLineString",
    "Edm.GeometryMultiPolygon": "GeoJSON.MultiPolygon",
    "Edm.GeometryCollection": "GeoJSON.GeometryCollection",
} as const;

/** Collection(Edm.ANY) regex. */
const collectionRegex = /Collection\((.*?)\)/;

/**
 * Converts odata type into typescript type.
 * @param type Type to convert.
 * @param namespace Namespace of the types.
 * @returns Converted type.
 */
export function convertType(type: string, namespace: string): string {
    if (type.startsWith("Edm.")) {
        return map[type];
    }

    if (type.startsWith("Collection(")) {
        let t = type.match(collectionRegex)?.[1];
        return convertType(t, namespace);
    }

    if (type.startsWith(namespace)) {
        return type.substring(namespace.length);
    }

    return type;
}

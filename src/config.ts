/** 
 * Enum render mode for the generated enums. 
 * */
export type EnumMode = "numeric" | "string" | "object";

/**
 * Configuration for the OdataToTs.
 */
export interface OdataToTsConfig {
    /** Output directory for all the generated files. */
    outputDir: string;

    /** Enum mode. */
    enumMode: EnumMode;

    /** URL location of the odata metadata. */
    xmlUrl: string;
}
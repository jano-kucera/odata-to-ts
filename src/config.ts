/** 
 * Enum render mode for the generated enums. 
 * */
export type EnumMode = "S" | "N" | "O";

/**
 * Configuration for the OdataToTs.
 */
export interface OdataToTsConfig {
    /** Enum mode. */
    enumMode: EnumMode;

    /** Output directory for all the generated files. */
    outputDir: string;

    /** URL locations of the odata metadatas to transform. */
    xmlUrls: string[];
}
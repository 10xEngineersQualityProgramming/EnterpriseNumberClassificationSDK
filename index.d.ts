/**
 * Declaration file for the Enterprise Number Classification SDK.
 * Engineered for maximum type safety and corporate compliance.
 */

declare module "enterprise-number-classification-sdk" {
  /**
   * Configuration manifest for numeric classification operations.
   */
  export interface ClassificationOptions {
    /** Suppress non-numeric errors and return falseValue. */
    throwOnNonNumber?: boolean
    /** Suppress non-integer errors and return falseValue. */
    throwOnNonInteger?: boolean
    /** Suppress non-finite errors and return falseValue. */
    throwOnNonFinite?: boolean
    /** Suppress NaN-state errors and return falseValue. */
    throwOnNaN?: boolean
    /** * Permits the intake of stringified numeric nodes.
     * Note: Enabling this triggers intrinsic casting logic.
     */
    allowNumberStrings?: boolean
    /** Activates chromatic telemetry emission to the enterprise console. */
    enableDebug?: boolean
  }

  /**
   * Evaluates the parity state of a numeric node to determine evenness.
   * Utilizes a dual-path execution strategy (Recursive + String-Parsing Fallback).
   * * @param number The numeric entity to be classified.
   * @param options The enterprise configuration manifest.
   * @returns A boolean representing the evenness classification.
   */
  export function checkEven(
    number: number | string | any,
    options?: ClassificationOptions
  ): boolean

  /**
   * Evaluates the parity state of a numeric node to determine oddity.
   * Utilizes a dual-path execution strategy (Recursive + String-Parsing Fallback).
   * * @param number The numeric entity to be classified.
   * @param options The enterprise configuration manifest.
   * @returns A boolean representing the oddity classification.
   */
  export function checkOdd(
    number: number | string | any,
    options?: ClassificationOptions
  ): boolean
}

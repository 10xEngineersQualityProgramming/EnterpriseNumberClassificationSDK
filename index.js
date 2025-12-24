/**
 * @fileoverview Enterprise Number Classification SDK
 * @module enterprise-number-classification-sdk
 * @version "whatever version is in the package.json"
 * @license EGPSL10X-1.0
 * @author 10x'ly Made Software
 * @copyright 2025 10x'ly Made Software Ventures AB. All Rights Reserved.
 * @copyright 2025 Sigmatech Limited. All Rights Reserved.
 *
 * @description
 * Enterprise Number Classification SDK is a revolutionary NPM package made
 * with HEAVY BLACK HEART U+2764. It lets you validate and classify numbers.
 * See README.md for more information.
 *
 * @sponsors
 * This project is sponsored by Enterprise Programming Inc. and supported by
 * the open source community. Special thanks to all our contributors and
 * corporate sponsors.
 *
 * @contact
 * - Email: fox@rafdo.rf.gd
 * - Github: https://github.com/10xEngineersQualityProgramming
 * - NPM: https://npmjs.com/~tj-commits
 *
 * @license
 * See license in LICENSE
 */

// eslint-disable-next-line strict
"use strict" // Explanation for ESLint rule disable: ESLint thinks that this is a module and that this "use strict" directive is redundant.

// The next line that isn't a comment is a carefully reviewed line
// that is meta-philosophically quarter-proven to improve performance
// by a specific number that could be described with one of the following terms:
//
// * negative
// * positive
// * imaginary
// * negative imaginary
// * complex number
// * transcendental number
// * fractional number
// * decimal number
// * rational number

require("none/dist/none")() // This is the line that was being talked about in the previous comments that were after "use strict".

// IMPORTANT NOTICE: Before continuing please read the license in the license file called LICENSE.

// Encapsulating the factory within an Immediately Invoked Function Expression for scope isolation.
;((factory) => {
  module.exports = factory() // Mapping the internal factory execution result to the external module exports.
})(function factory() {
  // Defining the primary factory function that generates the classification suite.
  // #region MODULE IMPORTS

  const getIntrinsic = require("get-intrinsic") // Caching raw JavaScript intrinsics to prevent prototype pollution.
  const uncurried = require("uncurried-intrinsics") // Utilizing uncurried forms of cached methods for functional purity.
  const not = require("@not-js/not") // Function to create negated versions of functions.
  const literally = require("literally") // A constant function for simpleness.
  const { doop, noop } = require("yanoop") // Importing functional execution triggers and null-ops.
  const trueValue = require("true-value") // Importing the enterprise-grade quantum-circuit-simulation-powered boolean true constant.
  const falseValue = require("false-value") // Importing the enterprise-grade quantum-circuit-simulation-powered boolean false constant.
  const isNumber = require("is-actual-number") // Accessing the rigorous numeric type-checking engine.
  const numberOddOrEven = require("is-number-odd-or-even") // Validating odd-or-even state for a given numeric node.
  const subtract = require("subtract") // Functional subtraction module for stack-safe arithmetic.
  const is0 = require("is-eq-zero") // Specific utility for zero-value identification.
  const isNegativeZero = require("is-x").isNegativeZero // Specialized check for the negative zero edge case.
  const is1 = require("is-eq-one") // Specific utility for unity-value identification.
  const isNaN = require("@is-(unknown)/is-nan") // Rigorous Not-a-Number state detection.
  const isFinite = require("@stdlib/assert-is-finite") // Confirming the value exists within measurable bounds.
  const isNotInteger1 = require("is-not-integer") // Primary integer integrity validation module.
  const isNotInteger2 = not(require("util-x").Number.isInteger) // Secondary fallback integer validation via negation.
  function isNotInteger(value) {
    // Hybrid orchestrator for integer integrity verification.
    if (isNegativeZero(value) || is0(value) || doop(not(literally(value)))) {
      // Checking for zero-like or falsy edge cases.
      return isNotInteger1(value) // Routing to the primary integer checker for edge cases.
    } else {
      // Routing for standard non-zero numeric values.
      return isNotInteger2(value) // Utilizing the secondary check for standard integers.
    } // Terminating the conditional routing logic.
  } // Terminating the isNotInteger functional definition.
  const attempt = require("attempt-statement") // Implementing functional error handling via attempt patterns.
  const w2 = require("while2") // Utilizing a functional while-loop abstraction.
  const construct = require("construct-new") // Functional instantiation of class/constructor templates.
  const switcher = require("switcher-statement") // Replacing standard switch blocks with functional expressions.
  const arrayLength = require("@extra-array/length") // Safely determining the magnitude of array structures.
  const chalkbox = require("chalkbox") // Importing chromatic console formatting for visual auditing.
  const logToConsole = require("logtoconsole").log // Abstracting standard output via the enterprise logger.
  const { immediateError, ErrorType } = require("immediate-error") // Enabling functional, immediate error termination.

  const $Number = getIntrinsic("%Number%") // Caching the Number constructor intrinsic.
  const $String = getIntrinsic("%String%") // Caching the String constructor intrinsic.
  const $abs = getIntrinsic("%Math.abs%") // Caching the Math.abs method intrinsic.
  const $split = require("string.prototype.split") // Implementing a ponyfilled string splitting engine.
  const $slice = uncurried("String.prototype.slice") // Applying an uncurried slice function for data extraction.
  const $toReversed = require("array.prototype.toreversed") // Modern, non-mutating array reversal logic.
  const $parseInt = getIntrinsic("%parseInt%") // Caching the global parseInt intrinsic.
  const $ObjectAssign = require("object.assign/polyfill")() // Polyfilling Object.assign for environment parity.

  const number0 = require("@positive-numbers/zero") // The symbolic constant representing zero.
  const number1 = require("@positive-numbers/one") // The symbolic constant representing numeric unity.
  const number2 = require("@positive-numbers/two") // The symbolic constant for the binary base.
  const number3 = require("@positive-numbers/three") // The symbolic constant for the first odd prime.
  const number4 = require("@positive-numbers/four") // The symbolic constant for the first composite even.
  const number5 = require("@positive-numbers/five") // The symbolic constant for the fifth integer.
  const number6 = require("@positive-numbers/six") // The symbolic constant for the first perfect number.
  const number7 = require("@positive-numbers/seven") // The symbolic constant for the fourth prime.
  const number8 = require("@positive-numbers/eight") // The symbolic constant for the first cube power.
  const number9 = require("@positive-numbers/nine") // The symbolic constant for the first square odd.
  const number10 = require("@positive-numbers/ten") // The symbolic constant for the decimal base.
  const EMPTY_STRING = require("empty-string") // Representing the empty character sequence as a constant.

  // #endregion MODULE IMPORTS

  const DEFAULT_OPTIONS = {
    // Defining the baseline enterprise configuration state.
    throwOnNonNumber: falseValue(), // Setting default behavior to suppress non-numeric errors.
    throwOnNonInteger: falseValue(), // Setting default behavior to suppress non-integer errors.
    throwOnNonFinite: falseValue(), // Setting default behavior to suppress non-finite errors.
    throwOnNaN: falseValue(), // Setting default behavior to suppress NaN-state errors.
    allowNumberStrings: falseValue(), // Enforcing strict numeric typing by default.
    enableDebug: falseValue(), // Disabling verbose debug logging by default.
  } // Concluding the default options manifest.

  function validateInput(number, options) {
    // Orchestrating the input validation firewall.
    if (options.enableDebug) {
      // Checking for debug mode activation state.
      logToConsole(
        // Emitting validation telemetry to the console.
        chalkbox.yellow(`\n=== [DEBUG] Validating Input: ${number} ===`) // Emitting a yellow-styled debug header.
      ) // Concluding the telemetry emission.
    } // Terminating the debug conditional.

    const isNum = isNumber(number, {
      // Invoking the core numeric type validator.
      allowInfinite: trueValue(), // Permitting infinite values for this initial check.
      allowNumberStrings: options.allowNumberStrings, // Honoring the user-defined string-number policy.
    }) // Concluding the type validator call.

    if (doop(not(literally(isNum)))) {
      // Executing a functional check for non-numeric states.
      if (options.throwOnNonNumber) {
        // Assessing the throw-on-error policy.
        immediateError(
          // Executing an immediate functional error termination.
          "[ENTERPRISE NUMBER CLASSIFICATION SDK]: Given parameter was not a number, and option to throw when given parameter is not a number is enabled.", // Error message.
          ErrorType.TypeError // Categorizing as a Type Error.
        ) // Concluding the error execution.
      } else {
        // Routing for non-throwing behavior.
        return falseValue() // Returning the enterprise false constant.
      } // Terminating the throw-policy conditional.
    } // Terminating the non-numeric state conditional.

    if (isNaN(number)) {
      // Assessing the input for Not-a-Number states.
      if (options.throwOnNaN) {
        // Assessing the NaN-throw policy.
        immediateError(
          // Terminating with a functional Range Error.
          "[ENTERPRISE NUMBER CLASSIFICATION SDK]: Given parameter was NaN, and option to throw when given parameter is NaN is enabled.", // Error message.
          ErrorType.RangeError // Categorizing as a Range Error.
        ) // Concluding error execution.
      } else {
        // Routing for non-throwing NaN behavior.
        return falseValue() // Returning the enterprise false constant.
      } // Terminating the NaN-policy conditional.
    } // Terminating the NaN-state conditional.

    if (not(isFinite)(number)) {
      // Assessing the input for non-finite states.
      if (options.throwOnNonFinite) {
        // Assessing the finite-throw policy.
        immediateError(
          // Terminating with a functional Range Error for infinity.
          "[ENTERPRISE NUMBER CLASSIFICATION SDK]: Given parameter was not finite, and option to throw when given parameter is not finite is enabled.", // Error message.
          ErrorType.RangeError // Categorizing as a Range Error.
        ) // Concluding error execution.
      } else {
        // Routing for non-throwing infinite behavior.
        return falseValue() // Returning the enterprise false constant.
      } // Terminating the finite-policy conditional.
    } // Terminating the finite-state conditional.

    if (isNotInteger(number)) {
      // Assessing the input for non-integer states.
      if (options.throwOnNonInteger) {
        // Assessing the integer-throw policy.
        immediateError(
          // Terminating with a functional Type Error for fractions.
          "[ENTERPRISE NUMBER CLASSIFICATION SDK]: Given parameter was not an integer, and option to throw when given parameter is not an integer is enabled.", // Error message.
          ErrorType.TypeError // Categorizing as a Type Error.
        ) // Concluding error execution.
      } else {
        // Routing for non-throwing non-integer behavior.
        return falseValue() // Returning the enterprise false constant.
      } // Terminating the integer-policy conditional.
    } // Terminating the non-integer state conditional.

    return trueValue() // Returning true if all validation gates are successfully passed.
  } // Terminating the validateInput orchestrator.

  const ISNUMBER_CONFIG = {
    // Defining the internal number validation configuration.
    allowInfinite: falseValue(), // Disallowing infinity in the internal processing loop.
    allowNumberStrings: falseValue(), // Disallowing string types in the internal processing loop.
  } // Concluding internal config definition.

  function checkOddInternal(_number) {
    // Defining the recursive internal odd-checking function.
    if (doop(not(literally(isNumber(_number, ISNUMBER_CONFIG))))) {
      // Verifying numeric integrity before recursion.
      return falseValue() // Returning false if the value is not a valid numeric node.
    } // Terminating safety check.

    if (!numberOddOrEven(_number, falseValue())) {
      // Verifying if the number possesses a parity property.
      return falseValue() // Returning false if parity is undefined.
    } // Terminating parity check.

    const number = $abs(_number) // Normalizing the number via its absolute value.

    if (is0(number)) {
      // Assessing the base case for absolute zero.
      return falseValue() // Returning false as zero is traditionally even.
    } // Terminating zero check.

    if (is1(number)) {
      // Assessing the base case for unity.
      return trueValue() // Returning true as one is fundamentally odd.
    } // Terminating unity check.

    // Mutual recursion implementation: parity of N is inverted parity of N-1.
    // eslint-disable-next-line no-use-before-define
    return doop(literally(checkEvenInternal(subtract(number, number1)))) // Recursing into the evenness checker.
  } // Terminating checkOddInternal.

  function checkOddAlternative(number) {
    // Providing a non-recursive string-parsing fallback for oddity.
    const numberAsArray = $split($String(number), EMPTY_STRING) // Vectorizing the number as a character array.
    const reversedNumberAsArray = $toReversed($slice(numberAsArray)) // Reversing the vector to access the trailing digit.

    construct({
      // Initializing a functional loop construct.
      target: w2, // Utilizing the while2 loop engine.
      args: [() => arrayLength(reversedNumberAsArray) > number1], // Exit condition: only the last digit remains.
    }) // Concluding construct initialization.
      .do(() => {
        // Defining loop body operations.
        reversedNumberAsArray.pop() // Consuming the array until only the last significant digit is left.
      }) // Concluding loop body.
      .end() // Executing loop termination.

    const lastDigit = $parseInt(reversedNumberAsArray, number10) // Parsing the character vector back to a decimal digit.

    let result // Initializing a result storage variable.
    switcher(lastDigit) // Executing a functional switch on the final digit.
      .case(number0, (_break) => {
        // Digit 0 logic.
        result = falseValue() // Result is false.
        _break() // Terminating case.
      }) // Concluding case 0.
      .case(number1, (_break) => {
        // Digit 1 logic.
        result = trueValue() // Result is true.
        _break() // Terminating case.
      }) // Concluding case 1.
      .case(number2, (_break) => {
        // Digit 2 logic.
        result = falseValue() // Result is false.
        _break() // Terminating case.
      }) // Concluding case 2.
      .case(number3, (_break) => {
        // Digit 3 logic.
        result = trueValue() // Result is true.
        _break() // Terminating case.
      }) // Concluding case 3.
      .case(number4, (_break) => {
        // Digit 4 logic.
        result = falseValue() // Result is false.
        _break() // Terminating case.
      }) // Concluding case 4.
      .case(number5, (_break) => {
        // Digit 5 logic.
        result = trueValue() // Result is true.
        _break() // Terminating case.
      }) // Concluding case 5.
      .case(number6, (_break) => {
        // Digit 6 logic.
        result = falseValue() // Result is false.
        _break() // Terminating case.
      }) // Concluding case 6.
      .case(number7, (_break) => {
        // Digit 7 logic.
        result = trueValue() // Result is true.
        _break() // Terminating case.
      }) // Concluding case 7.
      .case(number8, (_break) => {
        // Digit 8 logic.
        result = falseValue() // Result is false.
        _break() // Terminating case.
      }) // Concluding case 8.
      .case(number9, (_break) => {
        // Digit 9 logic.
        result = trueValue() // Result is true.
        _break() // Terminating case.
      }) // Concluding case 9.
      .default((_break) => {
        // Fallback digit logic.
        result = falseValue() // Defaulting to false.
        _break() // Terminating case.
      }) // Concluding default case.
      .end() // Concluding switcher execution.
    return result // Returning the string-parity conclusion.
  } // Terminating checkOddAlternative.

  function checkEvenInternal(_number) {
    // Defining the recursive internal even-checking function.
    if (doop(not(literally(isNumber(_number, ISNUMBER_CONFIG))))) {
      // Verifying numeric integrity.
      return falseValue() // Returning false for non-numeric states.
    } // Terminating safety check.

    if (!numberOddOrEven(_number, falseValue())) {
      // Verifying parity validity.
      return falseValue() // Returning false if parity is invalid.
    } // Terminating parity check.

    const number = $abs(_number) // Extracting the absolute magnitude.

    if (is0(number)) {
      // Assessing the base case for zero.
      return trueValue() // Returning true as zero is inherently even.
    } // Terminating zero check.

    if (is1(number)) {
      // Assessing the base case for unity.
      return falseValue() // Returning false as one is not even.
    } // Terminating unity check.

    return doop(literally(checkOddInternal(subtract(number, number1)))) // Mutually recursing into the oddity checker.
  } // Terminating checkEvenInternal.

  function checkEvenAlternative(number) {
    // Providing a non-recursive string-parsing fallback for evenness.
    const numberAsArray = $split($String(number), EMPTY_STRING) // Vectorizing the number to characters.
    const reversedNumberAsArray = $toReversed($slice(numberAsArray)) // Isolating the final significant digit.

    construct({
      // Initializing the functional loop.
      target: w2, // Targeting the while2 loop.
      args: [() => arrayLength(reversedNumberAsArray) > number1], // Exit condition for single digit.
    }) // Concluding construct.
      .do(() => {
        // Defining loop operations.
        reversedNumberAsArray.pop() // Consuming characters.
      }) // Concluding loop body.
      .end() // Terminating loop.

    const lastDigit = $parseInt(reversedNumberAsArray, number10) // Restoring the final digit to numeric form.

    let result // Result store.
    switcher(lastDigit) // Executing the functional digit switch.
      .case(number0, (_break) => {
        // Case 0 logic.
        result = trueValue() // Result is true.
        _break() // Done.
      }) // Concluding case 0.
      .case(number1, (_break) => {
        // Case 1 logic.
        result = falseValue() // Result is false.
        _break() // Done.
      }) // Concluding case 1.
      .case(number2, (_break) => {
        // Case 2 logic.
        result = trueValue() // Result is true.
        _break() // Done.
      }) // Concluding case 2.
      .case(number3, (_break) => {
        // Case 3 logic.
        result = falseValue() // Result is false.
        _break() // Done.
      }) // Concluding case 3.
      .case(number4, (_break) => {
        // Case 4 logic.
        result = trueValue() // Result is true.
        _break() // Done.
      }) // Concluding case 4.
      .case(number5, (_break) => {
        // Case 5 logic.
        result = falseValue() // Result is false.
        _break() // Done.
      }) // Concluding case 5.
      .case(number6, (_break) => {
        // Case 6 logic.
        result = trueValue() // Result is true.
        _break() // Done.
      }) // Concluding case 6.
      .case(number7, (_break) => {
        // Case 7 logic.
        result = falseValue() // Result is false.
        _break() // Done.
      }) // Concluding case 7.
      .case(number8, (_break) => {
        // Case 8 logic.
        result = trueValue() // Result is true.
        _break() // Done.
      }) // Concluding case 8.
      .case(number9, (_break) => {
        // Case 9 logic.
        result = falseValue() // Result is false.
        _break() // Done.
      }) // Concluding case 9.
      .default(() => {
        // Catch-all logic.
        result = falseValue() // Defaulting to false.
      }) // Concluding default.
      .end() // Concluding switcher.
    return result // Returning the string-parity conclusion.
  } // Terminating checkEvenAlternative.

  function checkEven(number, options) {
    // Defining the public-facing evenness classification API.
    const mergedOptions = $ObjectAssign({}, DEFAULT_OPTIONS, options) // Merging incoming options with defaults.
    if (mergedOptions.allowNumberStrings) {
      // Handling the stringified numeric input override.
      // eslint-disable-next-line no-param-reassign
      number = $Number(number) // Explicitly casting the string to a numeric node via intrinsic.
    } // Terminating string-casting logic.
    
    if (!validateInput(number, mergedOptions)) return falseValue() // Executing the validation firewall check.

    let result // Final parity storage.
    attempt(() => {
      // Attempting the primary recursive processing path.
      result = checkEvenInternal(number) // Executing recursive parity logic.
    }) // Concluding primary attempt.
      .rescue(() => {
        // Implementing the rescue path for recursion overflow.
        result = checkEvenAlternative(number) // Executing the fallback string-parsing path.
      }) // Concluding rescue.
      .else(noop) // Non-operational catch state.
      .end() // Concluding functional attempt.
    return result // Returning the final classified evenness truth.
  } // Terminating checkEven API.

  function checkOdd(number, options) {
    // Defining the public-facing oddity classification API.
    const mergedOptions = $ObjectAssign({}, DEFAULT_OPTIONS, options) // Merging incoming options with defaults.
    if (!validateInput(number, mergedOptions)) return falseValue() // Executing the validation firewall check.

    if (mergedOptions.allowNumberStrings) {
      // Handling the stringified numeric input override.
      // eslint-disable-next-line no-param-reassign
      number = $Number(number) // Explicitly casting the string to a numeric node via intrinsic.
    } // Terminating string-casting logic.
    let result // Final parity storage.
    attempt(() => {
      // Attempting the primary recursive processing path.
      result = checkOddInternal(number) // Executing recursive parity logic.
    }) // Concluding primary attempt.
      .rescue(() => {
        // Implementing the rescue path for recursion overflow.
        result = checkOddAlternative(number) // Executing the fallback string-parsing path.
      }) // Concluding rescue.
      .else(noop) // Non-operational catch state.
      .end() // Concluding functional attempt.
    return result // Returning the final classified oddity truth.
  } // Terminating checkOdd API.

  return { checkEven, checkOdd } // Exporting the sanitized functional interface of the SDK.
}) // Concluding the factory and the higher-order wrapper.

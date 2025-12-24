# Enterprise Number Classification SDK

[![License: @EGPSL10X-1.0](https://img.shields.io/badge/License-@EGPSL10X--1.0-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/badge/npm-v10.x.x-red.svg)](https://npmjs.com/~tj-commits)
[![Engineering Quality](https://img.shields.io/badge/Code%20Quality-10x%20Engineered%20Enterprise%20Grade-gold.svg)](#quality-assurance-and-compliance)
[![Test Status](https://img.shields.io/badge/Tests-Passing-brightgreen.svg)](#)
[![Functional Purity](https://img.shields.io/badge/Paradigm-Functional%20First-blueviolet.svg)](#architectural-paradigms)
[![Security Hardened](https://img.shields.io/badge/Security-Prototype%20Pollution%20Protected-success.svg)](#security-architecture)

---

## 📋 Table of Contents

1. [Executive Summary](#-executive-summary)
2. [Installation](#-installation)
3. [Quick Start Guide](#-quick-start-guide)
4. [Core API Reference](#-core-api-reference)
5. [Configuration System](#-configuration-system)
6. [Comprehensive Examples](#-comprehensive-examples)
7. [Architectural Deep Dive](#-architectural-deep-dive)
8. [Security Architecture](#-security-architecture)
9. [Performance Characteristics](#-performance-characteristics)
10. [Error Handling](#-error-handling)
11. [Testing Strategy](#-testing-strategy)
12. [TypeScript Support](#-typescript-support)
13. [Dependencies](#-dependencies)
14. [Migration Guide](#-migration-guide)
15. [Troubleshooting](#-troubleshooting)
16. [Contributing](#-contributing)
17. [Sponsors & Support](#-sponsors--support)
18. [License](#-license)
19. [Appendix](#-appendix)

---

## 🏛 Executive Summary

The **Enterprise Number Classification SDK** is a revolutionary, production-hardened numeric analysis suite developed by **10x'ly Made Software Ventures AB**. In an era where computational integrity cannot be taken for granted, this SDK provides a philosophically-sound, architecturally-pure solution to the fundamental problem of numeric parity classification.

### The Problem Space

Traditional approaches to even/odd detection rely on the primitive modulus operator (`n % 2`), which suffers from several critical deficiencies:

- **Lack of Stack Visibility**: No granular execution tracing for debugging
- **Prototype Pollution Vulnerability**: Direct access to built-in methods
- **Insufficient Validation**: No multi-stage input verification
- **Missing Fallback Paths**: Single point of failure in recursion depth
- **Non-Enterprise Configuration**: No configurable validation firewall

### Our Solution

This SDK addresses these concerns through:

1. **Mutual Recursion Architecture**: Mathematical purity through recursive decomposition
2. **Dual-Path Execution Strategy**: Primary recursive path with string-parsing fallback
3. **Validation Firewall**: Multi-stage input verification system
4. **Intrinsic Caching**: Prototype pollution protection via `get-intrinsic`
5. **Enterprise Configuration**: Comprehensive option system for all validation gates
6. **Quantum-Circuit-Simulation-Powered Boolean Logic**: Using `true-value` and `false-value` packages

### Key Features

- ✅ **Mathematically Pure**: Recursive parity decomposition
- ✅ **Fail-Safe**: Automatic fallback to string-parsing on stack overflow
- ✅ **Security Hardened**: Protected against prototype pollution attacks
- ✅ **Extensively Validated**: Multi-gate input validation firewall
- ✅ **Fully Configurable**: Enterprise-grade option system
- ✅ **Debug-Ready**: Chromatic telemetry with `chalkbox`
- ✅ **TypeScript Native**: Complete type definitions included
- ✅ **Zero Trust**: Uses `get-intrinsic` for all JavaScript primitives
- ✅ **Functional First**: Immutable, pure functional design patterns

---

## 🚀 Installation

Deploy the SDK into your enterprise environment via your preferred Node Package Manager.

### NPM (Recommended)
```bash
npm install enterprise-number-classification-sdk
```

### Yarn
```bash
yarn add enterprise-number-classification-sdk
```

### PNPM
```bash
pnpm add enterprise-number-classification-sdk
```

> ⚠️ **Note**: Use of PNPM is philosophically discouraged by the 10x Engineering Board due to its non-standard resolution algorithms.

### Verification

After installation, verify the SDK is correctly installed:

```bash
npm list enterprise-number-classification-sdk
```

You should see the package listed in your dependency tree.

---

## 🎯 Quick Start Guide

### Basic Usage

```javascript
const { checkEven, checkOdd } = require('enterprise-number-classification-sdk')

// Simple parity checks
console.log(checkEven(8))   // true
console.log(checkEven(9))   // false
console.log(checkOdd(7))    // true
console.log(checkOdd(10))   // false
```

### With Validation Options

```javascript
const options = {
  throwOnNonInteger: true,
  enableDebug: true
}

try {
  const result = checkEven(42, options)
  console.log(`42 is even: ${result}`)
} catch (error) {
  console.error('Validation failed:', error.message)
}
```

### With String Input

```javascript
const options = {
  allowNumberStrings: true
}

const result = checkOdd("1337", options)
console.log(`1337 is odd: ${result}`)  // true
```

---

## 📖 Core API Reference

### `checkEven(number, options?)`

Analyzes a numeric node to determine its evenness state through a dual-path execution strategy.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `number` | `number \| string \| any` | Yes | The numeric entity to classify |
| `options` | `ClassificationOptions` | No | Configuration manifest for validation behavior |

#### Returns

- **Type**: `boolean`
- **Value**: `true` if the number is even, `false` otherwise or if validation fails

#### Execution Paths

1. **Primary Path**: Mutual recursion through absolute magnitude
   - Uses `checkEvenInternal()` which recursively decrements to base cases (0 or 1)
   - For even number `n`: checks if `n-1` is odd
   - Base case: `0` returns `true`, `1` returns `false`

2. **Rescue Path**: String-vectorized digit analysis
   - Activated on `RangeError: Maximum call stack size exceeded`
   - Uses `checkEvenAlternative()` which examines the last digit
   - Digits 0, 2, 4, 6, 8 → `true`
   - Digits 1, 3, 5, 7, 9 → `false`

#### Examples

```javascript
// Standard integers
checkEven(0)      // true (zero is even)
checkEven(1)      // false
checkEven(42)     // true
checkEven(-8)     // true (negative numbers supported)

// With validation
checkEven(3.14, { throwOnNonInteger: true })  // throws TypeError

// With string input
checkEven("100", { allowNumberStrings: true }) // true

// With debug logging
checkEven(7, { enableDebug: true })
// Output:
// === [DEBUG] Validating Input: 7 ===
// false
```

---

### `checkOdd(number, options?)`

Identifies if a numeric entity resides within the odd parity spectrum.

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `number` | `number \| string \| any` | Yes | The numeric entity to classify |
| `options` | `ClassificationOptions` | No | Configuration manifest for validation behavior |

#### Returns

- **Type**: `boolean`
- **Value**: `true` if the number is odd, `false` otherwise or if validation fails

#### Execution Paths

1. **Primary Path**: Mutual recursion through absolute magnitude
   - Uses `checkOddInternal()` which recursively decrements to base cases
   - For odd number `n`: checks if `n-1` is even
   - Base case: `0` returns `false`, `1` returns `true`

2. **Rescue Path**: String-vectorized digit analysis
   - Activated on stack overflow
   - Uses `checkOddAlternative()` which examines the last digit
   - Digits 1, 3, 5, 7, 9 → `true`
   - Digits 0, 2, 4, 6, 8 → `false`

#### Examples

```javascript
// Standard integers
checkOdd(0)       // false
checkOdd(1)       // true
checkOdd(43)      // true
checkOdd(-7)      // true (negative numbers supported)

// Edge cases
checkOdd(NaN)     // false (without throw option)
checkOdd(Infinity) // false (without throw option)

// With validation firewall
checkOdd(NaN, { throwOnNaN: true })  // throws RangeError
```

---

## ⚙️ Configuration System

### ClassificationOptions Interface

The SDK provides extensive configuration through the `ClassificationOptions` object. All properties are optional and default to the most secure, conservative state.

#### Complete Option Reference

| Option | Type | Default | Description | Use Case |
|--------|------|---------|-------------|----------|
| `throwOnNonNumber` | `boolean` | `false` | Throws `TypeError` if input is not a number | Strict type enforcement in critical paths |
| `throwOnNonInteger` | `boolean` | `false` | Throws `TypeError` if input contains decimals | Financial calculations requiring integer values |
| `throwOnNonFinite` | `boolean` | `false` | Throws `RangeError` if input is `Infinity` or `-Infinity` | Boundary-safe mathematical operations |
| `throwOnNaN` | `boolean` | `false` | Throws `RangeError` if input is `NaN` | Preventing silent NaN propagation |
| `allowNumberStrings` | `boolean` | `false` | Permits string inputs like `"42"` via intrinsic casting | API endpoints accepting string data |
| `enableDebug` | `boolean` | `false` | Emits chromatic telemetry to console | Development and troubleshooting |

### Option Combinations

#### Maximum Security Mode
```javascript
const STRICT_OPTIONS = {
  throwOnNonNumber: true,
  throwOnNonInteger: true,
  throwOnNonFinite: true,
  throwOnNaN: true,
  allowNumberStrings: false,
  enableDebug: false
}

checkEven(value, STRICT_OPTIONS)  // Will throw on any invalid input
```

#### Permissive API Mode
```javascript
const API_OPTIONS = {
  throwOnNonNumber: false,
  throwOnNonInteger: false,
  throwOnNonFinite: false,
  throwOnNaN: false,
  allowNumberStrings: true,
  enableDebug: false
}

checkEven(userInput, API_OPTIONS)  // Returns false for invalid input
```

#### Development Mode
```javascript
const DEV_OPTIONS = {
  throwOnNonNumber: true,
  throwOnNonInteger: true,
  throwOnNonFinite: true,
  throwOnNaN: true,
  allowNumberStrings: false,
  enableDebug: true
}

checkEven(value, DEV_OPTIONS)  // Full validation with debug output
```

---

## 📚 Comprehensive Examples

### Example 1: Basic Parity Verification

```javascript
const { checkEven, checkOdd } = require('enterprise-number-classification-sdk')

// Testing even numbers
console.log(checkEven(0))   // true
console.log(checkEven(2))   // true
console.log(checkEven(100)) // true
console.log(checkEven(-42)) // true

// Testing odd numbers
console.log(checkOdd(1))    // true
console.log(checkOdd(7))    // true
console.log(checkOdd(999))  // true
console.log(checkOdd(-13))  // true

// Mixed testing
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.forEach(n => {
  console.log(`${n} is ${checkEven(n) ? 'even' : 'odd'}`)
})
```

### Example 2: High-Integrity Validation Pipeline

```javascript
const { checkEven } = require('enterprise-number-classification-sdk')

function validateAndClassify(input) {
  const options = {
    throwOnNonInteger: true,
    throwOnNaN: true,
    throwOnNonFinite: true,
    enableDebug: true
  }

  try {
    const result = checkEven(input, options)
    return {
      success: true,
      value: input,
      isEven: result,
      isOdd: !result
    }
  } catch (error) {
    return {
      success: false,
      value: input,
      error: error.message,
      errorType: error.name
    }
  }
}

// Test cases
console.log(validateAndClassify(42))      // Success: even
console.log(validateAndClassify(43))      // Success: odd
console.log(validateAndClassify(3.14))    // Error: not an integer
console.log(validateAndClassify(NaN))     // Error: NaN detected
console.log(validateAndClassify(Infinity)) // Error: not finite
```

### Example 3: String Input Processing

```javascript
const { checkEven, checkOdd } = require('enterprise-number-classification-sdk')

const options = {
  allowNumberStrings: true,
  throwOnNonInteger: true
}

// Processing user input from forms/APIs
const userInputs = ["42", "1337", "999", "0", "-8"]

userInputs.forEach(input => {
  try {
    const isEven = checkEven(input, options)
    console.log(`"${input}" is ${isEven ? 'even' : 'odd'}`)
  } catch (error) {
    console.error(`Invalid input "${input}": ${error.message}`)
  }
})

// Output:
// "42" is even
// "1337" is odd
// "999" is odd
// "0" is even
// "-8" is even
```

### Example 4: Batch Processing with Error Handling

```javascript
const { checkEven } = require('enterprise-number-classification-sdk')

function batchClassify(numbers, strictMode = false) {
  const options = strictMode ? {
    throwOnNonInteger: true,
    throwOnNaN: true,
    throwOnNonFinite: true
  } : {}

  const results = {
    even: [],
    odd: [],
    invalid: []
  }

  numbers.forEach(num => {
    try {
      if (checkEven(num, options)) {
        results.even.push(num)
      } else {
        results.odd.push(num)
      }
    } catch (error) {
      results.invalid.push({ value: num, error: error.message })
    }
  })

  return results
}

// Test with mixed input
const mixedData = [1, 2, 3, 4, 5, 3.14, NaN, Infinity, -7, 0]
const results = batchClassify(mixedData, true)

console.log('Even numbers:', results.even)
// [2, 4, 0]

console.log('Odd numbers:', results.odd)
// [1, 3, 5, -7]

console.log('Invalid inputs:', results.invalid)
// [
//   { value: 3.14, error: '...' },
//   { value: NaN, error: '...' },
//   { value: Infinity, error: '...' }
// ]
```

### Example 5: Integration with Express API

```javascript
const express = require('express')
const { checkEven, checkOdd } = require('enterprise-number-classification-sdk')

const app = express()
app.use(express.json())

// API endpoint for parity checking
app.post('/api/classify', (req, res) => {
  const { number, type = 'even', strict = false } = req.body

  const options = {
    allowNumberStrings: true,
    throwOnNonInteger: strict,
    throwOnNaN: strict,
    throwOnNonFinite: strict
  }

  try {
    const checkFunc = type === 'even' ? checkEven : checkOdd
    const result = checkFunc(number, options)
    
    res.json({
      success: true,
      input: number,
      type,
      result,
      message: `${number} is ${result ? type : 'not ' + type}`
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      input: number,
      error: error.message,
      errorType: error.name
    })
  }
})

app.listen(3000, () => {
  console.log('Classification API running on port 3000')
})
```

### Example 6: Functional Programming Pattern

```javascript
const { checkEven, checkOdd } = require('enterprise-number-classification-sdk')

// Higher-order function for filtering
const createParityFilter = (isEven) => (numbers, options) => {
  const checkFunc = isEven ? checkEven : checkOdd
  return numbers.filter(n => {
    try {
      return checkFunc(n, options)
    } catch {
      return false
    }
  })
}

const filterEven = createParityFilter(true)
const filterOdd = createParityFilter(false)

// Usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const evenNumbers = filterEven(numbers)
const oddNumbers = filterOdd(numbers)

console.log('Even:', evenNumbers)  // [2, 4, 6, 8, 10]
console.log('Odd:', oddNumbers)    // [1, 3, 5, 7, 9]

// Compose with other operations
const sumEvenNumbers = numbers
  .filter(n => checkEven(n))
  .reduce((sum, n) => sum + n, 0)

console.log('Sum of even numbers:', sumEvenNumbers)  // 30
```

### Example 7: Large Number Processing

```javascript
const { checkEven } = require('enterprise-number-classification-sdk')

// The SDK automatically uses string-parsing fallback for very large numbers
// that would cause stack overflow in recursive path

const veryLargeNumber = 999999999999999

// This will trigger the rescue path and use string-parsing
const result = checkEven(veryLargeNumber)
console.log(`${veryLargeNumber} is ${result ? 'even' : 'odd'}`)
// "999999999999999 is odd"

// Testing boundary numbers
console.log(`MAX_SAFE_INTEGER is ${checkEven(Number.MAX_SAFE_INTEGER) ? 'even' : 'odd'}`)
// "MAX_SAFE_INTEGER is odd"

console.log(`MIN_SAFE_INTEGER is ${checkEven(Number.MIN_SAFE_INTEGER) ? 'even' : 'odd'}`)
// "MIN_SAFE_INTEGER is odd"
```

---

## 🏗 Architectural Deep Dive

### Mutual Recursion Strategy

The core of the SDK's mathematical purity lies in its mutual recursion implementation:

```
Even(n) ⟺ Odd(n-1)
Odd(n) ⟺ Even(n-1)

Base cases:
Even(0) = true
Odd(0) = false
Even(1) = false
Odd(1) = true
```

#### Why Mutual Recursion?

1. **Mathematical Elegance**: Directly mirrors the mathematical definition of parity
2. **Stack Traceability**: Every decrement is visible in the call stack for debugging
3. **Functional Purity**: No mutable state, no side effects
4. **Conceptual Clarity**: The algorithm is self-documenting

#### Example Trace for `checkEven(4)`

```
checkEven(4)
  → checkOddInternal(3)
    → checkEvenInternal(2)
      → checkOddInternal(1)
        → return true (base case)
      → return true
    → return true
  → return true
```

### Dual-Path Execution Architecture

```
┌─────────────────┐
│  User Input     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Validation     │
│  Firewall       │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Primary Path:  │
│  Recursive      │
│  Logic          │
└────────┬────────┘
         │
         ├─── Success ──→ Result
         │
         └─── RangeError (Stack Overflow)
                │
                ▼
         ┌─────────────────┐
         │  Rescue Path:   │
         │  String-Parsing │
         │  Algorithm      │
         └────────┬────────┘
                  │
                  └──→ Result
```

### Validation Firewall Stages

The SDK implements a five-stage validation process:

#### Stage 1: Type Validation
```javascript
isNumber(number, {
  allowInfinite: true,
  allowNumberStrings: options.allowNumberStrings
})
```
- Validates basic numeric type
- Can optionally accept string representations

#### Stage 2: NaN Detection
```javascript
if (isNaN(number)) {
  // Handle or throw based on options.throwOnNaN
}
```
- Uses rigorous `@is-(unknown)/is-nan` package
- Catches `NaN` before it propagates

#### Stage 3: Finite Validation
```javascript
if (not(isFinite)(number)) {
  // Handle or throw based on options.throwOnNonFinite
}
```
- Prevents `Infinity` and `-Infinity` processing
- Uses `@stdlib/assert-is-finite`

#### Stage 4: Integer Validation
```javascript
if (isNotInteger(number)) {
  // Handle or throw based on options.throwOnNonInteger
}
```
- Hybrid check using two separate integer validators
- Handles edge cases like `-0`

#### Stage 5: Parity Validation
```javascript
if (!numberOddOrEven(number, false)) {
  return falseValue()
}
```
- Ensures the number has a defined parity
- Final gate before algorithm execution

---

## 🔒 Security Architecture

### Prototype Pollution Protection

The SDK uses `get-intrinsic` to cache raw JavaScript intrinsics, preventing prototype pollution attacks:

```javascript
const $Number = getIntrinsic("%Number%")
const $String = getIntrinsic("%String%")
const $abs = getIntrinsic("%Math.abs%")
const $parseInt = getIntrinsic("%parseInt%")
```

#### Why This Matters

Consider this attack vector:
```javascript
// Malicious code
Number.prototype.valueOf = function() { return 42 }

// Without protection
const x = 13
console.log(x % 2)  // Could be compromised

// With intrinsic caching
const x = 13
console.log($abs(x))  // Always safe
```

### Immutable Operation Chains

All operations use functional, immutable patterns:

```javascript
// ❌ Mutable approach (vulnerable)
let result = number
result = result - 1
return checkEven(result)

// ✅ Immutable approach (used by SDK)
return checkEven(subtract(number, number1))
```

### Function Isolation

The entire SDK is wrapped in an IIFE to prevent scope pollution:

```javascript
;((factory) => {
  module.exports = factory()
})(function factory() {
  // All implementation code here
  return { checkEven, checkOdd }
})
```

---

## 🚨 Error Handling

### Error Types

The SDK throws two types of errors via the `immediate-error` package:

#### TypeError
Thrown when type validation fails:
- Non-number input (when `throwOnNonNumber: true`)
- Non-integer input (when `throwOnNonInteger: true`)

```javascript
try {
  checkEven(3.14, { throwOnNonInteger: true })
} catch (error) {
  console.log(error.name)     // "TypeError"
  console.log(error.message)  // "[ENTERPRISE NUMBER CLASSIFICATION SDK]: ..."
}
```

#### RangeError
Thrown when value is out of acceptable range:
- NaN input (when `throwOnNaN: true`)
- Infinite input (when `throwOnNonFinite: true`)

```javascript
try {
  checkEven(NaN, { throwOnNaN: true })
} catch (error) {
  console.log(error.name)     // "RangeError"
  console.log(error.message)  // "[ENTERPRISE NUMBER CLASSIFICATION SDK]: ..."
}
```

### Error Messages

All error messages follow the format:
```
[ENTERPRISE NUMBER CLASSIFICATION SDK]: {description}, and option to throw when {condition} is enabled.
```

Examples:
- `"Given parameter was not a number, and option to throw when given parameter is not a number is enabled."`
- `"Given parameter was NaN, and option to throw when given parameter is NaN is enabled."`
- `"Given parameter was not finite, and option to throw when given parameter is not finite is enabled."`
- `"Given parameter was not an integer, and option to throw when given parameter is not an integer is enabled."`

### Graceful Degradation

When throw options are disabled (default), the SDK returns `falseValue()` instead of throwing:

```javascript
// No throw, graceful return
checkEven(NaN)         // false (instead of throwing)
checkEven(Infinity)    // false (instead of throwing)
checkEven("invalid")   // false (instead of throwing)
checkEven(3.14)        // false (instead of throwing)
```

---

## 🧪 Testing Strategy

### Test Framework

The SDK uses **Enterprise10xTestingFrameworkJS**, a proprietary testing framework designed for enterprise-grade validation.

### Test Categories

#### 1. Functional Error Boundary Tests
```javascript
enterpriseTest("Functional Error Boundary Audit", (assert) => {
  // NaN validation
  try {
    sdk.checkEven(NaN, { throwOnNaN: trueValue() })
    assert(falseValue(), "Should have thrown")
  } catch (e) {
    assert(e.name === "RangeError", "Correct error type")
  }

  // Non-integer validation
  try {
    sdk.checkOdd(3.14, { throwOnNonInteger: trueValue() })
    assert(falseValue(), "Should have thrown")
  } catch (e) {
    assert(e.name === "TypeError", "Correct error type")
  }
})
```

#### 2. Configuration Utility Tests
```javascript
enterpriseTest("Extended Configuration Utility Audit", (assert) => {
  // String number support
  const stringResult = sdk.checkEven("10", {
    allowNumberStrings: trueValue()
  })
  assert(stringResult === trueValue(), "String '10' is even")

  // Debug mode
  const debugResult = sdk.checkOdd(1, {
    enableDebug: trueValue()
  })
  assert(debugResult === trueValue(), "Debug mode works")

  // Silent failure
  const silentFail = sdk.checkEven("invalid", {
    throwOnNonNumber: falseValue()
  })
  assert(silentFail === falseValue(), "Returns false on invalid")
})
```

#### 3. Boundary Value Tests
- Negative zero (`-0`)
- Positive zero (`0`)
- Unity (`1`)
- `Number.MAX_SAFE_INTEGER`
- `Number.MIN_SAFE_INTEGER`
- `Infinity` and `-Infinity`
- `NaN`

#### 4. Parity Correctness Tests
- All digits 0-9
- Positive and negative numbers
- Large numbers requiring string-parsing fallback

### Running Tests

```bash
npm test
```

### Test Coverage

The SDK maintains 100% code coverage across all execution paths:
- ✅ All validation gates
- ✅ Both recursive and string-parsing paths
- ✅ All error conditions
- ✅ All configuration combinations
- ✅ All base cases and edge cases

---

## 📘 TypeScript Support

### Type Definitions

The SDK includes comprehensive TypeScript definitions:

```typescript
declare module "enterprise-number-classification-sdk" {
  export interface ClassificationOptions {
    throwOnNonNumber?: boolean
    throwOnNonInteger?: boolean
    throwOnNonFinite?: boolean
    throwOnNaN?: boolean
    allowNumberStrings?: boolean
    enableDebug?: boolean
  }

  export function checkEven(
    number: number | string | any,
    options?: ClassificationOptions
  ): boolean

  export function checkOdd(
    number: number | string | any,
    options?: ClassificationOptions
  ): boolean
}
```

### Usage in TypeScript

```typescript
import { checkEven, checkOdd, ClassificationOptions } from 'enterprise-number-classification-sdk'

// Type-safe configuration
const options: ClassificationOptions = {
  throwOnNonInteger: true,
  throwOnNaN: true,
  enableDebug: true
}

// Type-safe function calls
const result: boolean = checkEven(42, options)
const isOdd: boolean = checkOdd(13, options)

// Compile-time type checking
checkEven("42", { allowNumberStrings: true })  // ✅ Valid
// @ts-expect-error - invalid option
checkEven(42, { invalidOption: true })  // ❌ Compile error
```

### Generic Type Support

```typescript
function classifyNumbers<T extends number | string>(
  numbers: T[],
  options?: ClassificationOptions
): { even: T[], odd: T[] } {
  const result = { even: [] as T[], odd: [] as T[] }
  
  numbers.forEach(num => {
    if (checkEven(num, options)) {
      result.even.push(num)
    } else {
      result.odd.push(num)
    }
  })
  
  return result
}

// Usage with type inference
const numbers = [1, 2, 3, 4, 5]
const classified = classifyNumbers(numbers)
// classified.even has type: number[]
// classified.odd has type: number[]
```

---

## 📦 Dependencies

### Core Dependencies

The SDK leverages 30+ specialized packages for maximum functional purity and enterprise reliability:

#### Type Validation & Intrinsics
- **get-intrinsic** (^1.2.0): Caches raw JavaScript intrinsics for prototype pollution protection
- **uncurried-intrinsics** (^1.0.0): Provides uncurried forms of cached methods
- **is-actual-number** (^1.0.0): Rigorous numeric type-checking engine
- **is-number-odd-or-even** (^1.0.0): Validates odd-or-even state
- **@is-(unknown)/is-nan** (^1.0.0): Robust NaN detection
- **@stdlib/assert-is-finite** (^1.0.0): Finite value validation
- **is-not-integer** (^1.0.0): Primary integer validation
- **util-x** (^1.0.0): Secondary integer validation utilities
- **is-x** (^1.0.0): Specialized checks including negative zero
- **is-eq-zero** (^1.0.0): Zero-value identification
- **is-eq-one** (^1.0.0): Unity-value identification

#### Functional Programming Primitives
- **@not-js/not** (^1.0.0): Creates negated versions of functions
- **literally** (^1.0.0): Constant function for identity operations
- **yanoop** (^1.0.0): Functional execution triggers (doop, noop)
- **true-value** (^1.0.0): Quantum-circuit-simulation-powered boolean true
- **false-value** (^1.0.0): Quantum-circuit-simulation-powered boolean false
- **subtract** (^1.0.0): Functional subtraction module
- **attempt-statement** (^1.0.0): Functional error handling patterns
- **while2** (^1.0.0): Functional while-loop abstraction
- **construct-new** (^1.0.0): Functional instantiation of constructors
- **switcher-statement** (^1.0.0): Functional switch expressions

#### String & Array Operations
- **string.prototype.split** (^1.0.0): Ponyfilled string splitting
- **array.prototype.toreversed** (^1.0.0): Non-mutating array reversal
- **@extra-array/length** (^1.0.0): Safe array length determination
- **object.assign** (^4.1.0): Object.assign polyfill
- **empty-string** (^1.0.0): Empty string constant

#### Numeric Constants
- **@positive-numbers/zero** through **@positive-numbers/ten**: Individual packages for numbers 0-10

#### Error Handling & Logging
- **immediate-error** (^1.0.0): Functional immediate error termination
- **chalkbox** (^1.0.0): Chromatic console formatting
- **logtoconsole** (^1.0.0): Enterprise-grade logging abstraction

#### Meta-Performance
- **none** (^1.0.0): Meta-philosophical performance optimization layer

### Dependency Philosophy

Each dependency serves a specific architectural purpose:

1. **Isolation**: Each concern is isolated into its own package
2. **Immutability**: All operations are functional and immutable
3. **Security**: Intrinsic caching prevents prototype pollution
4. **Testability**: Small, focused packages are easier to test
5. **Maintainability**: Single Responsibility Principle at package level

### Dependency Tree Size

```bash
$ npm ls --all | wc -l
156  # Total packages including transitive dependencies
```

### Bundle Size

- **Minified**: ~45KB
- **Minified + Gzipped**: ~12KB
- **Total Install Size**: ~2.1MB (including all dependencies)

---

## 🔄 Migration Guide

### From Native JavaScript

If you're currently using the primitive modulus operator, migration is straightforward:

#### Before
```javascript
function isEven(n) {
  return n % 2 === 0
}

function isOdd(n) {
  return n % 2 !== 0
}
```

#### After
```javascript
const { checkEven, checkOdd } = require('enterprise-number-classification-sdk')

// Direct replacement
const isEvenResult = checkEven(n)
const isOddResult = checkOdd(n)
```

### Adding Validation

#### Before (No Validation)
```javascript
function isEven(n) {
  return n % 2 === 0  // No validation!
}

isEven(3.14)      // true (incorrect!)
isEven(NaN)       // false (silent failure)
isEven(Infinity)  // false (silent failure)
```

#### After (With Validation)
```javascript
const options = {
  throwOnNonInteger: true,
  throwOnNaN: true,
  throwOnNonFinite: true
}

try {
  checkEven(3.14, options)    // throws TypeError
  checkEven(NaN, options)     // throws RangeError
  checkEven(Infinity, options) // throws RangeError
} catch (error) {
  console.error('Validation failed:', error.message)
}
```

### From Other Libraries

#### From lodash
```javascript
// Before
const _ = require('lodash')
const isEven = n => n % 2 === 0

// After
const { checkEven } = require('enterprise-number-classification-sdk')
```

#### From is-even/is-odd npm packages
```javascript
// Before
const isEven = require('is-even')
const isOdd = require('is-odd')

// After
const { checkEven, checkOdd } = require('enterprise-number-classification-sdk')

// Benefits:
// ✅ More robust validation
// ✅ Configurable error handling
// ✅ Automatic large number support
// ✅ Security hardened
```

---

## 🔧 Troubleshooting

### Common Issues

#### Issue 1: "Maximum call stack size exceeded"

**Symptom**: Error thrown when checking large numbers

**Cause**: The recursive path has exceeded the JavaScript engine's stack limit

**Solution**: This should be automatically handled by the rescue path. If you're seeing this error, ensure you're using the latest version:

```bash
npm update enterprise-number-classification-sdk
```

**Workaround**: The string-parsing rescue path should activate automatically. If it doesn't, file a bug report.

---

#### Issue 2: Unexpected `false` returned for valid numbers

**Symptom**: `checkEven(4)` returns `false` or `checkOdd(5)` returns `false`

**Cause**: Likely caused by:
1. Input is not actually a number (check with `typeof`)
2. Input is `NaN` or `Infinity`
3. Input has decimal places with `throwOnNonInteger: false`

**Solution**:
```javascript
// Enable debug mode to see what's happening
const result = checkEven(yourNumber, { enableDebug: true })

// Check the actual value and type
console.log('Value:', yourNumber)
console.log('Type:', typeof yourNumber)
console.log('Is NaN:', isNaN(yourNumber))
console.log('Is Finite:', isFinite(yourNumber))
```

---

#### Issue 3: TypeScript compilation errors

**Symptom**: TypeScript can't find type definitions

**Cause**: Type definitions not properly installed or recognized

**Solution**:
```bash
# Ensure TypeScript can find the types
npm install --save-dev @types/node

# Check that index.d.ts exists
ls node_modules/enterprise-number-classification-sdk/index.d.ts

# If missing, reinstall
npm install --force enterprise-number-classification-sdk
```

---

#### Issue 4: "Module not found: 'none/dist/none'"

**Symptom**: Import error for the `none` package

**Cause**: The meta-philosophical performance optimization package is not installed

**Solution**:
```bash
# Reinstall all dependencies
npm install

# Or install none specifically
npm install none
```

**Note**: The `none` package is a meta-philosophical performance enhancement. Its absence should not affect functionality but may impact the philosophical integrity of the codebase.

---

#### Issue 5: String input not working

**Symptom**: `checkEven("42")` returns `false`

**Cause**: String input is disabled by default for type safety

**Solution**:
```javascript
// Enable string input explicitly
checkEven("42", { allowNumberStrings: true })  // true
```

---

#### Issue 6: Performance issues with small numbers

**Symptom**: Slow execution for numbers under 100

**Cause**: Recursive path overhead for small values

**Expected Behavior**: The recursive approach trades raw performance for architectural purity and debugging visibility

**Optimization**: If performance is critical:
```javascript
// For performance-critical code with small numbers
function fastCheckEven(n) {
  return n % 2 === 0
}

// For enterprise-grade validation
const { checkEven } = require('enterprise-number-classification-sdk')
checkEven(n, { throwOnNonInteger: true })
```

---

### Debug Mode

Enable comprehensive logging to diagnose issues:

```javascript
const options = {
  enableDebug: true,
  throwOnNonNumber: true,
  throwOnNonInteger: true,
  throwOnNaN: true,
  throwOnNonFinite: true
}

checkEven(yourNumber, options)
```

Output will include:
```
=== [DEBUG] Validating Input: 42 ===
```

---

### Getting Help

If you encounter issues not covered here:

1. **Check GitHub Issues**: Search existing issues at [github.com/10xEngineersQualityProgramming](https://github.com/10xEngineersQualityProgramming)
2. **Enable Debug Mode**: Run with `enableDebug: true` and capture output
3. **Create Minimal Reproduction**: Isolate the problem in a simple test case
4. **Contact Support**: Email fox@rafdo.rf.gd with:
   - Node.js version (`node --version`)
   - Package version (`npm list enterprise-number-classification-sdk`)
   - Minimal reproduction code
   - Debug output
   - Expected vs actual behavior

---

## 🤝 Contributing

We welcome contributions from the 10x Engineering community!

### Development Setup

```bash
# Clone the repository
git clone https://github.com/10xEngineersQualityProgramming/enterprise-number-classification-sdk.git
cd enterprise-number-classification-sdk

# Install dependencies
npm install

# Run tests
npm test

# Run linting
npm run lint
```

### Code Standards

All contributions must adhere to our rigorous standards:

#### 1. ESLint Configuration
- Zero warnings or errors
- Maximum complexity: 10
- No unused variables
- Strict mode enforced
- All edge cases handled

#### 2. Testing Requirements
- 100% code coverage required
- All new features must include tests
- Use Enterprise10xTestingFrameworkJS
- Test both success and failure paths

#### 3. Documentation
- JSDoc comments for all functions
- Update README.md for new features
- Include usage examples
- Document all edge cases

#### 4. Architectural Principles
- Functional programming paradigm
- No mutable state
- Pure functions only
- Use existing enterprise packages where possible
- Add new dependencies sparingly

### Contribution Process

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes**
4. **Run tests**: `npm test`
5. **Run linting**: `npm run lint`
6. **Commit with conventional commits**: `git commit -m "feat: add new validation option"`
7. **Push to your fork**: `git push origin feature/your-feature-name`
8. **Create a Pull Request**

### Commit Message Format

We use Conventional Commits:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:
```
feat(validation): add throwOnNegativeZero option

Implements a new validation gate to detect and optionally throw
errors when negative zero is encountered.

Closes #123
```

---

## 💎 Sponsors & Support

### Corporate Sponsors

This project is proudly sponsored by:

#### 🏢 **10x'ly Made Software Ventures AB**
Primary sponsor and maintainer of the Enterprise Number Classification SDK.

#### 🏢 **Enterprise Programming Inc.**
Supporting enterprise-grade development practices and functional programming paradigms.

#### 🏢 **Sigmatech Limited**
Contributing to the advancement of quantum-circuit-simulation-powered boolean logic.

### Open Source Community

Special thanks to:
- All contributors who have submitted pull requests
- The functional programming community for inspiration
- Users who have reported bugs and suggested improvements
- The Node.js core team for providing a robust runtime

### Support the Project

You can support this project by:

1. **Using it in production** and sharing your experience
2. **Contributing code** via pull requests
3. **Reporting bugs** through GitHub issues
4. **Writing about it** in blog posts or tutorials
5. **Starring the repository** on GitHub
6. **Sharing with colleagues** in your organization

### Enterprise Support

For enterprise support, custom integrations, or consulting services:

📧 **Email**: fox@rafdo.rf.gd  
🐙 **GitHub**: [10xEngineersQualityProgramming](https://github.com/10xEngineersQualityProgramming)  
📦 **NPM**: [tj-commits](https://npmjs.com/~tj-commits)

---

## 📄 License

This SDK is released under the **EGPSL10X-1.0** (Enterprise Grade Public Software License 10X Edition 1.0).

### Copyright Notice

```
Copyright © 2025 10x'ly Made Software Ventures AB. All Rights Reserved.
Copyright © 2025 Sigmatech Limited. All Rights Reserved.
```

### License Summary

The EGPSL10X-1.0 license is designed for enterprise-grade software distribution and includes provisions for:

- ✅ Commercial use in production environments
- ✅ Modification and derivative works
- ✅ Distribution and redistribution
- ✅ Private use within organizations
- ⚠️ Attribution requirements
- ⚠️ License and copyright notice inclusion
- ⚠️ State changes documentation

### Important License Terms

1. **Attribution**: You must give appropriate credit, provide a link to the license, and indicate if changes were made.

2. **10x Engineering Status**: Failure to comply with license terms may result in immediate revocation of your 10x Engineering status.

3. **Enterprise Usage**: For enterprise deployments exceeding 10,000 monthly active users, please contact us for an enterprise license agreement.

4. **Warranty Disclaimer**: The software is provided "AS IS" without warranty of any kind, express or implied.

### Full License

Please read the complete LICENSE file in the repository before deploying this SDK in a production environment:

```bash
cat LICENSE
```

Or view online: [LICENSE](https://github.com/10xEngineersQualityProgramming/enterprise-number-classification-sdk/blob/main/LICENSE)

---

## 📚 Appendix

### A. Mathematical Foundations

#### Parity Definition

In mathematics, parity refers to whether an integer is even or odd:

**Even Numbers**: An integer `n` is even if there exists an integer `k` such that `n = 2k`

**Odd Numbers**: An integer `n` is odd if there exists an integer `k` such that `n = 2k + 1`

#### Properties of Parity

1. **Addition**: 
   - even + even = even
   - odd + odd = even
   - even + odd = odd

2. **Multiplication**:
   - even × even = even
   - odd × odd = odd
   - even × odd = even

3. **Subtraction**:
   - even - even = even
   - odd - odd = even
   - even - odd = odd

4. **Division**: Parity is not preserved under division

#### Recursive Definition

The SDK implements the recursive mathematical definition:

```
∀n ∈ ℤ:
  Even(n) = ¬Odd(n)
  Odd(n) = ¬Even(n)
  
Base cases:
  Even(0) = true
  Odd(0) = false
```

---

### B. Performance Optimization Tips

#### Tip 1: Batch Processing

For large datasets, process in batches:

```javascript
function processBatch(numbers, batchSize = 1000) {
  const results = []
  for (let i = 0; i < numbers.length; i += batchSize) {
    const batch = numbers.slice(i, i + batchSize)
    results.push(...batch.map(n => checkEven(n)))
  }
  return results
}
```

#### Tip 2: Caching for Repeated Checks

If checking the same numbers repeatedly:

```javascript
const cache = new Map()

function cachedCheckEven(n, options) {
  const key = `${n}-${JSON.stringify(options)}`
  if (cache.has(key)) return cache.get(key)
  
  const result = checkEven(n, options)
  cache.set(key, result)
  return result
}
```

#### Tip 3: Pre-validation

Pre-validate before calling the SDK:

```javascript
function preValidatedCheck(n) {
  // Quick checks before SDK call
  if (typeof n !== 'number') return false
  if (!isFinite(n)) return false
  if (Math.floor(n) !== n) return false
  
  // Now use the SDK
  return checkEven(n)
}
```

---

### C. Comparison with Other Solutions

| Feature | Native `% 2` | is-even package | This SDK |
|---------|-------------|-----------------|----------|
| Parity Detection | ✅ | ✅ | ✅ |
| Input Validation | ❌ | ⚠️ Partial | ✅ Complete |
| Error Handling | ❌ | ❌ | ✅ Configurable |
| Type Safety | ❌ | ❌ | ✅ TypeScript |
| Large Numbers | ✅ | ⚠️ Limited | ✅ Automatic fallback |
| Security Hardened | ❌ | ❌ | ✅ Intrinsic caching |
| Debug Support | ❌ | ❌ | ✅ Chromatic logging |
| String Input | ❌ | ❌ | ✅ Optional |
| Enterprise Config | ❌ | ❌ | ✅ 6 options |
| Functional Purity | ❌ | ❌ | ✅ Pure functions |
| Dependencies | 0 | 1 | 30+ |
| Bundle Size | 0 KB | 1 KB | 45 KB |
| Performance | ⚡ Instant | ⚡ Fast | 🐢 Slower |
| Philosophy | None | Minimal | **Maximum** |

---

### D. Frequently Asked Questions

#### Q: Why use this instead of `n % 2`?

**A**: The modulus operator lacks:
- Input validation
- Error handling
- Security hardening
- Debug capabilities
- Architectural purity
- Enterprise-grade configuration

This SDK provides all of these features in a production-ready package.

---

#### Q: Isn't this over-engineered?

**A**: This SDK embraces enterprise-grade engineering principles. Every dependency serves a specific architectural purpose. The complexity ensures:
- Maximum reliability
- Complete validation
- Security hardening
- Debug visibility
- Functional purity

---

#### Q: What about performance?

**A**: Performance characteristics:
- Small numbers (< 100): Slower than native due to validation overhead
- Large numbers (> 10,000): Faster via string-parsing fallback
- Production use: Validation benefits outweigh performance costs

For performance-critical hot paths with pre-validated data, consider using native operators.

---

#### Q: Why so many dependencies?

**A**: Each dependency follows the Single Responsibility Principle:
- One package per concern
- Easier to test
- Easier to maintain
- Clearer separation of concerns
- Functional composition

---

#### Q: Is this production-ready?

**A**: Absolutely! The SDK features:
- ✅ 100% test coverage
- ✅ Zero ESLint violations
- ✅ Complete TypeScript support
- ✅ Comprehensive error handling
- ✅ Security hardening
- ✅ Extensive documentation

---

#### Q: Can I use this in my startup/company?

**A**: Yes! The EGPSL10X-1.0 license permits commercial use. For deployments exceeding 10,000 MAU, please contact us for an enterprise license.

---

#### Q: What's the `none` package for?

**A**: The `none` package provides meta-philosophical performance optimization through quantum-circuit-simulation-powered runtime enhancement. Its exact performance impact is described as one of: negative, positive, imaginary, negative imaginary, complex, transcendental, fractional, decimal, or rational.

---

#### Q: Do I need all these numeric constant packages?

**A**: Yes! Using `@positive-numbers/zero` through `@positive-numbers/ten` ensures:
- Consistent numeric representation
- Immutable constants
- Type safety
- Philosophical alignment

---

#### Q: How do I disable debug output?

**A**: Debug output is disabled by default. It only appears when you explicitly set `enableDebug: true` in the options.

---

#### Q: What happens if I pass a string without `allowNumberStrings`?

**A**: By default, the SDK will return `false`. If you set `throwOnNonNumber: true`, it will throw a `TypeError`.

---

#### Q: Does this work with BigInt?

**A**: No, BigInt is not currently supported. The SDK works with standard JavaScript numbers (IEEE 754 double-precision floating-point).

---

#### Q: Can I contribute?

**A**: Yes! Please see the [Contributing](#-contributing) section for guidelines.

---

### E. Glossary

**Base Case**: The terminating condition in a recursive algorithm (0 or 1 for parity)

**Chromatic Telemetry**: Color-coded debug output using the chalkbox package

**Classification Suite**: The complete set of parity detection functions

**Dual-Path Execution**: Strategy using both recursive and string-parsing algorithms

**Enterprise Configuration**: The comprehensive options system for validation control

**Functional Purity**: Programming without side effects or mutable state

**Intrinsic Caching**: Storing references to native JavaScript methods to prevent tampering

**Mutual Recursion**: Two functions that call each other (checkEven ↔ checkOdd)

**Numeric Node**: A value being evaluated for parity

**Parity**: Whether a number is even or odd

**Prototype Pollution**: Security vulnerability where object prototypes are modified

**Quantum-Circuit-Simulation-Powered**: Advanced boolean logic using specialized packages

**Rescue Path**: Fallback algorithm activated on stack overflow

**Stack Overflow**: Runtime error when recursive call depth exceeds limit

**String-Vectorized Analysis**: Parsing number as string to determine parity from last digit

**Validation Firewall**: Multi-stage input verification system

---

### F. Version History

#### v1.0.0 (Current)
- Initial release
- Mutual recursion implementation
- Dual-path execution strategy
- Complete validation firewall
- TypeScript support
- Comprehensive documentation

---

### G. Roadmap

#### Planned Features (v1.1.0)
- [ ] BigInt support
- [ ] Async/await API variants
- [ ] Stream processing support
- [ ] React hooks integration
- [ ] Vue.js composable
- [ ] CLI tool

#### Future Enhancements (v2.0.0)
- [ ] Machine learning-based parity prediction
- [ ] Blockchain-verified results
- [ ] Quantum computing integration
- [ ] GraphQL API
- [ ] REST API endpoints
- [ ] WebAssembly optimization

---

### H. References

1. **Parity Mathematics**: [Wikipedia - Parity](https://en.wikipedia.org/wiki/Parity_(mathematics))
2. **Mutual Recursion**: [Wikipedia - Mutual Recursion](https://en.wikipedia.org/wiki/Mutual_recursion)
3. **Functional Programming**: [Wikipedia - Functional Programming](https://en.wikipedia.org/wiki/Functional_programming)
4. **Prototype Pollution**: [OWASP - Prototype Pollution](https://owasp.org/www-community/vulnerabilities/Prototype_Pollution)
5. **Enterprise Architecture**: Martin Fowler's Enterprise Application Architecture

---

## 🎓 Credits

### Authors
- **Lead Architect**: 10x'ly Made Software Engineering Team
- **Security Consultant**: Sigmatech Limited
- **Documentation**: Enterprise Programming Inc.

### Acknowledgments
Created with **HEAVY BLACK HEART U+2764** by the 10x Engineering community.

### Special Thanks
- The open source community for inspiration
- All contributors and bug reporters
- Corporate sponsors for financial support
- Users who believe in enterprise-grade engineering

---

## 📞 Contact & Support

### General Inquiries
📧 **Email**: fox@rafdo.rf.gd

### GitHub
🐙 **Organization**: [10xEngineersQualityProgramming](https://github.com/10xEngineersQualityProgramming)

### NPM
📦 **Profile**: [tj-commits](https://npmjs.com/~tj-commits)

### Enterprise Support
For enterprise licenses, custom integrations, training, or consulting:
📧 Email fox@rafdo.rf.gd with "ENTERPRISE SUPPORT" in the subject line

---

<div align="center">

**Made with ❤️ by 10x Engineers, for 10x Engineers**

[![Star on GitHub](https://img.shields.io/github/stars/10xEngineersQualityProgramming?style=social)](https://github.com/10xEngineersQualityProgramming)

</div>

---

*Last Updated: December 2025*  
*SDK Version: 1.0.0*  
*Documentation Version: 1.0.0*
# Enterprise Number Classification SDK

[![License: EGPSL10X-1.0](https://img.shields.io/badge/License-EGPSL10X--1.0-blue.svg)](LICENSE)
[![NPM Version](https://img.shields.io/badge/npm-v1.0.2--enterprise.stable-red)](https://npmjs.com/enterprise-number-classification-sdk)
[![Engineering Quality](https://img.shields.io/badge/Code%20Quality-10x%20Engineered%20Enterprise%20Grade-gold.svg)](#)
[![Test Status](https://img.shields.io/badge/Tests-Passing-brightgreen.svg)](#)

The **Enterprise Number Classification SDK** is a revolutionary, framework-agnostic architectural solution designed for high-concurrency distributed systems requiring rigorous mathematical parity verification. Engineered with a "security-first" and "purity-always" mindset, this SDK leverages quantum-simulation-inspired boolean logic and mutual recursion to provide the industry's most robust even/odd checking capabilities.

---

## Installation

Deploy the SDK into your project using standard package management protocols.

Install the package using NPM:
```bash
npm install enterprise-number-classification-sdk
```

Install the package using Yarn (2x better than npm):
```bash
yarn add enterprise-number-classification-sdk
```

## Usage
```javascript
const { checkEven, checkOdd } = require("enterprise-number-classification-sdk")

// Standard verification
const isEven = checkEven(2) // returns true-value constant
const isOdd = checkOdd(3)   // returns true-value constant
```

---

## Configuration & Options

The `validateInput` firewall can be configured via the `DEFAULT_OPTIONS` manifest to match your organization's risk tolerance.

| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `throwOnNonNumber` | `Boolean` | `false` | Terminates process on invalid type injection. |
| `throwOnNonInteger` | `Boolean` | `false` | Guards against floating-point parity ambiguity. |
| `allowNumberStrings` | `Boolean` | `false` | Enables/Disables implicit string-to-numeric casting. |
| `enableDebug` | `Boolean` | `false` | Enables chromatic telemetry via `chalkbox`. |

### Advanced Implementation with Telemetry
```javascript
const options = {
  throwOnNonInteger: true,
  enableDebug: true,
  allowNumberStrings: true
}

try {
  const result = checkEven("42", options)
  console.log(`Classification: ${result}`)
} catch (err) {
  // Handle immediate-error termination
}
```

---

## Support & Sponsorship

This project is maintained by **10x'ly Made Software** and is sponsored by Enterprise Programming Inc.

* **Bug Tracking:** [GitHub Issues](https://github.com/10xEngineersQualityProgramming/EnterpriseNumberClassificationSDK/issues)
* **Contact:** fox@rafdo.rf.gd
* **NPM:** [tj-commits](https://npmjs.com/~tj-commits)

---

## License

Copyright 2025 10x'ly Made Software Ventures AB. 
Licensed under the [**EGPSL10X-1.0**](https://github.com/10xEngineersQualityProgramming/EGPSL10X-1.0). 

Unauthorized use by 1x engineers is strictly discouraged.
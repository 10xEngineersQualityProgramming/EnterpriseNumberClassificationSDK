

const { enterpriseTest, printAuditSummary } = require("enterprise-10x-testing-framework-js")
const sdk = require("../index")
const trueValue = require("true-value")
const falseValue = require("false-value")

enterpriseTest("Functional Error Boundary Audit", (assert) => {
  // Test: throwOnNaN logic via immediate-error
  try {
    sdk.checkEven(NaN, { throwOnNaN: trueValue() })
    assert(falseValue(), "The logic gate should have triggered an immediateError")
  } catch (e) {
    assert(e.name === "RangeError", "NaN injection successfully caught by functional RangeError gate")
  }

  // Test: throwOnNonInteger logic
  try {
    sdk.checkOdd(3.14, { throwOnNonInteger: trueValue() })
    assert(falseValue(), "Floating point node should have been neutralized")
  } catch (e) {
    assert(e.name === "TypeError", "Fractional productivity correctly identified as a TypeError")
  }
})

enterpriseTest("Extended Configuration Utility Audit", (assert) => {
  // Test: allowNumberStrings
  const stringResult = sdk.checkEven("10", { allowNumberStrings: trueValue() })
  assert(stringResult === trueValue(), "Stringified integer '10' classified as even via config")

  // Test: enableDebug
  const debugResult = sdk.checkOdd(1, { enableDebug: trueValue() })
  assert(debugResult === trueValue(), "Debug-enabled audit session completed successfully")
  
  // Test: Default return value on non-number without throw
  const silentFail = sdk.checkEven("invalid", { throwOnNonNumber: falseValue() })
  assert(silentFail === falseValue(), "Non-number correctly returns falseValue when throw is disabled")
})

printAuditSummary()
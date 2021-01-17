// Closures give you access to an outer function's scope from an inner function.
// In Javascript, closures are created each time a function is made
function outerMost(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('🚀 innerVariable:', innerVariable)
        console.log('🚀 outerVariable:', outerVariable)
    }
}

const newFunction = outerMost('outside')
outerMost('inside')

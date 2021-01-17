function names() {
    // Person is a local variable created by names()
    let person = 'Mac'

    // sayName is our inner function, or our closure
    return function sayName() {
        // Logging `person` is possible because in Javascript, all functions have access to the data in their parent function
        console.log(`Hello! Nice to meet you ${person}`)
    }
}

// We assign the return value of the names function to a variable called myFunction
const myFunction = names()

// Then we invoke myFunction
myFunction()

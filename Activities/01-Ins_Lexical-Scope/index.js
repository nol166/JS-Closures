function outerFunction() {
    // Our function creates a local variable "topic"
    let topic = 'closures'

    // sayTopic is our inner function, also a closure
    function sayTopic() {
        // We access `topic` which is defined in the parent function
        console.log(`Today we are covering ${topic}`)
    }

    return sayTopic
}

// Here we set the value of caller to the return value of outerFunction, which happens to be sayTopic()
const caller = outerFunction()

// Invoking caller will log out the `topic` variable because of lexical scoping
caller()

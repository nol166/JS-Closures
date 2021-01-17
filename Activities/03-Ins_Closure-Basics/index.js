// It is important going into this activity that you know that a closure is the nested function and the outer context associated with that function

const stopWatch = () => {
    // Local variable to stopwatch
    let startTime = Date.now()

    // This method relies on startTime, so it has to look outside it's own scope for the variable
    const getDelay = () => {
        let elapsed = Date.now() - startTime
        console.log(`Milliseconds passed: ${elapsed}`)
    }

    // Here we return the getDelay method from the stopWatch function
    return getDelay
}

// Our function getDelay and the variable it depends on, startTime, is what makes up the closure
const timer = stopWatch()

// Notice on our first invocation of timer, our elapsed time is essentially 0 because the time it takes to run Date.now() and subtract the startTime variable is almost nothing
timer()

// Create a fake delay to increased the elapsed time
setTimeout(() => {
    timer()
}, 3000)

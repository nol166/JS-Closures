// Refactor a countdown function with a hardcoded starting number inside a closure so that it can count down from a user provided number

const countDown = (amount, increment) => {
    let countFrom = amount + increment
    return (decrement = () => {
        countFrom -= increment
        return countFrom
    })
}

const countingDown = countDown(90, 5)

console.log(countingDown())
console.log(countingDown())
console.log(countingDown())
console.log(countingDown())

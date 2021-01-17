const makeCountDown = (startingNum, decreaseBy) => {
    let countFrom = startingNum + decreaseBy
    return (decrement = () => {
        countFrom -= decreaseBy
        return countFrom
    })
}

const countingDown5 = makeCountDown(90, 5)
const countingDown2 = makeCountDown(100, 2)

console.log(countingDown5())
console.log(countingDown5())
console.log(countingDown5())
console.log(countingDown5())

console.log('')
console.log(countingDown2())
console.log(countingDown2())
console.log(countingDown2())
console.log(countingDown2())

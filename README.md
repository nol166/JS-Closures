# Javascript Closures in-depth

## Overview

This lesson plan goes over Javascript closures which can at first seem like a confusing and complex concept to students. The good news is, they are very simple once you wrap your head around them. 

This lesson plan contains three student activities accompanied by a review after each. Before each student activity we will introduce the students to the topic with a short 5 minute demonstration.

## Notes for Instructional Staff

* Please be ready to open the `index.html` file enclosed in each demo and activity and open the developer tools for your given browser. This can often be accessed by right clicking anywhere on the page, choosing "inspect element" and then clicking on the "console" tab from there.

* Remember that closures can be a very difficult topic to understand at first. Students may feel frustrated and may even avoid asking questions because of this. Be sure to periodically ask the students how they are feeling about the concepts and revisit them if need be.

## Goals for Today

At the end of the session students should be able to:

* Explain the concept of lexical scope

* Implement closures in Javascript

* Identify scoping issues within existing code

---

## Class Content

### Part 1: Stoke Curiosity (Instructor)

* Welcome the students to class and show them the following brain teaser to begin class

```js
function logNumbers() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000 * i)
    }
}

logNumbers()
```

* Explain that by looking at this code one might assume that it will log out `0, 1, 2` but it instead logs out `3, 3, 3`.

* Explain that this is a popular interview question for it's ability to test the applicants knowledge of closures and scoping.

* Inform students that it is okay to no know exactly what closures are just yet because today we are taking a deep dive!

* Reassure students that by the end of this lesson we will be able to recognize the issue with this code and explain why it behaves the way it does.

* Explain that having a solid understanding of scoping and closures will not only help them during interviews but make them better developers.

### Part 2: Lexical Scope (Instructor Demo)

* For this demo open [index.html](Activities/01-Ins_Lexical-Scope/index.html) in your browser and demo the following:

  * When we open the browser we are greeted with a message that says to open the developer console.

  * In the dev tools we see a `console.log` message.

* Open [index.js](Activities/01-Ins_Lexical-Scope/index.js) and explain the following:
  
  * `outerFunction` creates a local variable called `topic` and another function called `sayTopic()`.
  
  * `sayTopic` is considered an inner function because it is declared inside the `outerFunction` and only available in the body of `outerFunction`.
  
  * Take note that the `sayTopic` function doesn't have any local variables of it's own. Instead it can access any variable in the outer function's scope.

  * This is an example of "lexical scoping", which describes how a parser resolves variables when dealing with nested functions.

  ```js
  function outerFunction() {
      let topic = 'closures'

      function sayTopic() {
          console.log(`Today we are covering ${topic}`)
      }

      return sayTopic
  }
  ```

  * Notice that we assigned the return value of `outerFunction` to it's own variable called `caller`, and then we invoke it.

  ```js
  const caller = outerFunction()

  caller()
  ```
  
  * We are able to access the `topic` variable because of lexical scoping.
  
  * The term lexical references the fact that location of a variable in code determines it's availability.
  
  * 💡 It is important to remember that nested functions always have access to their parent's function scope.
  
* End the demo by asking the students the following:

  * 🧑‍🏫 Where can we learn more about lexical scope?
  
  * We can refer to the [MDN documentation on Lexical Scoping](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#lexical_scoping)

### Part 3: Lexical Scope (Student Activity)

* Point students in the direction of the correct folder for this activity which can be found in the [Unsolved](Activities/02-Stu_Lexical-Scope/Unsolved) folder.

* Have the students work together using the directions found in the [README.md](Activities/02-Stu_Lexical-Scope/README.md) file.


```md
# Access Data from Lexical Scope

In this activity you will work on this user story:

* As a developer, I want to understand lexical scoping by creating a function that accesses the surrounding state.

## Your Task

* It's done when I have opened `index.js` and modified the function so that it returns another function.

* It's done when the nested function logs out the `name` variable.

* It's done when I assign the return value of the outer function to another variable called `myFunction`.

* It's done when I have invoked `myFunction()` and ensured that the results appear in the developer console.

## Hints

* How can the definition of lexical scope help guide our understanding oh this activity?

## Resources

* [Wikipedia Definition of Lexical Scope](https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scope)
```

* Remind students to use each other as a resource to "rubber duck" ideas off one another. Also, there is no shame in googling!

### Part 4: Lexical Scope (Instructor Review)

* ☝️ Ask students how they are feeling about lexical scope?

* Advise students that we will go through the solutions together and if at any point they have questions, feel free to ask!

* The following talking points can be expanded upon for review:
  
  * 🔬 Lexical Scope
  
  * 📦 Closures

* Navigate to [index.js](Activities/02-Stu_Lexical-Scope/Solved/index.js) and demonstrate the following:

  * This activity starts out with a function declaration called `names` that declared a local variable called `person`

  ```js
  function names() {
      let person = 'Mac'
  ```

  * Inside our `names` function, we declared an inner function called `sayName` that console the a phrase containing the `person` variable.
  
  * 💡 Notice that the `sayName` function is the return value for the outer function, `names`.
  
  * By declaring a function that access the variable `person`, we have created a closure.
  
  * 💡 In Javascript all functions have access to the data in their parent function. This is an example of lexical scoping.  

  ```js
  return function sayName() {
      console.log(`Hello! Nice to meet you ${person}`)
  }
  ```

  * In order to use the return value from the names function, we have two options. 
  
  * We can add an extra set of parenthesis to the end of the names function call or we can set `names` return value to a new variable. Let's go with the former.

  ```js
  const myFunction = names()
  ```

  * Finally, we invoke our newly created variable `myFunction` to see the result in the developer console!

  ```js
  myFunction()
  ```

* Open [index.html](Activities/02-Stu_Lexical-Scope/Solved/index.html) in your browser and open developer console.

  * Show the output in the developer console.

* To end the review, ask students the following questions:

  * 🧑‍🏫 In your own words, what is the lexical scope?
  
  * Lexical scope describes how the Javascript interpreter resolves variable names within nested functions. It is not only
  
  * 🧑‍🏫 When in this activity did we create a closure?
  
  * The closure was created when we accessed a variable from the parent function's scope inside of the nested function's scope.
  
  * 🧑‍🏫 Be sure to check out the [MDN Documentation on Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#closure). Don't stress if you are not clear on them yet, we will be discussing them more in the next demo.      

### Part 5: Closure Basics (Instructor Demo)

* For this demo open [index.html](./Activities/03-Ins_Closure-Basics/index.html) in your browser and demo the following:

  * When we open the browser we are greeted with a message that says to open the developer console.

  * In the dev tools we see two `console.log` messages. Both of which seem to be logging out some time in milliseconds.

* Open [index.js](Activities/01-Ins_Lexical-Scope/index.js) and explain the following:

  * Before we dive into the code, let's take a moment to refresh ourselves with what a closure actually is. It is easy to take them for granted in Javascript because we see them all over the place.
  
  * Closure is nothing more than the following:

    ```
    nested function + outer context = closure
    ```

  * In other words, a closure is a small package containing the nested function  any variables it depends on from the parent scope.
  
  * In `index.js` we declared an outer function called `stopWatch()` that has a local variable of `startTime`.

  ```js
  const stopWatch = () => {
      let startTime = Date.now()
  ```

  * Now we introduce our nested function called `getDelay()` that declares it's own local variable, `elapsed`.
  
  * `elapsed` will be used to log out the amount of milliseconds passed from the start to the current time. 

  ```js
  const getDelay = () => {
      let elapsed = Date.now() - startTime
      console.log(`Milliseconds passed: ${elapsed}`)
  }
  ```

  * The last thing we do in our outer function is return our nested function, `getDelay()`

  ```js
  const stopWatch = () => {
      ...
      return getDelay
  }
  ```

  * Just like we did in the previous activity, we set the return value of our outer function, `stopWatch` to it's own variable called `timer`.
  
  * Then we invoke `timer()` twice. The first is to simulate immediate execution, and the latter is wrapped in a `setTimeout` to induce some delay.

  ```js
  timer()

  setTimeout(() => {
      timer()
  }, 3000)
  ```

  * 💡 The Javascript engine keeps track of all of the variables that the nested function relies on, even if the parent function has finished running.
  
  * As a result, we are able to reference the same exact start time even though the stopwatch function has stopped running long before timer was invoked.
  
  * We can see the results in the console:
    
  ```
  Milliseconds passed: 0
  Milliseconds passed: 3011
  ```

* Ask the students:

  * 🧑‍🏫 Can you think of an example of closures in Javascript that you didn't know was a closure until now?
  
  * Since any function that accesses variables outside it's local function scope, all functions that reference the global scope are closures. 

* To make for a smooth transition into next activity, please ask students to navigate to the [next activity folder](Activities/04-Stu_Closure-Basics) in their IDE.

### Part 6: Closure Basics (Student Activity)

* Make sure that students have navigated to the next activity found in [04-Stu_Closure-Basics](Activities/04-Stu_Closure-Basics)

* Have the students work together using the directions found in the [README.md](./Activities/04-Stu_Closure-Basics/README.md) file.

```md
# Implement Closures

In this activity you will work on this user story:

* As a developer, I want to demonstrate my knowledge of closures by creating a `makeCountDown` function that accesses the surrounding function state.

## Your Task

* It's done when I have created a function `makeCountDown` that returns a nested function.

* It's done when I have set the return value of `countDown` to a variable called `countingDown`. 

* It's done when invoking the `countingDown` for the first time will start a countdown from `startingNum`.

* It's done when every subsequent invocation of `countDown` returns the `startingNum` subtracted from the `decreasedBy` variable.


## Notes

* Refer to the [MDN Documentation on Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#closure)

## Hints

* How can we use the comments inside `index.js` to guide us in what our inner function should return?

* What kind of function is one that creates other functions?

## Bonus

* Using [Google](https://google.com), what are some complications you might run into when using closures within for loops?

```

### Part 7: Closure Basics (Instructor Review)

* ☝️ Ask students how they are feeling about closures?

* Advise students that we will go through the solutions together and if at any point they have questions, feel free to ask!

* Remind students that if they didn't have enough time or were unsure of how to complete the activity, that is perfectly okay. Let them know we will go through the activity together. 

* The following talking points can be expanded upon for review:
  
  * ⚙️ Parts of the closure
  
  * 🔭 Outer context (or surrounding state)

* Open [index.js](Activities/04-Stu_Closure-Basics/Solved/index.js) in your IDE and demonstrate the following:

  * So far we have discussed local variables and accessing variables from the parent function. But what about variables that are passed as arguments to a function? 

  * The goal of this activity was to create a function that counts down from the `startingNum` and decreases in increments of the `decreasedBy` number.

* Open [index.html](Activities/04-Stu_Closure-Basics/Solved/index.html) in your browser and prepare to demonstrate the output in the developer console.
  
  * When the function is invoked it should remember the state of the number that it is decreasing. For example, if we started with `90` and decreased by `5`, then the output would be something like this:

  ```js
  90
  85
  80
  75
  ```

  * To accomplish this we need to make use of closures in Javascript.

* Open [index.js](Activities/04-Stu_Closure-Basics/Solved/index.js) in your IDE and demonstrate the following:
  
  * To start we create a function called `makeCountDown` that accepts two arguments, `startingNum` and `decreasedBy`:

  ```js
  const makeCountDown = (startingNum, decreaseBy) => { }
  ```

  * You will notice that our output will include the very number we are starting with. But how do we log out that number before we start decrementing?
  
  * In order to do this we created a local variable called `countFrom` which is essentially 5 more than the starting number.

  ```js
  let countFrom = startingNum + decreaseBy
  ```

  * Our inner function, or nested function, returns the result of subtracting `decreasedBy`, in our case `5`, from the `countFrom` variable which will evaluates to `95`:
  
  * Then we return the `countFrom` from the nested function.

  ```js
  let countFrom = startingNum + decreaseBy

  return (decrement = () => {
      countFrom -= decreaseBy
      return countFrom
  })
  ```

  * You can think of this function as a factory that creates other functions with own specific outer context.
  
  * To demonstrate this, we created a variable called `countingDown5` with our `startingNum` of `90` and our `decreaseBy` number of `5`.

  * We also did the same starting with `100` that decrements by `2`. We set this to a variable called `countingDown2`

  ```js
  const countingDown5 = makeCountDown(90, 5)
  const countingDown2 = makeCountDown(100, 2)
  ```

  * When this code is ran in the browser you can see we have a total output of:

  ```sh
  90
  85
  80
  75

  100
  98
  96
  94
  ```

  * This is all made possible because of the way closures work. They take a snapshot of the outer context and remember them during execution time.
  
* To end the review, ask students the following questions:

  * 🧑‍🏫 Can someone tell me how this function is different than the ones we have worked on in prior activities?
  
  * This function relies on local variables that get passed as arguments to the parent function rather than being declared locally.
  
  * 🧑‍🏫 What is the nested function and outer context that make up this closure?
  
  * The nested function is `decrement`, and because it relies `countFrom` from the parent scope, it creates a closure. Also, because `countFrom` depends on the `startingNum` and `decreaseBy` variables, those too are part of the outer context.

  * 🧑‍🏫 Be sure to check out the [MDN Documentation on Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#closure) and review some more examples if your still unclear.

* Ask students if they have any questions before moving on to the next demo


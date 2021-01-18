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



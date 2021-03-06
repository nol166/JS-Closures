# Search Always Displays Pictures of Dogs

Work toward resolving the following issue:

* As a user, I should be able to search for a term and see images related to my search term.

## Expected Behavior

When a user enters a search term in the search field and clicks submit, the app should display images related to the current search term.

## Actual Behavior

When a user enters a search term and clicks the submit button, nothing happens.

## Steps to Reproduce:

1. Open `index.html` in the browser

2. When the page loads, enter a search term of "computer" and click submit.

3. Notice that all the images are related to dogs.

## Hints

* How can we use our understanding of lexical scope to help us diagnose the issue with our `searchTerm`?

* Use the `console.dir` statements in the developer console to examine the function scope and the variables inside of it. 
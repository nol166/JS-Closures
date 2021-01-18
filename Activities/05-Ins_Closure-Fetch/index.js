// Select the target on the DOM to later display our results
const resultsEl = document.getElementById('results')
const header = document.getElementById('result_container')

// Function that declares accepts an argument of type. Defaults to "food" if none is provided
const fetchData = (type = 'food') => {
    // Returns a function that contains a fetch request. It uses the type variable in the URL
    return (newSearch = () =>
        fetch(`https://random-data-api.com/api/${type}/random_${type}`)
            .then(data => data.json())
            .then(response => {
                // Create a new div element to display our results
                let newResultsDiv = document.createElement('span')

                // Set the inner text of our results div with the topic declared in the outer context
                newResultsDiv.innerHTML = `<h4>JSON results for random ${type}</h4>`

                // Prepend our new div to the header
                header.prepend(newResultsDiv)

                // Create a string from our JSON results and display them in the results element
                resultsEl.innerText = JSON.stringify(response)
            })
            .catch(err => console.error(err)))
}

// Instances of our fetchData function that will all have a different outer context
let searchFood = fetchData()
let searchApp = fetchData('app')
let searchName = fetchData('name')

// We only invoke our search food variable to start
searchFood()
// searchApp()
// searchName()

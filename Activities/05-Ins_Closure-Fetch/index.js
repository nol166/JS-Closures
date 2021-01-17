// Select the target on the DOM to later display our results
const resultsEl = document.getElementById('results')
const header = document.getElementById('result_container')

// Function that declares accepts an argument of type. Defaults to "food" if none is provided
const fetchData = (type = 'food') => {
    // Returns a fetch request
    return (newSearch = () =>
        fetch(`https://random-data-api.com/api/${type}/random_${type}`)
            .then(data => data.json())
            .then(response => {
                console.log(response)
                let newResultsDiv = document.createElement('span')
                newResultsDiv.innerHTML = `<h4>JSON results for random ${type}</h4>`
                header.prepend(newResultsDiv)
                resultsEl.innerText = JSON.stringify(response)
            })
            .catch(err => console.error(err)))
}

let searchFood = fetchData()
let searchApp = fetchData('app')
let searchName = fetchData('name')

searchFood()
// searchApp()
// searchName()

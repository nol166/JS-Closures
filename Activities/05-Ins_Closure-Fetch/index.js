// Select the target on the DOM to later display our results
const resultsEl = document.getElementById('results')

// Function that declares accepts an argument of type. Defaults to "food" if none is provided
const fetchData = (type = 'food') => {
    // Returns a fetch request
    return fetch(`https://random-data-api.com/api/${type}/random_${type}`)
        .then(data => data.json())
        .then(response => {
            console.log(response)
            resultsEl.innerText = JSON.stringify(response)
        })
        .catch(err => console.error(err))
}

let searchFood = fetchData()

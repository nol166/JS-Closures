// Elements selected on the DOM and assigned to variables
const searchForm = document.getElementById('searchForm')
const searchField = document.getElementById('searchField')
const submitBtn = document.getElementById('submitBtn')
const imageDiv = document.getElementById('imageContainer')

// Parts of our Giphy endpoint
const BASEURL = 'https://api.giphy.com/v1/gifs/search?q='
const APIKEY = '&api_key=dc6zaTOxFJmzC&limit=20'

// Global variable for the value of searchField
var searchTerm = searchField.value

// Function that returns a fetch request to the base URL with passed query
const search = query => {
    console.log(`the search term is ${query}`)
    return fetch(`${BASEURL}${query}${APIKEY}&rating=pg`)
}

// Event listener for the submit button
searchForm.addEventListener('submit', e => {
    // Prevent page from reloading when submit is clicked
    e.preventDefault()

    // Clear out any previous results
    imageDiv.innerText = ''
    console.log('search term when button is clicked', searchTerm)
    // Invoke our search function and return a function call to displayImages with the images passed in
    search(searchTerm)
        .then(result => result.json())
        .then(images => {
            return displayImages(images.data)
        })
})

// Helper function to map over our returned images and display each of them in the `imageDiv` element
const displayImages = images => {
    images.map(
        image =>
            (imageDiv.innerHTML += `<li><img src=${image.images.downsized.url} key=${image.id}></li>`)
    )
}

const baseURL = "https://collectionapi.metmuseum.org/public/collection/v1/search"
let search = ""
console.log(baseURL, search)

// $.ajax("https://collectionapi.metmuseum.org/public/collection/v1/objects/")
// .then((data)=>{
//     console.log(data)
//     console.log(data.department)
// })
// function that does the art search
const artistSearch = ((keywords)=>{const url=`${baseURL}hasImages=true&q=${}`})
$.ajax(url)
.then((keyWords) => {
    console.log(keyWords)

// render the data
    const $main = $("main")
    $main.empty()
    $main.html(`
    <h1>${artistDisplayName}</h1>
    <img src="${primaryImage}">
    `)
})
}

$("input[type=submit]").on("click", (event)=>
{   //prevent the refresh
    event.preventDefault()
    // grab text from input box
    const inputText=$("input[type=text]").val() // jquery val() actually grabs the value or it wont work
    // update the screen
    artistSearch(inputText)
})
artistSearch("")
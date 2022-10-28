
const objectIDURL = "https://collectionapi.metmuseum.org/public/collection/v1/objects"
const titleBaseURL = "https://collectionapi.metmuseum.org/public/collection/v1/search?q="
console.log(objectIDURL)

function artistSearch(objectID){
    const url=`${titleBaseURL}${objectID}`
    $.ajax(url)
    .then((objectIDs) => {
       console.log(objectIDs)
       const $main = $("main")
       $main.empty()
       objectIDs.objectIDs.slice(0,10).forEach((id)=>{
        console.log(id)
    const url2=`${objectIDURL}/${id}`
    console.log(url2)
    $.ajax(url2)
    .then((painting)=>{
        console.log(painting)
        const div=$("<div>")
        div.html(`
        <img src="${painting.primaryImage}">
        <h2>${painting.artistDisplayName}</h2>
        <h2>${painting.title}</h2>
        <h2>${painting.artistDisplayBio}</h3>
        <h2>${painting.department}</h3>
        `)
        $main.append(div)
    })
       })
    }) 
    
}
$("input[type=submit]").on("click", (event)=>
{   //prevent the refresh
    event.preventDefault()
    // grab text from input box
    //check if the artistDisplayName includes the search keyword,
    const inputText=$("input[type=text]").val() // jquery val() actually grabs the value or it wont work
    // update the screen
    
    artistSearch(inputText)
})



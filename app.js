$.ajax("https://collectionapi.metmuseum.org/public/collection/v1/objects/437133")
.then((data)=>{
    console.log(data)
    console.log(data.department)
})

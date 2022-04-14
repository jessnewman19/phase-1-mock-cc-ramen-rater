// write your code here


//SEE ALL RAMEN IMAGES IN THE DIV WITH ID OF RAMEN MENU
// 1. Fetch the data 
// 2. foreach loop through the data to grab the elements 
// 3. Grab the ramen menu div
// 4. Create an image element
// 5. Add the img element to the ramen menu

//CLICK ON IMAGE IN DIV AND SEE ALL INFO DISPLAYED INSIDE RAMEN DETAIL 
// 1. Add click event listener to the image
// 2. Grab the id for each ramen 
// 3. Fetch new data
// 4. Input 
let ramenMenuDiv = document.getElementById('ramen-menu')  

document.addEventListener('DOMContentLoaded', initialize)

function initialize () { 
  fetch('http://localhost:3000/ramens')
  .then(response => response.json())
  .then(data => {
    data.forEach(element => {
      let img = document.createElement("img")
      img.src = element.image 
      ramenMenuDiv.appendChild(img)

      img.addEventListener("click", () => { 
        let id = element.id
        console.log(id)
        fetch(`http://localhost:3000/ramens/${id}`)
        .then(response => response.json())
        .then(data => { 
          document.querySelector(".detail-image").src = data.image
          document.querySelector(".name").innerText = data.name
          document.querySelector(".restaurant").innerText = data.restaurant
          document.getElementById("rating-display").innerText = data.rating
          document.getElementById("comment-display").innerText = data.comment
        })
      })  
    })
  })
}
//CREATE NEW RAMEN AFTER SUBMITTING FORM
// 1. Grab the form 
// 2. Add an eventlistener on the form for a "submit"
// 3. Grab the information from the form via e.target 
// 4. Add the new information to the top 

const addNewRamen = () => { 
  const form = document.getElementById("new-ramen")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let newImage = document.createElement("img")
    newImage.src = e.target["new-image"].value
    ramenMenuDiv.appendChild(newImage)
    form.reset()
  })
}

addNewRamen()
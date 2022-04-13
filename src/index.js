// write your code here

//DECLARE GLOBAL VARIABLES
const ramenDiv = document.querySelector("div") //Find the div to input the images
// console.log(ramenDiv)
const form = document.querySelector("form")
// console.log(form)
const ramenDetailImage = document.getElementsByClassName("detail-image")
// console.log(ramenDetailImage)



//DOMContentLoaded event listener added to the document. 
document.addEventListener("DOMContentLoaded", (initialize)); 

//Callback function used after DOM content is loaded
function initialize () { 
  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(data => {
    //Make sure I can GET the data
    console.log(data)
    //ADD THE PHOTOS FROM THE DATA TO THE PAGE
    data.forEach(element => {
      let ramenImage = element.image 
      // console.log(ramenImage) 
      let img = document.createElement("img") //Create a new img for every element in the data
      img.src = ramenImage //Set the source for the image to the data
      img.id = element.id
      ramenDiv.appendChild(img) //Append image to the div
    })

    //Add new ramen image to ramenDiv
    form.addEventListener("submit", (e) => {
      e.preventDefault() //Prevent page from refreshing
      // console.log(e)
      // console.log(e.target["new-image"].value)
      let newRamenImg = document.createElement("img") //Create new ramenImg after submit
      newRamenImg.src = e.target["new-image"].value //Find value of the newRamenImg
      ramenDiv.appendChild(newRamenImg) //Append image to the div
      form.reset()
    })

    //Add ramen information to detail area


})

}


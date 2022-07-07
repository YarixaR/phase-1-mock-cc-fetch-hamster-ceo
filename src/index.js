const hamsterMenu = document.getElementById("hamster-menu");
const detailImage = document.querySelector(".detail-image")
const hamsterName = document.querySelector(".name")
const hamsterOccupation = document.querySelector(".occupation")



fetch("http://localhost:3000/hamsters")
.then(resp => resp.json())
.then(data => data.forEach(hamsterImages))

function hamsterImages(hamsters){
    const imgElement = document.createElement("img")
    imgElement.src = hamsters.image
    hamsterMenu.append(imgElement)

imgElement.addEventListener("click", () => {
detailImage.src = hamsters.image;
hamsterName.innerText = hamsters.name;
hamsterOccupation.innerText = hamsters.occupation;
})
}

const form = document.getElementById("new-hamster");
form.addEventListener("submit", function(e) {
    e.preventDefault();
    

    const newName = document.getElementById("new-name").value
    const newOccupation = document.getElementById("new-occupation").value
    const newImage = document.getElementById("new-image").value

   const hamsters = {
       name: newName,
       occupation: newOccupation,
       image: newImage
   }

hamsterImages(hamsters);
form.reset();
})
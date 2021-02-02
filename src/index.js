console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all' 
const dogHere = document.getElementById(`dog-image-container`)
const breedHere = document.getElementById('dog-breeds')

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(addImagesToDOM) 
}
  
function addImagesToDOM(data) {
    arrayOfImg = data["message"]
    const imgElements = arrayOfImg.map((d)=> {
        let img = document.createElement('img')
        img.src = d
        //console.log(li)
        return img
    })

   document.getElementById(`dog-image-container`).innerHTML = ""
   imgElements.forEach(element => {
        document.getElementById(`dog-image-container`).append(element)
   })
}
  
function fetchBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(addBreedsToDOM) 
}

function addBreedsToDOM(data) {
    const arrayOfBreeds = Object.keys(data.message)
    arrayOfBreeds.map((b)=> {
        let li = document.createElement('li')
        let ul = document.querySelector('#dog-breeds')
        li.innerText = b
        li.id = b
        ul.appendChild(li)
        li.addEventListener('click', event => {
            event.target.style.color = 'indigo'
        })
    })
}

function dropDownSelect() {
    let dropDown = document.querySelector('#breed-dropdown')
    dropDown.addEventListener('change', function (event) {
        showSelectBreeds(event.target.value)
    })
}

function showSelectBreeds(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
}
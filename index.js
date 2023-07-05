import dogs from "./data.js";
import Dog from "./Dog.js";
import { getNumber } from "./utils.js"

let isWaiting = false
let dog = new Dog(dogs[getNumber()])

render()

document.addEventListener("click", (e) => {
    e.preventDefault()

    if(!isWaiting) {
        if(e.target.closest("#like")) {
            dog.hasBeenLiked = true
            renderNextDog()
            
        }else if(e.target.closest("#dislike")) {
            dog.hasBeenLiked = false
            renderNextDog()
            
        }
    }
})

function render() {
    document.querySelector("main").innerHTML = dog.getDogHtml()           
}

function renderNextDog() {
    isWaiting = true
    dog.hasBeenSwiped = true
    render()
    setTimeout(() => {
        dog = new Dog(dogs[getNumber()])
        render()
        isWaiting = false
    }, 1000)
}
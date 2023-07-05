import dogs from "./data.js";
const length = dogs.length
let number = -1

function getNumber() {
    number = number === -1 ? Math.floor(Math.random() * length): (number + 1) % length

    return number
}

export { getNumber } 
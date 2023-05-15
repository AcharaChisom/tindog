import dogs from "./data.mjs";
import Dog from "./Dog.mjs"

let dogArr = [...dogs]
let currentDog = getDog()
let isWaiting = false

function getDog() {
    const dog = new Dog(dogArr.shift())
    if(dogArr.length === 0) {
        dogArr = [...dogs]
    }
    return dog
}

function render() {
    document.getElementById('main').innerHTML = currentDog.getDogHtnl()
}

document.body.addEventListener('click', (e) => {
    if(!isWaiting) {
        if(e.target.id) {
            isWaiting = true
            currentDog.setLikeState(e.target.id)
            render()

            setTimeout(() => {
                isWaiting = false
                currentDog = getDog()
                render()
            }, 1000)
        }
    }
})

render()

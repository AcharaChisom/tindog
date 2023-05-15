import dogs from "./data.mjs";
import Dog from "./Dog.mjs"

let dogArr = [...dogs]
let currentDog = getDog()

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
    if(e.target.id) {
        currentDog.setLikeState(e.target.id)
        render()

        setTimeout(() => {
            currentDog = getDog()
            render()
        }, 1000)
    }
})

render()

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setLikeState(id) {
        if(id === 'cross') {
            this.hasBeenSwiped = true
        } else if(id === 'heart') {
            this.hasBeenSwiped = true
            this.hasBeenLiked = true
        }
    }

    getDogHtnl() {
        const { avatar, name, age, bio, hasBeenSwiped, hasBeenLiked } = this

        let badgeHtml = ''
        if(hasBeenSwiped) {
            if(hasBeenLiked) {
                badgeHtml = `
                    <img src="./images/badge-like.png" class="badge">
                `
            } else {
                badgeHtml = `
                    <img src="./images/badge-nope.png" class="badge">
                `
            }
        }

        return `
        <div class="main__img" id="badge-display">
            <img src=${avatar} class="main__user-img">
            ${badgeHtml}
            <div class="user-info">
                <p class="user-info-name">${name}, ${age}</p>
                <p class="user-info-question">${bio}</p>
            </div>
        </div>
        <div class="main__btns">
            <div class="main__btn cross" >
                <img src="./images/icon-cross.png" id="cross" class="btn-img">
            </div>
            <div class="main__btn heart" >
                <img src="./images/icon-heart.png" id="heart" class="btn-img">
            </div>
        </div>
        `
    }

}

export default Dog

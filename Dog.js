function Dog(data) {
    Object.assign(this, data)
    this.badgeHtml = ''

    this.getBadgeHtml = function() {
        let { hasBeenLiked, hasBeenSwiped } = this
        const badge = hasBeenLiked ? 'like': 'nope'

        return hasBeenSwiped ? `<img class="badge" src="./images/badge-${badge}.png" alt="alt" />`: ''
     
    }

    this.getDogHtml = function() {
        let {name, avatar, age, bio, badgeHtml } = this
        badgeHtml = this.getBadgeHtml()

        return `
            <div class="profile-pic" style="background-image: url('${avatar}')">
                ${badgeHtml}
                <div class="info-text">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                </div>
            </div>`
    }

}

export default Dog
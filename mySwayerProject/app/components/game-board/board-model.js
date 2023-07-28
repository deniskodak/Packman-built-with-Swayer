/** @implements {IBoardModel} */
class BoardModel {
    #defaultGhosts = []

    state = {
        ghosts: this.#defaultGhosts,
    }

    updateGhosts(ghosts) {
        this.state.ghosts = ghosts
    }
}

export default BoardModel

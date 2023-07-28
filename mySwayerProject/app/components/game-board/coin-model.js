class CoinModel {
    #defaultEaten = false

    state = {
        isEaten: this.#defaultEaten,
    }

    eatCoin() {
        this.state.isEaten = true
    }
}

export default CoinModel

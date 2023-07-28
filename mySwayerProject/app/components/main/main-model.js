import { MODES } from '../../constants/game.js'
import PopupModel from '../shared/popup/popup-model.js'

/** @implements {IMainModel} */
class MainModel {
    #defaultScore = 0
    #defaultTurns = 0
    #defaultCoinsAmount = 250
    #defaultMode = MODES.medium

    state = {
        stats: {
            score: this.#defaultScore,
            turns: this.#defaultTurns,
            coinsAmount: this.#defaultCoinsAmount,
        },
        mode: this.#defaultMode,

        modePopupModel: new PopupModel(),
        gameLostPopupModel: new PopupModel(false),
    }

    increaseScore() {
        this.state.stats.score += 1
    }

    increaseTurn() {
        this.state.stats.turns += 1
    }

    resetModel() {
        this.state.stats.score = 0
        setTimeout(() => (this.state.stats.turns = 0))
    }

    updateMode(mode) {
        this.state.mode = mode
    }
}

export default MainModel

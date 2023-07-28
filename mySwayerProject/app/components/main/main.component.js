import { MODES } from '../../constants/game.js'
import {
    TURN_CHANNEL,
    GAME_STARTED,
    PACKMAN_DIRECTION_CHANNEL,
    GHOST_DIRECTION_CHANNEL,
    BOARD_SCOPE,
    PACKMAN_SCOPE,
    GHOST_SCOPE,
    COIN_CHANNEL,
    GAME_LOST,
    RESTART_GAME,
} from '../../constants/channels.js'
import PopupModel from '../shared/popup/popup-model.js'
import { styleVariables } from '../../styles/variables.js'

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

/** @type {Styles} */
const mainStyles = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: styleVariables.secondary,
    boxSizing: 'border-box',
    padding: '2rem',
}

/** @type {Schema} */
export default () => {
    const mainModel = new MainModel()
    const selectOnChange = mainModel.updateMode.bind(mainModel)
    const onRadioChange = (value) => selectOnChange(value)

    return {
        tag: 'main',
        styles: mainStyles,
        model: mainModel,
        channels: {
            [PACKMAN_DIRECTION_CHANNEL](data) {
                this.emitMessage(PACKMAN_DIRECTION_CHANNEL, data, PACKMAN_SCOPE)
            },
            [TURN_CHANNEL]() {
                this.model.increaseTurn()
            },
            [GAME_STARTED]() {
                this.emitMessage(
                    GAME_STARTED,
                    this.model.state.mode,
                    BOARD_SCOPE
                )
                this.model.state.modePopupModel.hidePopup()
                this.emitMessage(GHOST_DIRECTION_CHANNEL, '', GHOST_SCOPE)
            },
            [COIN_CHANNEL](coin) {
                console.log(coin, 'coin')
                this.model.increaseScore()
                this.emitMessage(COIN_CHANNEL, coin.id, BOARD_SCOPE)
            },
            [GAME_LOST]() {
                this.model.state.gameLostPopupModel.openPopup()
                this.emitMessage(GAME_LOST, '', BOARD_SCOPE)
            },
            [RESTART_GAME]() {
                this.model.state.gameLostPopupModel.hidePopup()
                this.model.resetModel()
                this.model.state.modePopupModel.openPopup()
            },
        },
        children: ({
            modePopupModel,
            gameLostPopupModel,
            stats: { score, turns },
            mode,
        }) => {
            console.log(turns, 'turns')
            return [
                {
                    path: '@components/header/header.component',
                    input: mainModel,
                },
                {
                    path: '@components/game-board/game-board.component',
                    input: mainModel,
                },

                modePopupModel.state.visible && {
                    path: '@components/mode-popup/mode-popup.component',
                    input: { onRadioChange },
                },

                gameLostPopupModel.state.visible && {
                    path: '@components/lost-popup/lost-popup.component',
                    input: { score, turns, mode },
                },
            ].filter(Boolean)
        },
    }
}

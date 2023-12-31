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
    COIN_SCOPE,
    RESTART_GAME,
} from '../../constants/channels.js'
import MainModel from './main-model.js'
import { styleVariables } from '../../styles/variables.js'

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
                this.model.increaseScore()
                this.emitMessage(COIN_CHANNEL, coin.id, COIN_SCOPE)
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
        }) =>
            [
                {
                    path: '@components/header/header.component',
                    input: mainModel,
                },
                {
                    path: '@game/board/board.component',
                    input: mainModel,
                },

                modePopupModel.state.visible && {
                    path: '@popups/mode-popup.component',
                    input: { onRadioChange },
                },

                gameLostPopupModel.state.visible && {
                    path: '@popups/lost-popup.component',
                    input: { score, turns, mode },
                },
            ].filter(Boolean),
    }
}

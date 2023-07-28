import {
    CONTENT_SCOPE,
    TURN_CHANNEL,
    COIN_CHANNEL,
    GAME_LOST,
} from '../../../constants/channels.js'

/** @implements {ICreatureMessenger} */
export default class CreatureMessenger {
    constructor(messenger = null) {
        this.messenger = messenger
    }

    sendCoinTouched(coin) {
        this.messenger(COIN_CHANNEL, coin, CONTENT_SCOPE)
    }

    sendTurnChanged() {
        this.messenger(TURN_CHANNEL, '', CONTENT_SCOPE)
    }

    sendGameLost() {
        this.messenger(GAME_LOST, '', CONTENT_SCOPE)
    }

    sendGameWin() {}
}

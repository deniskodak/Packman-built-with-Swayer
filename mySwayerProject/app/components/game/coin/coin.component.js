import { styleVariables, coinBackground } from '../../../styles/variables.js'
import { bounceTopAnimation } from '../../../styles/bounceTopAnimation.js'
import { COIN_ID, EATEN_COIN_ID } from '../../../constants/game.js'
import { COIN_CHANNEL } from '../../../constants/channels.js'
import CoinModel from './coin-model.js'

/** @type {Styles} */
const coinStyles = {
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    background: coinBackground,
    backgroundSize: 'contain',
    backgroundColor: styleVariables.primary,
    compute: ({ isEaten }) => ({
        animation: isEaten ? 'bounce-top 0.9s both' : '',
    }),
    animations: [bounceTopAnimation],
}

/** @returns {Schema} */
export default (index) => {
    const coinId = COIN_ID + index

    return {
        tag: 'div',
        styles: {
            padding: '20px',
        },
        attrs: {
            id: coinId,
        },
        model: new CoinModel(),
        channels: {
            [COIN_CHANNEL](eatenCoinId) {
                if (coinId !== eatenCoinId) return
                this.attrs.id = EATEN_COIN_ID
                this.model.eatCoin()
            },
        },
        children: [
            {
                tag: 'div',
                styles: coinStyles,
            },
        ],
    }
}

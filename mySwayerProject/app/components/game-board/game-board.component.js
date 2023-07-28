import { styleVariables } from '../../styles/variables.js'
import { GAME_STARTED, GAME_LOST } from '../../constants/channels.js'
import { MODE_GHOSTS, BOARD_ID } from '../../constants/game.js'
import BoardModel from './board-model.js'

/** @type {Styles} */
const boardStyles = {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    width: '1250px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: styleVariables.boardBackground,
}

/** @returns {ComponentRef} */
const renderGhost = (ghostName) => ({
    path: '@components/creature/ghost.component',
    input: { name: ghostName },
})

/** @returns {ComponentRef} */
const packman = {
    path: '@components/creature/packman.component',
}

/** @returns {Schema} */
export default (model) => {
    const boardArray = Array.from(Array(model.state.stats.coinsAmount).keys())
    const coins = boardArray.map((index) => ({
        path: '@components/game-board/coin.component',
        input: index,
    }))

    return {
        tag: 'div',
        styles: {
            margin: '3rem auto 0',
            padding: '1rem',
        },
        attrs: {
            id: BOARD_ID,
        },
        model: new BoardModel(),
        channels: {
            [GAME_STARTED](mode) {
                this.model.updateGhosts(MODE_GHOSTS[mode])
            },
            [GAME_LOST]() {
                this.model.updateGhosts([])
            },
        },
        children: ({ ghosts }) => {
            const creatures = ghosts.length
                ? [packman, ...ghosts.map(renderGhost)]
                : []

            return [
                {
                    tag: 'div',
                    styles: boardStyles,
                    model,
                    children: coins.concat(creatures),
                },
            ]
        },
    }
}

export const TURN_CHANNEL = 'turnChangedChannel'
export const GAME_STARTED = 'gameStarted'
export const PACKMAN_DIRECTION_CHANNEL = 'changePackmanDirectionChannel'
export const GHOST_DIRECTION_CHANNEL = 'changeGhostDirectionChannel'
export const COIN_CHANNEL = 'coinChannel'
export const GAME_LOST = 'gameLost'
export const RESTART_GAME = 'restartGame'

export const CONTENT_SCOPE = { scope: ['@components/main/main.component'] }
export const PACKMAN_SCOPE = { scope: '@components/creature/packman.component' }
export const GHOST_SCOPE = { scope: '@components/creature/ghost.component' }
export const COIN_SCOPE = { scope: '@components/game-board/coin.component' }
export const BOARD_SCOPE = {
    scope: '@components/game-board/game-board.component',
}

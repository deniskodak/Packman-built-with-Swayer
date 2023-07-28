export const MODES = {
    easy: 'easy',
    medium: 'medium',
    hard: 'hard',
}

export const GAME_MODES = {
    [MODES.easy]: 'easy mode',
    [MODES.medium]: 'medium mode',
    [MODES.hard]: 'hard mode',
}

export const GHOSTS = {
    blinky: 'blinky',
    pinky: 'pinky',
    inky: 'inky',
    clyde: 'clyde',
    ghosted: 'ghosted',
}

const hardModeGhosts = [
    GHOSTS.blinky,
    GHOSTS.pinky,
    GHOSTS.inky,
    GHOSTS.clyde,
    GHOSTS.ghosted,
]

export const MODE_GHOSTS = {
    [MODES.easy]: hardModeGhosts.slice(0, 2).concat(GHOSTS.ghosted),
    [MODES.medium]: hardModeGhosts.slice(0, 3).concat(GHOSTS.ghosted),
    [MODES.hard]: hardModeGhosts,
}
export const BOARD_PADDING = 16
export const COIN_ID = 'coin'
export const EATEN_COIN_ID = 'eaten'
export const BOARD_ID = 'board-wrapper'
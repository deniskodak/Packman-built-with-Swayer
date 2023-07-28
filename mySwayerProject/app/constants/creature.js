export const CREATURE_TYPES = {
    packman: 'packman',
    ghost: 'ghost',
}

export const CREATURE_DIRECTIONS = {
    left: 'left',
    right: 'right',
    up: 'top',
    down: 'bottom',
}

export const CREATURE_OPPOSITE_POSITION = {
    [CREATURE_DIRECTIONS.left]: CREATURE_DIRECTIONS.right,
    [CREATURE_DIRECTIONS.right]: CREATURE_DIRECTIONS.left,
    [CREATURE_DIRECTIONS.down]: CREATURE_DIRECTIONS.up,
    [CREATURE_DIRECTIONS.up]: CREATURE_DIRECTIONS.down,
}

export const CREATURE_STEP_SIZE = 10
export const CREATURE_STEP_DELAY = 100
export const HARD_GHOST_STEP_DELAY = 50
export const CREATURE_SIZE = 50
export const GHOST_DIRECTION_TIMEOUT = 1000
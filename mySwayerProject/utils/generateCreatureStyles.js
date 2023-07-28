import {
    CREATURE_OPPOSITE_POSITION,
    CREATURE_DIRECTIONS,
} from '../constants/creature.js'

const POSITIONS_VALUES = Object.values(CREATURE_DIRECTIONS)

const generateStylesPositions = (statePositions) =>
    POSITIONS_VALUES.reduce((position, key) => {
        const oppositeKey = CREATURE_OPPOSITE_POSITION[key]
        position[key] = statePositions[oppositeKey] + 'px'
        return position
    }, {})

export default generateStylesPositions

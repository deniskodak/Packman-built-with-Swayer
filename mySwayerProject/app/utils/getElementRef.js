import { CREATURE_TYPES } from '../constants/creature.js'
import { GHOSTS, BOARD_ID } from '../constants/game.js'

const ghostsIds = Object.keys(GHOSTS)
export const getElementRefById = (id) => document.querySelector('#' + id)

export const getPackmanRef = () => getElementRefById(CREATURE_TYPES.packman)

export const getGhostsRefs = () =>
    ghostsIds.map(getElementRefById).filter(Boolean)

export const getBoardRef = () => getElementRefById(BOARD_ID)

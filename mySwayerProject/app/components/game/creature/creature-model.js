import {
    CREATURE_DIRECTIONS,
    CREATURE_TYPES,
    CREATURE_STEP_DELAY,
    CREATURE_STEP_SIZE,
    CREATURE_OPPOSITE_POSITION,
    HARD_GHOST_STEP_DELAY,
} from '../../../constants/creature.js'
import { GHOSTS } from '../../../constants/game.js'

const INITIAL_PACKMAN_POSITION = {
    [CREATURE_DIRECTIONS.left]: 0,
    [CREATURE_DIRECTIONS.right]: 0,
    [CREATURE_DIRECTIONS.down]: 0,
    [CREATURE_DIRECTIONS.up]: 0,
}

const INITIAL_GHOST_POSITION = {
    ...INITIAL_PACKMAN_POSITION,
    [CREATURE_DIRECTIONS.down]: 225,
    [CREATURE_DIRECTIONS.right]: 600,
}

const INITIAL_CREATURE_POSITION = {
    [CREATURE_TYPES.ghost]: { ...INITIAL_GHOST_POSITION },
    [CREATURE_TYPES.packman]: { ...INITIAL_PACKMAN_POSITION },
}

/** @implements {ICreatureModel} */
export default class CreatureModel {
    constructor(creatureType, creatureId) {
        this.state = {
            direction: CREATURE_DIRECTIONS.right,
            position: { ...INITIAL_CREATURE_POSITION[creatureType] },
        }
        this.positionInterval = 0
        this.creatureType = creatureType
        this.creatureId = creatureId
        this.stepDelay = this.getStepDelay(creatureId)
        this.isCreaturePackman = creatureType === CREATURE_TYPES.packman

        this.messenger = null
        this.intersect = null
    }

    get direction() {
        return this.state.direction
    }

    updateDirection(direction) {
        const isDirectionUpdated = this.state.direction !== direction

        if (this.isCreaturePackman && isDirectionUpdated) {
            this.messenger.sendTurnChanged()
        }

        if (isDirectionUpdated) this.state.direction = direction

        if (this.positionInterval) clearInterval(this.positionInterval)

        this.updatePosition()
    }

    updatePosition() {
        const interval = setInterval(() => {
            const { direction, position } = this.state
            const oppositeDirection = CREATURE_OPPOSITE_POSITION[direction]
            const isPackmanCreature =
                this.creatureType === CREATURE_TYPES.packman

            if (isPackmanCreature) {
                const isCoinTouched = this.intersect.checkIsCoinTouched()
                if (isCoinTouched) {
                    const coin = this.intersect.lastTouchedCoin
                    this.messenger.sendCoinTouched(coin)
                }
            }

            const isEnemyTouched = this.intersect.checkIsEnemyTouched()
            if (isEnemyTouched) return this.messenger.sendGameLost()
            // todo count turns
            const isElementStuck = this.intersect.checkIsElementStuck(direction)

            if (isElementStuck) return clearInterval(interval)

            position[direction] += CREATURE_STEP_SIZE
            position[oppositeDirection] -= CREATURE_STEP_SIZE
        }, this.stepDelay)

        this.positionInterval = interval
    }

    getStepDelay(creatureId) {
        return creatureId === GHOSTS.ghosted
            ? HARD_GHOST_STEP_DELAY
            : CREATURE_STEP_DELAY
    }

    resetDirection() {
        this.state.position = {
            ...INITIAL_CREATURE_POSITION[this.creatureType],
        }
        setTimeout(() => (this.state.direction = CREATURE_DIRECTIONS.right))
    }

    setMessenger(creatureMessenger) {
        this.messenger = creatureMessenger
    }

    setIntersect(creatureIntersect) {
        this.intersect = creatureIntersect
    }
}

import { CREATURE_DIRECTIONS, CREATURE_SIZE } from '../../constants/creature.js'
import { COIN_ID } from '../../constants/game.js'
import { BOARD_PADDING } from '../../constants/game.js'
import { getBoardRef } from '../../utils/getElementRef.js'

const DIRECTION_FIX = CREATURE_SIZE + BOARD_PADDING + BOARD_PADDING / 2
const BOTTOM_DIRECTION_FIX = CREATURE_SIZE + BOARD_PADDING

/** @implements {ICreatureIntersect} */
export default class CreatureIntersect {
    #boardRef = getBoardRef()

    constructor(creatureRef = null, enemyRefs = []) {
        this.creatureRef = creatureRef
        this.enemyRefs = enemyRefs
        this.lastTouchedCoin = null
    }

    checkIsCoinTouched() {
        const creatureRect = this.#getElementRect(this.creatureRef)
        this.lastTouchedCoin = document
            .elementsFromPoint(creatureRect.x, creatureRect.y)
            .find((element) => element.id.includes(COIN_ID))

        return !!this.lastTouchedCoin
    }

    checkIsEnemyTouched() {
        const creatureRect = this.#getElementRect(this.creatureRef)
        const isEnemyTouched = this.enemyRefs.some((enemyRef) => {
            const enemyRect = this.#getElementRect(enemyRef)
            return this.#checkSingleEnemyTouched(creatureRect, enemyRect)
        })

        return isEnemyTouched
    }

    checkIsElementStuck(direction) {
        const creatureRect = this.#getElementRect(this.creatureRef)
        const boardRect = this.#getElementRect(this.#boardRef)

        switch (direction) {
            case CREATURE_DIRECTIONS.up:
                return creatureRect.bottom - DIRECTION_FIX <= boardRect.top
            case CREATURE_DIRECTIONS.down:
                return (
                    creatureRect.top + BOTTOM_DIRECTION_FIX >= boardRect.bottom
                )
            case CREATURE_DIRECTIONS.left:
                return creatureRect.right - DIRECTION_FIX <= boardRect.left
            case CREATURE_DIRECTIONS.right:
                return creatureRect.left + DIRECTION_FIX >= boardRect.right
            default:
                return true
        }
    }

    #checkSingleEnemyTouched(creatureRect, enemyRect) {
        return !(
            creatureRect.bottom <= enemyRect.top ||
            creatureRect.top >= enemyRect.bottom ||
            creatureRect.right <= enemyRect.left ||
            creatureRect.left >= enemyRect.right
        )
    }

    #getElementRect(element) {
        return element.getBoundingClientRect()
    }
}

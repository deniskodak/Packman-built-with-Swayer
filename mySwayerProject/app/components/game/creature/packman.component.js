import {
    CREATURE_TYPES,
    CREATURE_DIRECTIONS,
    CREATURE_SIZE,
} from '../../../constants/creature.js'
import { PACKMAN_DIRECTION_CHANNEL } from '../../../constants/channels.js'

import CreatureModel from './creature-model.js'
import CreatureMessenger from './creature-messenger.js'
import CreatureIntersect from './creature-intersect.js'

import generateStylesPositions from '../../../utils/generateCreatureStyles.js'
import { getGhostsRefs, getPackmanRef } from '../../../utils/getElementRef.js'
import { creatureBackground } from '../../../styles/variables.js'

const ROTATE_DEGREES = {
    [CREATURE_DIRECTIONS.left]: '180deg',
    [CREATURE_DIRECTIONS.down]: '90deg',
    [CREATURE_DIRECTIONS.up]: '270deg',
    [CREATURE_DIRECTIONS.right]: '0deg',
}

const checkIsTurnChanged = (prevTurn, curTurn) => prevTurn !== curTurn

/** @type {Styles} */
export const packmanStyles = {
    position: 'absolute',
    width: CREATURE_SIZE + 'px',
    height: CREATURE_SIZE + 'px',
    background: creatureBackground[CREATURE_TYPES.packman],
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    compute: (state) => {
        const positions = generateStylesPositions(state.position)

        const newStyles = {
            transform: `rotate(${ROTATE_DEGREES[state.direction]})`,
            ...positions,
        }
        return newStyles
    },
}

/** @type {Schema<ICreatureModel>} */
export default {
    tag: 'div',
    model: new CreatureModel(CREATURE_TYPES.packman, CREATURE_TYPES.packman),
    styles: packmanStyles,
    attrs: {
        id: CREATURE_TYPES.packman,
    },
    hooks: {
        ready() {
            const boundedEmitMessage = this.emitMessage.bind(this)

            const creatureMessenger = new CreatureMessenger(boundedEmitMessage)
            const creatureIntersect = new CreatureIntersect(
                getPackmanRef(),
                getGhostsRefs()
            )

            this.model.setIntersect(creatureIntersect)
            this.model.setMessenger(creatureMessenger)
            this.model.updateDirection(CREATURE_DIRECTIONS.right)
        },
        destroy() {
            this.model.resetDirection()
            clearInterval(this.model.positionInterval)
        },
    },
    channels: {
        [PACKMAN_DIRECTION_CHANNEL]({ direction }) {
            const prevTurn = this.model.direction
            if (!checkIsTurnChanged(prevTurn, direction)) return

            this.model.updateDirection(direction)
        },
    },
}

import {
    CREATURE_TYPES,
    GHOST_DIRECTION_TIMEOUT,
} from '../../constants/creature.js'

import CreatureModel from './creature-model.js'
import CreatureMessenger from './creature-messenger.js'
import CreatureIntersect from './creature-intersect.js'

import { packmanStyles, getPackmanRef } from './packman.component.js'
import { ghostsBackground } from '../../styles/variables.js'

import generateStylesPositions from '../../utils/generateCreatureStyles.js'
import getRandomCreatureDirection from '../../utils/getRandomCreatureDirection.js'
import getElementRef from '../../utils/getElementRef.js'

/** @returns {Styles} */
const generateGhostStyles = (ghostName) => ({
    ...packmanStyles,
    background: ghostsBackground[ghostName],
    compute: (state) => {
        const positions = generateStylesPositions(state.position)

        return { ...positions }
    },
})

/** @type {Schema<ICreatureModel>} */
export default ({ name }) => ({
    tag: 'div',
    model: new CreatureModel(CREATURE_TYPES.ghost, name),
    styles: generateGhostStyles(name),
    attrs: {
        id: name,
    },
    hooks: {
        ready() {
            const boundedEmitMessage = this.emitMessage.bind(this)
            const creatureRef = getElementRef(name)()
            const packmanRef = getPackmanRef()

            const creatureMessenger = new CreatureMessenger(boundedEmitMessage)
            const creatureIntersect = new CreatureIntersect(creatureRef, [
                packmanRef,
            ])

            this.model.setIntersect(creatureIntersect)
            this.model.setMessenger(creatureMessenger)

            this.props.interval = setInterval(() => {
                const randomDirection = getRandomCreatureDirection()
                this.model.updateDirection(randomDirection)
            }, GHOST_DIRECTION_TIMEOUT)
        },
        destroy() {
            clearInterval(this.props.interval)
        },
    },
    props: {
        interval: null,
    },
})

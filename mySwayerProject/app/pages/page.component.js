import {
    PACKMAN_DIRECTION_CHANNEL,
    CONTENT_SCOPE,
} from '../constants/channels.js'
import { CREATURE_DIRECTIONS, CREATURE_TYPES } from '../constants/creature.js'

const ARROWS_KEYS = {
    ArrowDown: CREATURE_DIRECTIONS.down,
    ArrowUp: CREATURE_DIRECTIONS.up,
    ArrowLeft: CREATURE_DIRECTIONS.left,
    ArrowRight: CREATURE_DIRECTIONS.right,
}

/** @type {Styles} */
const bodyStyles = {
    margin: 0,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    overflow: 'hidden',
}

/** @type {Schema} */
export default {
    tag: 'html',
    attrs: { lang: 'en' },
    children: [
        { path: '@pages/head.component' },
        {
            tag: 'body',
            events: {
                keydown(event) {
                    if (!ARROWS_KEYS[event.key]) return
                    const data = {
                        direction: ARROWS_KEYS[event.key],
                        creatureType: CREATURE_TYPES.packman,
                    }
                    this.emitMessage(
                        PACKMAN_DIRECTION_CHANNEL,
                        data,
                        CONTENT_SCOPE
                    )
                },
            },
            styles: bodyStyles,
            children: [{ path: '@components/main/main.component' }],
        },
    ],
}

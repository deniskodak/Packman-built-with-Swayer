import { RESTART_GAME, CONTENT_SCOPE } from '../../constants/channels.js'
import { styleVariables } from '../../styles/variables.js'

/** @type {Styles} */
const statLabelStyles = {
    color: styleVariables.secondary,
    fontSize: '1.25rem',
}

/** @type {Styles} */
const statInfoStyles = {
    fontWeight: '700',
    textTransform: 'capitalize',
    color: styleVariables.secondaryAccent,
}

/** @param {string} label */
/** @param {string|number} stat */
/** @returns {Schema} */
const renderStat = (label, stat) => ({
    tag: 'p',
    styles: statLabelStyles,
    children: [
        label,
        {
            tag: 'span',
            styles: statInfoStyles,
            text: stat,
        },
    ],
})

/** @param {string} mode */
/** @param {number} turns */
/** @param {number} score */
/** @returns {Schema} */
const renderStats = (mode, turns, score) => ({
    tag: 'div',
    children: [
        ['Game mode: ', mode],
        ['Turns made: ', turns],
        ['Gained score: ', score],
    ].map(([label, stat]) => renderStat(label, stat)),
})

/** @returns {Schema} */
export default ({ score, turns, mode }) => {
    return {
        tag: 'div',
        children: [
            {
                path: '@shared/popup/popup.component',
                input: {
                    title: 'Game lost',
                    okButtonOptions: {
                        channelName: RESTART_GAME,
                        channelOptions: CONTENT_SCOPE,
                    },
                    children: [renderStats(mode, turns, score)],
                },
            },
        ],
    }
}

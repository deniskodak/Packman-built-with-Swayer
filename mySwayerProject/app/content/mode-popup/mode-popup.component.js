import { MODES, GAME_MODES } from '../../../constants/game.js'
import { GAME_STARTED, CONTENT_SCOPE } from '../../../constants/channels.js'

/**
 * This callback is displayed as a global member.
 * @callback onRadioChange
 * @param {string} value
 */

/** @param {onRadioChange} onChange */
/** @returns {ComponentRef} */
const renderRadio = (onChange) => ({
    path: '@shared/radio/radio.component',
    input: {
        options: Object.keys(GAME_MODES).map((key) => ({
            value: key,
            label: GAME_MODES[key],
        })),
        defaultValue: MODES.medium,
        onChange,
    },
})

/** @returns {Schema} */
export default ({ onRadioChange }) => {
    return {
        tag: 'div',
        children: [
            {
                path: '@shared/popup/popup.component',
                input: {
                    title: 'Choose game mode',
                    okButtonOptions: {
                        channelName: GAME_STARTED,
                        channelOptions: CONTENT_SCOPE,
                    },
                    children: [renderRadio(onRadioChange)],
                },
            },
        ],
    }
}

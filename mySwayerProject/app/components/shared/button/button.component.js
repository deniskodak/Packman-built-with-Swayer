import {
    styleVariables,
    commonControlStyles,
} from '../../../styles/variables.js'

/** @type {Styles} */
export const buttonStyles = {
    ...commonControlStyles,
    textTransform: 'uppercase',
}

export const BUTTON_THEMES = {
    light: 'light',
    dark: 'dark',
}

const generateThemeButtonStyles = (firstCl, secondCl, activeCl) => {
    /** @type {Styles} */
    const themeStyle = {
        background: firstCl,
        borderColor: firstCl,
        color: secondCl,
        hover: {
            background: secondCl,
            borderColor: firstCl,
            color: firstCl,
        },
        active: {
            background: activeCl,
        },
    }

    themeStyle.focus = themeStyle.hover

    return themeStyle
}

const { primary, primaryAccent, secondary, secondaryAccent } = styleVariables

const THEME_STYLES = {
    [BUTTON_THEMES.light]: generateThemeButtonStyles(
        primary,
        secondary,
        secondaryAccent
    ),
    [BUTTON_THEMES.dark]: generateThemeButtonStyles(
        secondary,
        primary,
        primaryAccent
    ),
}

/** @returns {Schema} */
export default ({
    text = '',
    channelName,
    channelOptions,
    theme = BUTTON_THEMES.light,
}) => ({
    tag: 'button',
    text,
    styles: { ...buttonStyles, ...THEME_STYLES[theme] },
    events: {
        click() {
            this.emitMessage(channelName, '', channelOptions)
        },
    },
})

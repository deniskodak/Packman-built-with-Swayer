import { styleVariables } from '../../../styles/variables.js'

const RADIO_NAME = 'radio-group'

/** @type {Styles} */
const labelStyles = {
    not: {
        arg: '',
        rule: {
            last: {
                marginLeft: '1rem',
            },
        },
    },
}

/** @type {Styles} */
const labelTextStyles = {
    fontWeight: '700',
    textTransform: 'capitalize',
}

const renderRadio = ({ label, value, radioName, defaultValue }) => ({
    tag: 'label',
    styles: labelStyles,
    children: [
        {
            tag: 'input',
            attrs: {
                type: 'radio',
                name: radioName,
                value,
                checked: value === defaultValue,
            },
        },
        {
            tag: 'span',
            styles: labelTextStyles,
            text: label,
        },
    ],
})

/** @returns {Schema} */
export default ({
    options,
    onChange,
    radioName = RADIO_NAME,
    defaultValue = '',
}) => ({
    tag: 'div',
    events: {
        change({ target }) {
            if (onChange) onChange(target.value)
        },
    },
    children: options.map(({ label, value }) =>
        renderRadio({ label, value, radioName, defaultValue })
    ),
})

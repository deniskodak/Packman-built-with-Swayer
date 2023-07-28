import { styleVariables } from '../../../styles/variables.js'

/** @type {Styles} */
const paragraphStyles = {
    margin: 0,
    color: styleVariables.primary,
    fontSize: '3rem',
    textAlign: 'left',
}

/** @returns {Schema} */
const createParagraph = (text) => ({
    tag: 'p',
    styles: paragraphStyles,
    text,
})

/** @returns {Schema} */
export default ({ score, turns }) => {
    return {
        tag: 'div',
        children: [
            createParagraph(`Score: ${score}`),
            createParagraph(`Turns: ${turns}`),
        ],
    }
}

import { styleVariables } from '../../styles/variables.js'

/** @type {Styles} */
const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
}

/** @type {Styles} */
const titleStyles = {
    margin: 0,
    fontSize: '5rem',
    color: styleVariables.primary,
}

/** @returns {Schema<IMainModel>} */
export default (mainModel) => ({
    tag: 'div',
    styles: headerStyles,
    model: mainModel,
    children: [
        {
            tag: 'h1',
            text: 'PACMAN',
            styles: titleStyles,
        },
        ({ score, turns }) => ({
            path: '@content/game-info.component',
            input: { score, turns },
        }),
    ],
})

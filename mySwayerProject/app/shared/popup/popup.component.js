import { BUTTON_THEMES } from '../button/button.component.js'
import { styleVariables } from '../../../styles/variables.js'
import PopupModel from './popup-model.js'

/** @returns {Styles} */
const backdropStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: styleVariables.modalBackdrop,
}

/** @returns {Styles} */
const modalStyles = {
    width: '400px',
    background: styleVariables.primary,
    borderRadius: '0.5rem',
    padding: '1rem',
}

/** @type {Styles} */
const titleStyles = {
    margin: 0,
    fontSize: '2rem',
    color: styleVariables.secondary,
}

/** @type {Styles} */
const contentStyles = {
    marginTop: '1rem',
}

/** @type {Styles} */
const footerStyles = {
    display: 'flex',
    marginTop: contentStyles.marginTop,
    justifyContent: 'flex-end',
}

/** @returns {Schema<PopupModel>} */
export default ({ title, children = [], okButtonOptions, buttonTitle }) => ({
    tag: 'div',
    styles: backdropStyles,
    children: [
        {
            tag: 'div',
            styles: modalStyles,
            children: [
                {
                    tag: 'h2',
                    text: title,
                    styles: titleStyles,
                },
                {
                    tag: 'div',
                    styles: contentStyles,
                    children,
                },
                {
                    tag: 'div',
                    styles: footerStyles,
                    children: [
                        {
                            path: '@shared/button/button.component',
                            input: {
                                text: buttonTitle || 'Ok',
                                theme: BUTTON_THEMES.dark,
                                ...okButtonOptions,
                            },
                        },
                    ],
                },
            ],
        },
    ],
})

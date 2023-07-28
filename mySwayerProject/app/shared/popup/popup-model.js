/** @implements {IPopupModel} */
export default class PopupModel {
    constructor(visible = true) {
        this.state = {
            visible: visible,
        }
    }

    openPopup() {
        this.state.visible = true
    }

    hidePopup() {
        this.state.visible = false
    }
}

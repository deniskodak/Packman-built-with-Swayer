const getElementRef = (elementId) => {
    let elementRef = null

    return () => {
        if (!elementRef) {
            elementRef = document.querySelector(`#${elementId}`)
        }
        return elementRef
    }
}

export default getElementRef

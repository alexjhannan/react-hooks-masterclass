export function renderElement(element) {
    const { type, props, children } = element

    const domElement = document.createElement(type)

    children.forEach(child => {
        if (typeof child === 'string') {
            domElement.appendChild(document.createTextNode(child))
        } else {
            domElement.appendChild(renderElement(child))
        }
    })

    return domElement
}

export function render(element, container) {
    container.appendChild(renderElement(element))
}

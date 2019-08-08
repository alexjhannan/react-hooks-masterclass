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

export function createElement(type, props, ...children) { // two named arguments, then drop the rest in a "children" array
    const element = { type, props, ...children }

    Object.freeze(element.props)
    Object.freeze(element) // immutable object

    return element
}

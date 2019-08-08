export function renderElement(element) {
    const { type, props, children } = element

    if (typeof type === 'function') {
        return renderElement(type(props))
    }

    if (typeof type === 'string') {
        const domElement = document.createElement(type)

        Object.entries(props).forEach(([key, val]) => {
            if (key.startsWith('on')) {
                const eventName = key.slice(2).toLowerCase()
                domElement.addEventListener(eventName, val)
            }
        })

        children.forEach(child => {
            if (typeof child === 'string') {
                domElement.appendChild(document.createTextNode(child))
            } else {
                domElement.appendChild(renderElement(child))
            }
        })

        return domElement
    }

}

export function render(element, container) {
    container.appendChild(renderElement(element))
}

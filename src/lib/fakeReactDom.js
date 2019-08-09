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
            } else if (key === 'className') {
                domElement.className = val
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

// caching for easy re-rendering
let _currentApp = null
let _element = null
let _container = null

export function render(element = _element, container = _container) {
    const app = renderElement(element)
    _element = element
    _container = container
    _currentApp ?
        container.replaceChild(app, _currentApp) // if app has already been rendered, replace instead of appending
        : container.appendChild(app)
    _currentApp = app
}

export default {
    render
}

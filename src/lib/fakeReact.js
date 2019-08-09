import dispatcher from './dispatcher.js'

export function createElement(type, props, ...children) { // two named arguments, then drop the rest in a "children" array
    const element = { type, props, children }

    Object.freeze(element.props)
    Object.freeze(element) // immutable object

    return element
}

export function useState(initialValue) {
    return dispatcher.useState(initialValue)
}

export function useEffect(callback, deps) {
    return dispatcher.useEffect(callback, deps)
}

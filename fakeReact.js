export function createElement(type, props, ...children) { // two named arguments, then drop the rest in a "children" array
    const element = { type, props, children }

    Object.freeze(element.props)
    Object.freeze(element) // immutable object

    return element
}

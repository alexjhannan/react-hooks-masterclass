import { render, createElement } from './fakeReactDom.js'

const ReactOutputExample = { // aka, "virtual dom"
    type: 'div', // react DOM interprets these strings as actual DOM elements
    props: {},
    children: [{
        type: 'h1',
        props: {},
        children: ['JS Trees'],
    }, {
        type: 'h2',
        props: {},
        children: ['0'],
    }, {
        type: 'button',
        props: {},
        children: ['+'],
    }, {
        type: 'button',
        props: {},
        children: ['-'],
    }, {
        type: 'button',
        props: {},
        children: ['reset'],
    }]
}

render(ReactOutputExample, document.getElementById('root'))

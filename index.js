import { createElement as e } from './fakeReact.js'
import { render } from './fakeReactDom.js'

function buttonFactory(label) {
    return e('button', {}, label)
}

const App = e('div', {},
    e('h1', {}, 'JS Trees'),
    e('h2', {}, '0'),
    buttonFactory('+'),
    buttonFactory('-'),
    buttonFactory('reset'),
)

render(App, document.getElementById('root'))

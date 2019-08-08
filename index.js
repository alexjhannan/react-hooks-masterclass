import { createElement as e } from './fakeReact.js'
import { render } from './fakeReactDom.js'

// a component with named props!
function Button({ label }) {
    return e('button', {}, label)
}

const App = e('div', {},
    e('h1', {}, 'JS Trees'),
    e('h2', {}, '0'),
    Button({ label: '+' }),
    Button({ label: '-' }),
    Button({ label: 'reset' }),
)

render(App, document.getElementById('root'))

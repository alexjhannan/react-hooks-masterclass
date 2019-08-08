import { createElement as e } from './fakeReact.js'
import { render } from './fakeReactDom.js'

function Counter() {
    return e('div', {},
        e('h2', {}, '0'),
        e(Button, { label: '+' }),
        e(Button, { label: '-' }),
        e(Button, { label: 'reset' }),
    )
}

// a component with named props!
function Button({ label }) {
    return e('button', { className: 'button', onClick: () => alert('clicked') }, label)
}

const App = e('div', {},
    e('h1', {}, 'JS Trees'),
    e(Counter, {}),
)

render(App, document.getElementById('root'))

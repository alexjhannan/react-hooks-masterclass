import { createElement as e } from './lib/fakeReact.js'
import fakeReactDOM from './lib/fakeReactDom.js'

let value = 0

function Counter() {
    const updateCounter = (label) => {
        if (label === '-') {
            value -= 1
        }
        if (label === '+') {
            value += 1
        }
        if (label === 'reset') {
            value = 0
        }
        fakeReactDOM.render() // re-render
    }

    return e('div', {},
        e('h2', {}, value.toString()),
        e(Button, { label: '+', handleClick: updateCounter }),
        e(Button, { label: '-', handleClick: updateCounter }),
        e(Button, { label: 'reset', handleClick: updateCounter }),
    )
}

// a component with named props!
function Button({ label, handleClick }) {
    return e('button', { className: 'button', onClick: () => handleClick(label) }, label)
}

const App = e('div', {},
    e('h1', {}, 'JS Trees'),
    e(Counter, {}),
)

export default App

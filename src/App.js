import { createElement as e, useState, useEffect, useRef } from './lib/fakeReact.js'
import fakeReactDOM from './lib/fakeReactDom.js'

function Counter() {
    const [value, setValue] = useState(25)
    useEffect(() => { console.log('using an effect')}, [])
    const thing = useRef('test')
    console.log(thing)


    const updateCounter = (label) => {
        if (label === '-') {
            setValue(value - 1)
        }
        if (label === '+') {
            setValue(value + 1)
        }
        if (label === 'reset') {
            setValue(0)
        }
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

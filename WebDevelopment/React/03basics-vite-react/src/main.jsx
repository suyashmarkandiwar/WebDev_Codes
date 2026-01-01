import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function CustomApp() {

//   return (
//     <>
//       {/* <DummyCompo /> */}
//       <h1>Hello World | vite</h1>
//       <p>Hey its a paragraph</p>
//     </>
    
//     // Component name should always start with capital letter
//   )
// }

const CustomReactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    content: 'Click on me to navigate google page'
}

const AnotherElement = (
    <a href = 'https://www.google.com' target = '_blank'>Click on me to navigate google page</a>
)

const myName = 'My name is Mukesh'

const ReactElem = React.createElement('a', {
    href: 'https://www.google.com',
    target: '_blank'
}, 'Click on me to navigate google page', myName)

createRoot(document.getElementById('root')).render(
    // <App/>
    // <CustomApp />
    // CustomApp()
    // <CustomReactElement/>
    // CustomReactElement()
    // CustomReactElement
    // <AnotherElement/>
    // AnotherElement()
    // AnotherElement

    ReactElem 
)

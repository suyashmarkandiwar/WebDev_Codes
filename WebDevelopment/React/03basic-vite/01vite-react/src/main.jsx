import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Chai from './chai.jsx'
// import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank'
//     },
//     content: 'Click on me to navigate google page'
// }

const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit google</a>
)

const anotherUser = "chai aur react";

const reactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target:'_blank'},
  'click me to visit google',
  anotherUser
)
createRoot(document.getElementById('root')).render(
    reactElement
    
)

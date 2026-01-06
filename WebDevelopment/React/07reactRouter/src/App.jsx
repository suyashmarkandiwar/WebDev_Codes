import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
// import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header /> */}
      <Footer />
      <Home />
    </>
  )
}

export default App

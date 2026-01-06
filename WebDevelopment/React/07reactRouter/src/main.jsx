import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/ContactUs/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/', // path: top level element -> it renders element
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },

//     ]

//   }
// ])
// which ever component is rendered over here ex. <User /> that component gets acces of userid
// loader is used in main.jsx itself we can write all the api call in loader itself

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact />}/>
    <Route path='user/:userid' element={<User />}/> 
    {/* <Route path='github' element={<Github />}/>  */}
    <Route 
      loader={githubInfoLoader}
      path='github'
      element={<Github />}
    />      
    </Route>
    
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
    />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import CommingSoon from './components/CommingSoon.jsx'
// import store from './store/index.jsx'
// import {Provider} from "react-redux"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/",element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/Project",element:<Project/>},
      {path:"/Blog",element:<CommingSoon/>},
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router}/>
    {/* </Provider> */}
  </StrictMode>,
)

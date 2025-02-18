// C:\Users\vedan\OneDrive\Documents\Varsity-Ft-Investify\frontend\src\main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom"
import Modules from '../pages/Modules.jsx'
import ModulePage from '../pages/SubModulePage.jsx'
import Layout from './Layout.jsx'
import SubModule from '../components/SubModule.jsx'
import Home from '../pages/Home.jsx'

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element ={<Layout />}>
      <Route index element = {<Home />}></Route>
      <Route path='modules' element = {<Modules />}></Route>
      <Route path='/modules/:modulenumber' element = {<ModulePage />}></Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

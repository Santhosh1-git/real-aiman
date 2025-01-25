import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Admission from '../../Pages/Admission'
import Academics from '../../Pages/Academics'
import Department from '../../Pages/Department'
import Library from '../../Pages/Library'
import Campus from '../../Pages/Campus'

function Router() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route  index  element={<Home/>}/>
        </Route>

       <Route path='/' >
        <Route path='About' element={<About/>}/>
        <Route path='Admission' element={<Admission/>}/>
        <Route path='Academics' element={<Academics/>}/>
        <Route path='Department' element={<Department/>}/>
        <Route path='Library' element={<Library/>}/>
        <Route path='Campus' element={<Campus/>}/>
      </Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router









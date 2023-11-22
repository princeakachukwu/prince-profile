import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MyMain from './Components/MyMain';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Skill from './Pages/Skill';
import Blog from './Pages/Blog';
import NoFile from './Pages/NoFile';
import './App.css'



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MyMain/>}>
          <Route path='Contact' element = {<Contact />}/>
          <Route path='/' element = {<Home />} />
          <Route path='About' element = {<About />} />
          <Route path='Service' element = {<Service />} />
          <Route path='Skill' element = {<Skill />} />
          <Route path='Blog' element={<Blog />}/>
          <Route path='*' element={<NoFile />} /> 
        </Route>
      </Routes>
    </>
  )
}

export default App
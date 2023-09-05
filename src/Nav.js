import React from 'react'
import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'

export default function Nav() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}

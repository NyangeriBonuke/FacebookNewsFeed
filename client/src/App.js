import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Video from './pages/Video'
import Marketplace from './pages/Marketplace'
import Groups from './pages/Groups'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/video' element={<Video />} />
        <Route path='/marketplace' element={<Marketplace />} />
        <Route path='/groups' element={<Groups />} />
      </Routes>
    </>
  )
}

export default App

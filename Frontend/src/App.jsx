import './App.css'
import { Routes, Route } from 'react-router-dom';
import React from 'react'
import HomeLayout from './Layout/HomeLayout';
import PosterDescription from './Pages/HomePage/PosterDescription';
import AboutUsPage from './Pages/AboutUsPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} />
      <Route path='/aboutUs'  element={<AboutUsPage />} />
      <Route path='/item/:id' element = {<PosterDescription />} />
    </Routes>
  )
}

export default App

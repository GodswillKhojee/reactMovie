import React from 'react'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from "./Context/MovieContext"
import "./css/App.css"

const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorite' element={<Favorite />} />
        </Routes>
      </main>
      </MovieProvider>
      )
}

export default App 
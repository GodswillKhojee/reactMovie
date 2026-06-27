import React from 'react'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'
import Favorite from './pages/Favorite'
import { Routes , Route} from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <>
    <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
      </Routes>
    </main>
    </>
    
  )
}

export default App 
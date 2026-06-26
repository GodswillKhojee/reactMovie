import React from 'react'
import MovieCard from './components/MovieCard'

const App = () => {
  return (
    <>
      <MovieCard movie={{
        title: "joy's film",
        releaseDate: "2026",
        url: "https://via.placeholder.com/300x450"
    }}/>
    </>
  )
}

export default App 
import React from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {
    const movies = [
        { id: 1, title: "John Wick", releaseDate: "2020" },
        { id: 2, title: "Batman", releaseDate: "2022" },
        { id: 3, title: "Iron Man", releaseDate: "2008" },
    ];
    const handleSearch = () => { };
    return (
        <div className='Home '>
            <form onSubmit={handleSearch} className='search-form w-full flex justify-center'>
                <input type="text"
                    placeholder='search for a movie...'
                    className='search-input' />

                <button type='submit' className='search-btn'>Search</button>
            </form>
            <div className='movie-grid'>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState } from 'react';

const Home = () => {
    const [searchQuery, setSearchQuery ] = useState("");
    const movies = [
        { id: 1, title: "John Wick", releaseDate: "2020" },
        { id: 2, title: "Batman", releaseDate: "2022" },
        { id: 3, title: "Iron Man", releaseDate: "2008" },
    ];
    const handleSearch = (e) => {
        e.preventDefault(); // prevent default behaviour
        alert(searchQuery);
        // setSearchQuery("kam kkr apna")
     };
    return (
        <div className='Home '>
            <form onSubmit={handleSearch} className='search-form w-full flex justify-center'>
                <input 
                    type="text"
                    placeholder='search for a movie...'
                    className='search-input' 
                    // this is how you change the state of the input value
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
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
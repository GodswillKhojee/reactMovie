import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import "../css/home.css"

const Home = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopularMovie = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("failed to load the movie....")
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovie();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault(); // prevent default behaviour

        if(!searchQuery.trim()) return;
        if(loading) return;

        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (error) {
            console.log(error);
            setError("failed to search the movie..")
        }
        finally{
            setLoading(false);
        }
    };
    return (
        <div className='Home '>
            <form onSubmit={handleSearch} className='search-form '>
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

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home
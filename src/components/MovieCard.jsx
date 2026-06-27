import React from 'react'
import "../css/moviecard.css"

const MovieCard = ({movie}) => {
    function onFavoriteClick()
    {
        alert("btn clicked");
    }
  return (
    <div className='movie-card'>
        <div className='movie-poster'>
            <img src={movie.url} alt={movie.title} />
            <div className='movie-overlay'>
                <button 
                    className='favorite-btn'
                    onClick={onFavoriteClick}>
                    a
                </button>
            </div>
        </div>
        <div className='movie-info'>
            <h3>{movie.info}</h3>
            <p>{movie.releaseDate}</p>
        </div>
    </div>
  )
}

export default MovieCard
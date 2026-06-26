import React from 'react'

const MovieCard = ({movie}) => {
    function onFavoriteClick()
    {
        alert("btn clicked");
    }
  return (
    <div className='movie-card flex w-50'>
        <div className='movie-poster'>
            <img src={movie.url} alt={movie.title} />
            <div className='movie-overlay'>
                <button 
                    className='favorite-btnn bg-red-500 px-2'
                    onClick={onFavoriteClick}>
                    Heart
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
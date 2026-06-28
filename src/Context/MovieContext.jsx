import {useEffect, useState, createContext, useContext, Children} from "react"

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

    const [favorites, setFavorites] = useState([]);

    // looking in a localStorage that if favorites is already in localStorage
    useEffect(() => {
      const storedFav = localStorage.getItem("favorites");
    
      // convert "[1,2,3]" => [1,2,3]
      if(storedFav) setFavorites(JSON.parse(storedFav));
      
    }, [])

    useEffect(() => {
        // when ever the favorites changes it state the local storage stores the favorites
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])
    

    // now three operation needs to be done
    // add
    // remove
    // check

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]); 
    }
    
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
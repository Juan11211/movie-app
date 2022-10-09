import React, {useState} from 'react'

const Favorite = ({
  favorites,
  removeFavorites
}) => {
  //images path from database
  const Images = 'https://image.tmdb.org/t/p/w500'
  return ( 
    <>
      <h1 className='favFilms'>Favorite Films</h1>
      {favorites.map((movie) => { 
        return (
    <> <div className='container'>
    <div className='movie--list'>
    <div className='img'>
        <img src={movie.poster_path ? `${Images}${movie.poster_path}` : 'null'} alt='movies'/></div>
            <h2 className='title'>{movie.title}</h2>
        <button onClick={() => removeFavorites(movie.id)}> Remove favorite </button>
        </div>
     </div>
    </>
    )})}
    </>
  )
 
}

export default Favorite; 
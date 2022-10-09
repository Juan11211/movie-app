// saving favorite to state
  const addFavoriteMovie = (movie) => { 
    const newFav = [...addFavorite, movie]
        setAddFavorite(newFav)
  }

   // removing favorite 
   const removeFavoriteMovie = (movie) => { 
    const newFav = addFavorite.filter((favorite) => 
    favorite.id !== movie.id) 
    setAddFavorite(newFav)
  }
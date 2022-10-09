import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { Container } from './Navbar'




const Movies = ({
    addFavorites,
    removeFavorites
}) => {
// toggle is being passed through ever file -- useContext
    const {toggle, inputValue, toggleTheme} = useContext(Container)
    const input = inputValue
// storing movies data in state 
const [moviesData, setMoviesData] = useState([])
// discover only lets user discover movies, search lets you actually search. 
const Shown = input ? 'search' : 'discover'

    //api info from database
const Api = `https://api.themoviedb.org/3/${Shown}/movie`

//images path from database
const Images = 'https://image.tmdb.org/t/p/w500'

// Movie Request -- grabbing api from axios -- query is what we want to grab, in this case it's input. 
    const MovieReq = async() => { 
        const data = await axios.get(Api, { 
            params: { 
                api_key: 'a8d225842e59d3766ab358c78b2670c0',
                query: input 
            }
        })
            // saving data in state
        setMoviesData(data.data.results)
    }
    
// rendering movieReq && mapping through movie to display -- grabbing info from data 
useEffect(() => {
    MovieReq();
}, [input])
  console.log(moviesData)


  return (
        <>
        <button onClick={() => toggleTheme()}> Toggle Theme </button>
        <h1 className='moviesF'>Films</h1>
        {moviesData.map((movie) => { 
            return (
        <> 
            
        <div className='container'>
            <div className='movie--list'>
            <div className='img'>
                <img src={movie.poster_path ? `${Images}${movie.poster_path}` : 'null'} alt='movies'/></div>
                    <h2 className='title'>{movie.title}</h2>

        <button onClick={() => addFavorites(movie)}> Add favorite </button>
        <button onClick={() => removeFavorites(movie.id)}> Remove favorite </button>
            </div>
            </div>
         
        </>
        )})}
       </>

  )
}

export default Movies; 



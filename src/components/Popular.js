import axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import { Container } from './Navbar'


function Popular({
    addFavorites,
    removeFavorites
}) {
    // API 
    const Api = 'https://api.themoviedb.org/3'
    // 
    const TrendingFilms= '/trending/movie/week'
    //images path from database
    const Images = 'https://image.tmdb.org/t/p/w500'
    // creating state for popular films 
    const [popular, setPopular] = useState([])
    const {toggle, inputValue, toggleTheme} = useContext(Container)
// get trending films from axios 
const Trends = async() => { 
    const data = await axios.get(`${Api}${TrendingFilms}`, { 
        params: { 
            api_key: 'a8d225842e59d3766ab358c78b2670c0',
        }
    })
        // saving data in state
        setPopular(data.data.results)
}

// rendering movieReq && mapping through movie to display -- grabbing info from data 
useEffect(() => {
Trends();
}, [])
console.log(popular)
return (
    <>  
     <button onClick={() => toggleTheme()}> Toggle Theme at Popular </button>
    <h1 className='popularFilms'>Popular Films</h1>
 
    {popular.map((movie) => { 
        return (
    <> <div className='container'>
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
export default Popular
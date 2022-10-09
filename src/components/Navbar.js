import React, {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Movies from './Movies'
import Popular from './Popular'
import Favorite from './Favorite'
import Contact from './Contact'

const themes = {
    light: {
        background: '#FFF'
    },
    dark: {
        background: '#000'
    }
}
export const Container = React.createContext(themes)
const Navbar = () => {
  
    // creating state for toggle 
        const [toggle, setToggle] = useState(themes.dark)
    // state for value 
        const [inputValue, setInputValue] = useState('')
    // state for favorite
        const [favorites, setFavorites] = useState([])

        const toggleTheme = () => {
            console.log('hello world')
            setToggle(prevToggle => prevToggle === themes.dark ? themes.light : themes.dark)
          }

        const addFavorites = (movie) => setFavorites([...favorites, movie])
        
        const removeFavorites = (movie_id) => {
            const removed = favorites.filter(({id}) => movie_id != id)
            setFavorites([...removed])
        }
  
    return (
        <Container.Provider value={{toggle, toggleTheme, inputValue}}>
    <>
    <div className={toggle == themes.dark ? 'dark-theme'  : 'light-theme'}>
        Free Movies
        <nav className='nav--bar'>
            <div>
            <div className='nav--options'>
                <h1>React Films</h1>  
                <input className='input' type='text' placeholder='Search for films' onChange={(e) => setInputValue(e.target.value)}/>
                </div>
            </div>
            <div className='links'>
        <Link to='/'  id='movies' style={{ padding: 5 }} >Movies</Link>
        <Link to='/popular' style={{ padding: 5 }}>Popular</Link>
        <Link to='/favorite' style={{ padding: 5 }}>Favorite</Link>
        <Link to='/contact' style={{ padding: 5 }}>Contact</Link>
            </div>
         </nav>
         </div>
    <Routes>

        <Route path='' element={<Movies addFavorites={addFavorites} removeFavorites={removeFavorites} />} /> 
        <Route path='/popular' element={<Popular addFavorites={addFavorites} removeFavorites={removeFavorites} />} /> 
        <Route path='/Favorite' element={<Favorite favorites={favorites} removeFavorites={removeFavorites} />} /> 
        <Route path='/Contact' element={<Contact />} /> 
    </Routes>
   
    </>
    </Container.Provider>
  )
}

export default Navbar; 
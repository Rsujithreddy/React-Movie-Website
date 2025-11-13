import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Home from './pages/Home.jsx'
import MovieCard from './components/MovieCard.jsx'
import { Routes,Route } from 'react-router-dom'
import Favorites from './pages/Favorites.jsx'
import NavBar from './components/NavBar.jsx'

function App() {
  return(
    <div>
      <NavBar/>
      <main className='main-content'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
    </Routes> 
    </main>
    </div>
  )
}

export default App

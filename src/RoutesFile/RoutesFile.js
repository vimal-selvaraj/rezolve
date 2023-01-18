import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddMovie from '../pages/AddMovie'
import Charts from '../pages/Charts'
import EditMovie from '../pages/EditMovie'
import Login from '../pages/Login'
import MoviesDetails from '../pages/MoviesDetails'
import MoviesList from '../pages/MoviesList'
import Trailerpage from '../pages/Trailerpage'

const RoutesFile = () => {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/addmovie" element={<AddMovie/>}/>
          <Route path="/movies" element={<MoviesList/>} />
          <Route path="/editmovie">
              <Route path=":id" element={<EditMovie/>}/>
              </Route>
            <Route path="/details">
              <Route path=":id" element={<MoviesDetails/>}/>
              </Route>
              <Route path="/trailer">
              <Route path=":id" element={<Trailerpage/>}/>
              </Route>
              <Route path='/charts' element={<Charts/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RoutesFile
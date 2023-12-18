import { Routes, Route } from "react-router-dom";
import { Project } from '../pages/Project/Project.tsx';
import { Movies } from '../pages/Movies/Movies.tsx';
import { Author } from '../pages/Author/Author.tsx';
import { MovieDisplay } from '../pages/MovieDisplay/MovieDisplay.tsx';
import { NotFound } from '../pages/NotFound/NotFound.tsx';

export const PageRoutes = (): JSX.Element => {
  return (
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDisplay/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/author' element={<Author/>}/>
        <Route path='/404' element={<NotFound/>}/>
      </Routes>
  )
}
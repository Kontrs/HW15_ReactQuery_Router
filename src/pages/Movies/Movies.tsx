import styles from './Movies.module.css';
import { Card } from '../../components/Card/Card';
import { useGetMovies } from './hooks/useGetMovies';
import { useDeleteMovie } from './hooks/useDeleteMovie';

export type Movie = {
  id: number,
  title: string,
  genre: string,
  director: string,
  year: number,
  rating: number,
  runtime: number,
  comments: string[]
};

export const Movies = (): JSX.Element => {
  const {data: movies, isLoading, error} = useGetMovies();
  const {mutateAsync: deleteMovie} = useDeleteMovie();

  if(isLoading) {
    return (
      <div>Loading...</div>
    )
  }
  if(error) {
    return (
      <div>Error</div>
    )
  }

  return (
    <section className={styles.wrapper}>
      {movies?.map((movie: Movie): JSX.Element => (
        <Card 
          key={movie.id}
          id={movie.id} 
          title={movie.title}
          genre={movie.genre}
          director={movie.director} 
          rating={movie.rating}
          runtime={movie.runtime}
          onDelete={() => deleteMovie(movie.id)}/>
      ))}
    </section>
  )
}
import styles from './MovieDisplay.module.css'
import { Input } from '../../components/Input/Input';
import { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { useGetMovie } from './hooks/useGetMovie';
import { useAddComment } from './hooks/useAddComment';

export const MovieDisplay = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');
  const { data: movie } = useGetMovie();
  const {mutateAsync: addMovieComment} = useAddComment();

  const handleAddComment = () => {
    if (movie) {
      addMovieComment({ comment: inputValue, id: movie.id })
        .then(() => setInputValue(''))
        .catch((error) => {
          console.error('Error adding comment:', error);
        });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={styles.title}>{movie?.title}</h3>
        <p className={styles.text}><b>Genre: </b>{movie?.genre}</p>
        <p className={styles.text}><b>Director: </b>{movie?.director}</p>
        <p className={styles.text}><b>Release year: </b>{movie?.year}</p>
        <p className={styles.text}><b>Rating: </b>{movie?.rating}</p>
        <p className={styles.text}><b>Length: </b>{movie?.runtime}  minutes</p>
        <div className={styles.commentWrapper}><b>Comments</b>
          {movie?.comments.map((comment, index) => (
            <div className={styles.comment} key={index}>{comment}</div>
          ))}
        </div>
        <form 
          className={styles.inputWrapper} 
          onSubmit={(e) => {
            e.preventDefault();
            handleAddComment();
          }}>
          <Input 
            type='text' 
            placeholder='Add a comment' 
            required={true}
            value={inputValue}
            name='comment'
            onChange={(e) => {
              setInputValue(e.target.value)
            }}/>
          <Button type='submit' text='Add comment' size='small'/>
        </form>
      </div>
    </div>
  )
}
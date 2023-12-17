import { NavLink } from 'react-router-dom';
import styles from './Card.module.css';
import { Button } from '../Button/Button';

type CardProps = {
  id: number,
  title: string,
  genre: string,
  director: string,
  rating: number,
  runtime: number,
  onDelete: () => void
}

export const Card = ({id, title, genre, director, rating, runtime, onDelete}: CardProps): JSX.Element => {

  return(
    <div className={styles.wrapper}>
      <NavLink to={`/movies/${id}`} key={id} className={styles.card}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}><b>Genre:</b> {genre}</p>
        <p className={styles.text}><b>Director:</b> {director}</p>
        <p className={styles.text}><b>Rating:</b> {rating}</p>
        <p className={styles.text}><b>Length:</b> {runtime} minutes</p>
      </NavLink>
      <div className={styles.buttonWrapper}>
      <Button 
        text='Delete' 
        size='small' 
        onClick={onDelete}/>
      </div>
    </div>
  )
}


import styles from './NotFound.module.css';
import { Button } from '../../components/Button/Button.tsx';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.errorPage}>
      <h1 className={styles.heading}>How did you get here? This page doesn't exist.</h1>
      <div className={styles.buttonWrapper}>
        <Button text='Go to Homepage' onClick={() => navigate('/')} />
      </div>
      <img className={styles.image}src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="error" />
    </section>
  )
};


import styles from './Author.module.css';

export const Author = (): JSX.Element => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.textWrapper}>
        <h3 className={styles.heading}>Author's notes</h3>
        <p className={styles.text}>
          This project was created for learning purposes. It features a list of movies retrieved from a JSON-Server database.
          Each movie card can be opened individually to view more details. You can also delete a movie from the list or add comments.
          I've focused on implementing custom hooks, components, and maintaining clean and readable code.
        </p>
        <p className={styles.text}>
          <b>About Myself:</b> My name is <b>Kristers Pulle</b>. I've been studying Front-End development since October 20th and have
          thoroughly enjoyed the journey. Computers have fascinated me since childhood, and now, exploring how they work in-depth
          adds to my enjoyment. In just a few months, I've gained the ability to create functional websites. There's much more to
          learn, and I'm excited to kick-start my professional career as a developer.
        </p>
      </div>
      <a className={styles.link} href="https://github.com/Kontrs" target='_blank'>
        <img className={styles.image} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
      </a>
    </section>
  )
}
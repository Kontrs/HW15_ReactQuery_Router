import styles from './Project.module.css';

export const Project = (): JSX.Element => {

  return (
    <section className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <a href="https://tanstack.com" target='_blank'>
          <img className={styles.image1} src="https://miro.medium.com/v2/resize:fit:1400/1*elhu-42TzQEdsFjKDbQhhA.png" alt="react_query" />
        </a>
        <a href="https://reactrouter.com/en/main" target='_blank'>
          <img className={styles.image2} src="https://www.codesmith.io/hs-fs/hubfs/Blog%20Images/Blog%20Photos/react-router-logo.png?width=600&name=react-router-logo.png" alt="react_router" />
        </a>
        <a href="https://react.dev" target='_blank'>
          <img className={styles.image3} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="react" />
        </a>
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.textHeading}>This project is brought to you by</h3>
        <p className={styles.text}>React Query (Tanstack Query)</p>
        <p className={styles.text}>React Router</p>
        <p className={styles.text}>React</p>
      </div>
    </section>
  )
}
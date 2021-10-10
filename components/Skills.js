import styles from 'styles/Skills.module.scss'

export default function Skills() {

  return (
    <>
    <section id='skills' className={styles.skills_section}>
      <h1>Skills</h1>
      <div className={styles.skills_container}>
        <div className={`${styles.image_container} ${styles.html}`}>
          <div className={styles.html_offset}/>
          <img src='images/html.png' />
        </div>
        <div className={`${styles.image_container} ${styles.css}`}>
          <div className={styles.css_offset}/>
          <img src='images/css.png' />
        </div>
        <div className={`${styles.image_container} ${styles.javascript}`}>
          <img src='images/javascript.png' />
        </div>
        <div className={`${styles.image_container} ${styles.react}`}>
          <img src='images/react.png' />
        </div>
        <div className={`${styles.image_container} ${styles.webpack}`}>
          <img src='images/webpack.png' />
        </div>
      </div>
    </section>
    </>
  )
}

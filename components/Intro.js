import styles from 'styles/Intro.module.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Intro() {
  return (
    <>
      <section id='intro' className={styles.intro_section}>
        <h1>Hello, I'm</h1>
        <h1>Toan Le</h1>
        <div className={styles.buttons}>
          <a
            href='#projects'
            className={styles.button}
          >
            <span>Projects</span>
            <i className="bi bi-arrow-down"></i>
          </a>
          <a
            href='#skills'
            className={styles.button}
          >
            <span>Skills</span>
            <i className="bi bi-arrow-down"></i>
          </a>
          <a
            href='#contacts'
            className={styles.button}
          >
            <span>Contacts</span>
            <i className="bi bi-arrow-down"></i>
          </a>
        </div>
      </section>
    </>
  )
}

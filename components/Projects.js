import styles from 'styles/Projects.module.scss'

export default function Projects() {
  return (
    <>
      <section id='projects' className={styles.projects_section}>
        <h1>Projects</h1>
        <div className={styles.project}>
          <div className={styles.project_info}>
            <h2>Webtoon UI</h2>
            <span><i>Personal project</i></span>
            <p>Create a website whose interface looks like the Webtoon website</p>
            <p>Used: <b><i>ReactJs, Hooks, HTML, CSS, Webpack </i></b><span>and depploy to </span><b><i>Netlify</i></b></p>
          </div>
          <div className={styles.slideshow}>
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.project_info}>
            <h2>Flashcard</h2>
            <span><i>Personal project</i></span>
            <p>Create a website that stores terms and its meaning</p>
            <p>Used: <b><i>ReactJs, Hooks, HTML, CSS </i></b><span>and depploy to </span><b><i>Netlify</i></b></p>
          </div>
          <div className={styles.slideshow}>
          </div>
        </div>
      </section>
    </>
  )
}

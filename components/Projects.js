import styles from 'styles/Projects.module.scss'
import Webtoon from 'components/projects/Webtoon'
import Flashcard from 'components/projects/Flashcard'

export default function Projects() {
  return (
    <>
      <section id='projects' className={styles.projects_section}>
        <h1>Projects</h1>
        <div className={styles.project}>
          <div className={styles.project_info}>
            <a href='https://webtoonui.netlify.app' target='_blank' rel="noreferrer">
              <h2>Webtoon UI</h2>
            </a>
            <span><i>Personal project</i></span>
            <p>Create a website whose interface looks like the Webtoon website.</p>
            <p>Used ReactJS to create component, use React Router to navigate between pages.</p>
            <p>Improve performance by using Developer tools, React lazy.</p>
            <p>Used: <b><i>ReactJs, Hooks, HTML, CSS module </i></b><span>and depploy to </span><b><i>Netlify</i></b></p>
          </div>
          <div className={styles.slideshow}>
            <Webtoon />
          </div>
        </div>
        <div className={styles.project}>
          <div className={styles.project_info}>
            <a href='https://fcweb.netlify.app' target='_blank' rel="noreferrer">
              <h2>Flashcard</h2>
            </a>
            <span><i>Personal project</i></span>
            <p>Create a website that stores terms and its meaning.</p>
            <p>Used ReactJS, MaterialUI to create component, use React Router to navigate between pages.</p>
            <p>Create a simple RestAPI with Python Django REST, deploy the API to Heroku.</p>
            <p>Used Redux Toolkit to send and retrieve data from API, store this data in Redux store as global props.</p>
            <p>Make this app a PWAs.</p>
            <p>Used: <b><i>ReactJs, Hooks, HTML, CSS, Python Django REST </i></b><span>and depploy React app to </span><b><i>Netlify, </i></b><span>depploy RestAPI to </span><b><i>Heroku.</i></b></p>
          </div>
          <div className={styles.slideshow}>
            <Flashcard />
          </div>
        </div>
      </section>
    </>
  )
}

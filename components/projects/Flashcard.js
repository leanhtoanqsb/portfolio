import { debounce } from 'lodash'
import styles from 'styles/projects/Flashcard.module.scss'

export default function Flashcard() {

  return (
    <>
        <div
          className={styles.root}
        >
          <div className={styles.ratio} />
          <div className={styles.slideshow}
          >
            <nav>
              <p>Flashcard</p>
            </nav>
            <div className={styles.nav_margin_bot} />
            <div  className={styles.card_container}>
              <div  className={styles.card_slide}>
                <Card term='Potato' meaning='Khoai tay' />
                <Card term='Mushroom' meaning='Nam' />
                <Card term='Clery' meaning='Can tay' />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

function Card({term, meaning}) {
  return (
    <>
    <div className={styles.card_root}>
      <div
        className={styles.container}
      >
        <div className={`${styles.inner} ${styles.front}`}>
          <p className={styles.term}>
            {term}
          </p>
        </div>
        <div className={`${styles.inner} ${styles.back}`}>
          <p className={styles.meaning}>
            {meaning}
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

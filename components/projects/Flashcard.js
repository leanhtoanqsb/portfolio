import { useState, useEffect } from 'react'
import { debounce } from 'lodash'
import styles from 'styles/projects/Flashcard.module.scss'
import useRect from 'hooks/useRect'

function Flashcard() {

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
                <Card term='Classroom' meaning='Lop hoc' />
                <Card term='Mushroom' meaning='Nam' />
                <Card term='Washroom' meaning='Toilet' />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default Flashcard

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
function rest() {
  const [width, setWidth] = useState(0);

  const ref = {current: null};

  useEffect(() => {
    const format = debounce((node) => {
      if (node != null ) {
        let sourceNode = node.getBoundingClientRect();
        let sourceWidth = sourceNode.width
        setWidth(() => sourceWidth)
      }
    }, 100)
    window.addEventListener('resize', format(ref.current));
    return (() => window.removeEventListener('resize', format(ref.current))
    )
  },[ref]);
}

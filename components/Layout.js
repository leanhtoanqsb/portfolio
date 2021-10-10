import Meta from 'components/Meta'
import styles from 'styles/Layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        {children}
      </div>
    </>
  )
}

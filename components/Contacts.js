import styles from 'styles/Contacts.module.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Contacts() {

  return (
    <>
    <section id='contacts' className={styles.contacts_section}>
      <h1>Let's keep in touch</h1>
      <div className={styles.contacts_container}>
        <a href='mailto:toanqsb@gmail.com' className={styles.button}>
          <i className="bi bi-envelope"></i>
          <span>Write me<br/><b>E-mail</b></span>
        </a>
        <a href='https://www.linkedin.com/in/toanleqsb/' className={styles.button}>
          <i className="bi bi-linkedin"></i>
          <span>Let's connect<br/><b>LinkedIn</b></span>
        </a>
      </div>
    </section>
    </>
  )
}

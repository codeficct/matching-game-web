import styles from './footer.module.css'

export default function Footer () {
  const age = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div>
        <span>v.0.1.1</span>
        <span>Copyright © {age} Matching Game | Una iniciativa de <a href='https://github.com/LuiSauter' target='_blank' rel='noreferrer'>Luis G. Janco Alvarez</a></span>
      </div>
    </footer>
  )
}

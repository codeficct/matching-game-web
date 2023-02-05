import styles from './footer.module.css'

export default function Footer () {
  const age = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      Copyright © {age} Matching Game
    </footer>
  )
}

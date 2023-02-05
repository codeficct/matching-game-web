import Image from 'next/image'
import Link from 'next/link'
import { links } from '../utils/links'
import styles from './navigation.module.css'

export default function Navigation () {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href='/' className={styles.title}>
          <h1>Matching Game</h1>
          <Image src='/logo.png' priority width={26} height={26} alt='Matching Game ficct' />
        </Link>
        <ul>
          {links.map(({ route, label, icon }) => (
            <li key={route}>
              <Link href={route}>
                {icon}
                <span>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

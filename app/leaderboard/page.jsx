import Image from 'next/image'
import styles from './leaderboard.module.css'

function fetchPost () {
  return fetch('http://localhost:3000/api/matching-game', {
    next: {
      revalidate: 10
    }
  })
    .then(response => response.json())
}
export default async function LeaderboardPage () {
  const users = await fetchPost()
  return (
    <main className={styles.leaderboard}>
      <section className={styles.users}>
        <header className={styles.header}>
          <span>Usuario</span>
          <span>Puntos</span>
          <span title='Posición'>Pos</span>
        </header>
        <ul className={styles.userContainer}>
          {users.map(({ _id, name, photo, score }, index) => (
            <li className={styles.userItem} key={_id}>
              <figure className={styles.photo}>
                <Image src={photo} alt={name} fill sizes='100vw' priority />
              </figure>
              <h3>{name}</h3>
              <span>{score}</span>
              <div>{index + 1}</div>
            </li>))}
        </ul>
      </section>
    </main>
  )
}

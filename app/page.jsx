import Image from 'next/image'
import styles from './home.module.css'

export default function HomePage () {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <figure className={styles.image}>
          <Image
            src='/matching-game.png' alt='Matching Game'
            fill
            sizes='100vw'
            priority
          />
        </figure>
        <div className={styles.content}>
          <h2 className={styles.title}>
            EL JUEGO DE <span className={styles.blue}>MEMORIA VISUAL</span> DE <span className={styles.yellow}>COMBINACIONES</span>
          </h2>
          <p className={styles.leyend}>El emparejamiento es una habilidad esencial que nos ayuda a mejorar una serie de habilidades cognitivas</p>
        </div>
      </section>
      <section className={styles.firstContent}>
        <p>Desarrolla tus habilidades cognitivas como:
        </p>
        <span>📦 La memoria visual</span>
        <span>🧠 Evitar la memoria a corto plazo</span>
        <span>👨🏻‍💻 El reconocimiento de patrones que es un plus para un desarrollador de software.</span>
        {/* <p>Emparejar un objeto con otro es una tarea compleja, y se vuelve especialmente complicado cuando haces coincidir algo más abstracto, como una imagen, un color o un sonido. La combinación también ayuda con el enfoque.</p> */}
      </section>
    </main>
  )
}

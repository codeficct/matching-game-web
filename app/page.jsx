import Demo from '@/demo/Demo'
import Hero from '@/Hero'
import Image from 'next/image'
import styles from './home.module.css'

export default function HomePage () {
  return (
    <main className={styles.main}>
      <Demo />
      <Hero />
      <h3 className={styles.firstSubtitle}>Desarrolla tus habilidades cognitivas como:</h3>
      <section className={styles.firstContent}>
        <div>
          <span>📦 Potenciar la memoria visual</span>
          <span>🧠 Evitar la memoria a corto plazo</span>
          <span>👨🏻‍💻 El reconocimiento de patrones que es un plus para un desarrollador de software.</span>
        </div>
        <figure className={styles.imageApp}>
          <Image
            src='/demo-3.png' alt='Matching Game - app'
            fill
            sizes='100vw'
            priority
          />
          {/* <img className={styles.shadow} src='/demo-shadow.png' alt='matching game' /> */}
        </figure>
      </section>
      <section className={styles.secondContent}>
        <p>Emparejar un objeto con otro es una tarea compleja, y se vuelve especialmente complicado cuando haces coincidir algo más abstracto, como una imagen, un color o un sonido. La combinación también ayuda con el enfoque.</p>
      </section>
    </main>
  )
}

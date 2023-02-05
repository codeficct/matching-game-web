'use client'
import styles from './hero.module.css'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Hero () {
  const refRevealImage = useRef(null)
  // const refRevealContent = useRef(null)

  useEffect(() => {
    function handleScroll () {
      const windowHeigth = window.innerHeight
      const elementImageTop = refRevealImage.current.getBoundingClientRect().top
      // const elementContentTop = refRevealContent.current.getBoundingClientRect().top
      const elementVisible = 400

      if (elementImageTop < windowHeigth - elementVisible) {
        refRevealImage.current.classList.add(styles.reveal)
      } else {
        refRevealImage.current.classList.remove(styles.reveal)
      }

      // if (elementContentTop < windowHeigth - 50) {
      //   refRevealContent.current.classList.add(styles.reveal)
      // } else {
      //   refRevealContent.current.classList.remove(styles.reveal)
      // }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className={styles.hero} ref={refRevealImage}>
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
  )
}

'use client'
import styles from './demo.module.css'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function Demo () {
  const refFirstDemo = useRef(null)
  const refSecondDemo = useRef(null)
  const refThirdDemo = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = -window.pageYOffset || document.documentElement.scrollTop
      const fastScroll = (scrollTop * 0.4) + scrollTop + 290

      refFirstDemo.current.style.transform = `matrix(1, 0, 0, 1, 0, ${fastScroll})`
      refSecondDemo.current.style.transform = `matrix(1, 0, 0, 1, 0, ${scrollTop + 160})`
      refThirdDemo.current.style.transform = `matrix(1, 0, 0, 1, 0, ${fastScroll})`
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className={styles.demo}>
      <figure className={styles.firstImage} ref={refFirstDemo}>
        <Image
          src='/demo-1.png' alt='Demo del juego - Matching Game'
          fill
          sizes='100vw'
          priority
        />
      </figure>
      <figure className={styles.secondImage} ref={refSecondDemo}>
        <Image
          src='/demo-2.png' alt='Demo del juego - Matching Game'
          fill
          sizes='100vw'
          priority
        />
      </figure>
      <figure className={styles.thirdImage} ref={refThirdDemo}>
        <Image
          src='/demo-3.png' alt='Demo del juego - Matching Game'
          fill
          sizes='100vw'
          priority
        />
      </figure>
    </section>
  )
}

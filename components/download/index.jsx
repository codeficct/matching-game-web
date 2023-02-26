'use client'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import styles from './download.module.css'

export default function Download () {
  const imageRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const scrollArea = 2090 - windowHeight
      const scrollPercent = Math.round(Math.abs(scrollTop / scrollArea * 100))

      imageRef.current.style.transform = `rotateY(${scrollPercent - 140}deg)`
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className={styles.download}>
      <article className={styles.displayImage}>
        <figure className={styles.imgDemo} ref={imageRef}>
          <Image
            src='/demo-1.png' alt='matching game'
            priority
            fill sizes='100vw'
          />
        </figure>
      </article>

      <article className={styles.content}>
        <h3>Descarga Matching Game</h3>
        <figure className={styles.qr}>
          <Image src='/qr.svg' alt='Matching game' fill sizes='100vw' />
        </figure>
        <div className={styles.buttons}>
          <figure className={styles.icon}>
            <Image src='/mgicon.png' alt='Matching game' fill sizes='100vw' />
          </figure>
          <div className={styles.platforms}>
            <a className={styles.android} href='/matchingGame.apk' download='matchingGame.apk' type='apk'>
              <figure>
                <Image src='/android.png' alt='matching game android' fill sizes='100vw' />
              </figure>
              <div>
                <span>Descargar para</span>
                <span>Android</span>
              </div>
            </a>
            <a className={styles.ios} id='ios' href='#ios'>
              <figure>
                <Image src='/ios-logo.png' alt='matching game ios' fill sizes='100vw' />
              </figure>
              <div>
                <span>Descargar para</span>
                <span>iOS</span>
              </div>
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

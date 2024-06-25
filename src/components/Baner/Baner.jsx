import React from 'react'
import styles from '../../styles/Baner.module.css'
import car from '../../images/car.png'
import mobile from '../../images/mobile.png'
import clock from '../../images/clock.png'
import sales from '../../images/sales.png'

const Baner = () => {
  return (
    <section className={styles.baner}>
    <div className={styles.content}>
      <div className={styles.wrapper}>
      <div className={styles.test}>
      <img className={styles.img} src={car}  />
      <img className={styles.img} src={mobile} />
      <img className={styles.img} src={mobile} />
      <img className={styles.img} src={sales}  />
      </div>
      </div>
    </div>
    </section>
  )
}

export default Baner
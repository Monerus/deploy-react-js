import React, { useEffect, useState } from 'react'
import styles from '../../styles/Gift.module.css'
import {useSelector} from 'react-redux'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'


const Gift = () => {
  const {list} = useSelector(({gift}) => gift)
  const score = ['1','2','3','4', '5']
  const [activeIndex, setActiveIndex] = useState('')

  return (
    <section className={styles.gift}>
        <h1>ДОПОЛНИТЬ ЗАКАЗ</h1>
        <div className={styles.container}>
          <div className={styles.content}>
            {list.map(({_id, text, image, price}) => (
              <div className={styles.product} key={_id}>
                <div>
                  <img src={image}/>
                </div>
                <div className={styles.text}>
                  <h2>{text}</h2>
                <p>{price} руб.</p> 
                <div className={styles.btn}>
                  <Link to={'/cart'}>
                  <Button text='+ Добавить'/>
                  </Link>
                </div>
                </div>
              </div>
            ))}
            <div className={styles.list}>
            {score.map((value, index) => (
                <ul 
                key={index}
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? 'active-gift' : 'active-gift-index'}>
                <li>
                  <p>{value}</p>
                 </li>
              </ul>
            ))}
            </div>
          </div>
            <div className={styles.list_btn}>
              <Button text='Оформить заказ' />
            </div>
        </div>
    </section>
  )
}

export default Gift
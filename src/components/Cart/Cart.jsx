import styles from '../../styles/Cart.module.css'
import { Link } from 'react-router-dom'
import React, {useState} from 'react'

import Payment from './Payment'
import Contact from './Contact'

import Recipient from './Recipient'
import Button from '../Button/Button'
import SingleCart from './SingleCart'
const Cart = () => {

  const categories = ['Доставка по Владивостоку', 'Самовывоз г. Владивосток, ул. Пушкинская, 17 А']
  
  const [activeIndex, setActiveIndex] = useState('')
  const [ cubes, setCubes ] = useState(2);
  const [ index, setIndex ] = useState(-1);
  
  return (
    <section className={styles.cart}>
      <div className={styles.link}>
        <Link to={'/'}>Главная</Link>
        <b></b>
        <Link to={''}>Корзина</Link>
      </div>
      <div className={styles.container}>

      <div className={styles.container_cart}>
        <SingleCart />
        </div>
      <div className={styles.orders}>
    <h1>Оформление заказа</h1>
    <div className={styles.orders_container}>
      <div className={styles.shipping_method}>
      <h3>Способ доставки</h3>
      <div className={styles.cubes}>
      {[...Array(cubes).keys()].map((_, i) => 
      	<div className={styles.border}
          key={i}
          onClick={() => setIndex(i)}
          style={{ backgroundColor: index === i ? 'green' : '#E5E5E5', cursor:'pointer', width: '20px', height:'20px', borderRadius:'90px'}}
        >
        </div>
       )}
    </div>
      <div className={styles.delivery_the_city}>
      {categories.map((value, index) => (
          <li key={index}
          onClick={() => setActiveIndex(index)}>
          {value}
          </li>
          ))}     
      </div>
      </div>
      <div className={styles.data_time}>
        <h2>Дата и время</h2>
        <div className={styles.date}>
          <p>Дата</p>
          <input type="date" />
        </div>
        <div className={styles.data_gap}>
        <p>Указать промежуток времени</p>
        <input type="time" />
        </div>
        <div className={styles.data_call}>
        <div className={styles.checkbox}></div>
        <p>Позвонить получателю для уточнения времени и адреса</p>
        </div>
        <div className={styles.data_speak}>
        <input type="checkbox" />
        <p> По телефону не говорить что это цветы</p>
        </div>
      </div>
        <Recipient />
        <Contact />
      <div className={styles.payment}>
      <Payment />
      </div>
    <div className={styles.btn}>
    <Button text='Оформить заказ'/>
    </div>
    </div> 
    </div>
      </div>
    </section>
  )
}

export default Cart
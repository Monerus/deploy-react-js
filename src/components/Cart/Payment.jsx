import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Cart.module.css'

const Payment = () => {

    const [ cubes, setCubes ] = useState(3);
  const [activeIndex, setActiveIndex] = useState('')
  const [ index, setIndex ] = useState(-1);
    const categories = ['Оплата наличными во время получения (самовызов)', 'Оплата наличными курьеру (только, если получатель — Вы)', 'Онлайн оплата — Сбербанк']
  return (
      <div className={styles.payment_method}>
        <h2>Способ оплаты</h2>
        <div className={styles.payment_container}>
      <div className={styles.payment_cubes}>
      {[...Array(cubes).keys()].map((_, i) => 
      	<div className={styles.payment_border}
          key={i}
          onClick={() => setIndex(i)}
          style={{ backgroundColor: index === i ? 'green' : '#E5E5E5', cursor:'pointer', width: '20px', height:'20px', borderRadius:'90px'}}
        >
        </div>
       )}
    </div>
    <div className={styles.payment_text}>
      {categories.map((value, index) => (
          <li key={index}
          onClick={() => setActiveIndex(index)}>
          {value}
          </li>
          ))}     
      </div>
        </div>
      </div>
  )
}

export default Payment
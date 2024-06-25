import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Cart.module.css'
import Button from '../Button/Button'

const Recipient = () => {

  const [ cubes, setCubes ] = useState(2);
  const [activeIndex, setActiveIndex] = useState('')
  const [ index, setIndex ] = useState(-1);const 
  categories = ['Я получатель', 'Получатель другой человек']
  return (
    <div className={styles.recipient}>
      <h2>Получатель</h2>
      <div className={styles.recipient_cubes}>
      {[...Array(cubes).keys()].map((_, i) => 
      	<div className={styles.recipient_border}
          key={i}
          onClick={() => setIndex(i)}
          style={{ backgroundColor: index === i ? 'green' : '#E5E5E5', cursor:'pointer', width: '20px', height:'20px', borderRadius:'90px'}}
        >
        </div>
       )}
    </div>
    <div className={styles.recipient_name}>
      {categories.map((value, index) => (
          <li key={index}
          onClick={() => setActiveIndex(index)}>
          {value}
          </li>
          ))}     
      </div>
      <div className={styles.recipient_container}>
            <div className={styles.name}>
                <h2>Имя и фамилия</h2>
                <input type="text" 
                placeholder='Анатолий Петров'/>
            </div>
            <div className={styles.number}>
                <h2>Моб.номер</h2>
                <input type="text" 
                placeholder='+_(___) ___-__-__'/>
                </div>
                <div className={styles.city}>
                <h2>Адрес</h2>
                <input type="text" 
                placeholder='г. Владивосток, ул. Фокина, 15'/>
                </div>
            </div>
                
    </div>
  )
}

export default Recipient
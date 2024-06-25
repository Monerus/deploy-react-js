import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/Cart.module.css'

const Contact = () => {
  return (
    <div className={styles.contact}>
        <h2>Ваши контакты</h2>
        <div className={styles.contact_container}>
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
                <h2>Город</h2>
                <input type="text" 
                placeholder='Владивосток'/>
                </div>

        </div>
    </div>
  )
}

export default Contact
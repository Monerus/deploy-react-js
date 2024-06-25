import React from 'react'
import styles from '../../styles/Contact.module.css'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ContactForm = () => {
  return (
    <div className={styles.form}>
        <h1>Остались вопросы? Свяжитесь с нами.</h1>
        <div className={styles.form_container}>
           <div className={styles.left}>
            <div className={styles.left_block}>
                <input type="text" 
                placeholder='Имя и фамилия'
                />
            </div>
            <div className={styles.left_block}>
                <input type="text" 
                placeholder='Эл.почта'
                />
            </div>
            <div className={styles.left_block}>
                <input type="text" 
                placeholder='Моб.номер'
                />
            </div>
           </div>
           <div className={styles.right}>
           <div className={styles.right_block}>
                <input type="text" 
                placeholder='Возникшний вопрос'
                />
            </div>
           </div>
        </div>
            <div className={styles.btn}>
            <Button text='Отправить'/>
            </div>
    </div>
  )
}

export default ContactForm
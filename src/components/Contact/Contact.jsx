import React from 'react'
import styles from '../../styles/Contact.module.css'
import { Link } from 'react-router-dom';
import mainMap from '../../images/main-map.png'
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section className={styles.contact}>
        <div className={styles.container}>
        <div className={styles.link}>
            <Link to={'/'}>Главная</Link>
            <b></b>
            <Link to={''}>Контакты</Link>
        </div>
        <div className={styles.wrapper}>
            <h1>Контактная информация</h1>
            <div className={styles.content}>
                <div className={styles.info}>
                <div className={styles.number}>
                    <p>Моб.номер:</p>
                    <h1>+ 7 888 888 88 88</h1>
                    <h1>+ 7 888 888 88 88</h1>
                </div>
                <div className={styles.mail}>
                    <p>Эл.почта</p>
                    <h1>flawka_vl@gmail.com</h1>
                </div>
                <div className={styles.adress}>
                    <p>Адрес:</p>
                    <h1>г. Владивосток, ул. Пушкинская, 17 А</h1>
                </div>
                <div className={styles.job}>
                    <p>Режим работы:</p>
                    <h1>Пн-Сб с 8:00 до 22:00</h1>
                    <h1>Вс — выходной</h1>
                </div>
                </div>
                <div className={styles.map}>
                    <img className={styles.mapImg} src={mainMap}/>
                </div>
            </div>
        </div>
        <ContactForm />
        </div>
    </section>
  )
}

export default Contact
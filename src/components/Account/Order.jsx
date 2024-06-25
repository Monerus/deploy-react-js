import React from 'react'
import styles from '../../styles/Account.module.css'
import { Link, NavLink } from 'react-router-dom'

const addColor = ({isActive}) => ({background : isActive ? '#accca1' : '',
padding: '5px', 
border: 'solid 1px #FFF',
color: '#fff'
})

const Order = () => {
  return (
    <section className={styles.account}>
    <div className={styles.container}>
        <div className={styles.list}>
        <h1>ЛИЧНЫЙ КАБИНЕТ</h1>
        <div className={styles.link}>
          <NavLink to={'/account'}
          className={styles.a}>
          Профиль
          </NavLink>
          <NavLink to={'/account/orders'}
          className={styles.a}
          style={addColor}>
            Мои заказы
            </NavLink>
          <NavLink to={'/account/change'}>
            Смена пароля
            </NavLink>
        </div>
        </div>
        <div className={styles.content}> 
        <div className={styles.li}>
         <Link to={'/'}>Главная</Link>
         <b className={styles.b}></b>
         <Link to={'/account'}>Личный кабинет</Link>
         <b></b>
         <Link to={''}>Мои заказы</Link>
          </div> 
          <div className={styles.order}>
            <div className={styles.order_content}>
                <div className={styles.order_content_my}>      
                   <div className={styles.data}>
                    <p>Дата заказа</p>
                    <p>26.09.19</p>
                    <p>Номер заказа</p>
                    <p>1N30325</p>
                   </div>
                   <div className={styles.data}>
                    <p>Наименование:</p>
                    <p className={styles.data_text}>Букет из разноцветных роз (малый) <p>|</p> <span>x2 11 300 руб. </span></p>
                    <p className={styles.data_text_span}>Букет из разноцветных роз (малый) <p>|</p> <span>x2 11 300 руб. </span></p>
                   </div>
                   <div className={styles.data}>
                    <p>Сумма</p>
                    <p className={styles.sum}>90 000руб.</p>
                   </div>
                   <div className={styles.status}>
                    <p>Статус</p>
                    <p className={styles.delivered}>Доставлено</p>
                   </div>
                </div>
                <div className={styles.order_content_my_two}>
                   <div className={styles.data}>
                    <p>Дата заказа</p>
                    <p>26.09.19</p>
                    <p>Номер заказа</p>
                    <p>1N30325</p>
                   </div>
                   <div className={styles.data}>
                    <p>Наименование:</p>
                    <p className={styles.data_text_span}>Букет из разноцветных роз (малый) <p>|</p> <span>x2 11 300 руб. </span></p>
                   </div>
                   <div className={styles.data}>
                    <p>Сумма</p>
                    <p className={styles.sum}>90 000руб.</p>
                   </div>
                   <div className={styles.status}>
                    <p>Статус</p>
                    <p className={styles.paid}>Оплачен</p>
                   </div>
                    </div>
                    <div className={styles.order_content_my}>
                   <div className={styles.data}>
                    <p>Дата заказа</p>
                    <p>26.09.19</p>
                    <p>Номер заказа</p>
                    <p>1N30325</p>
                   </div>
                   <div className={styles.data}>
                    <p>Наименование:</p>
                    <p className={styles.data_text}>Букет из разноцветных роз (малый) <p>|</p> <span>x2 11 300 руб. </span></p>
                    <p className={styles.data_text_span}>Букет из разноцветных роз (малый) <p>|</p> <span>x2 11 300 руб. </span></p>
                   </div>
                   <div className={styles.data}>
                    <p>Сумма</p>
                    <p className={styles.sum}>90 000руб.</p>
                   </div>
                   <div className={styles.status}>
                    <p>Статус</p>
                    <p className={styles.processing}>Oбработка</p>
                   </div>
                    </div>
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Order
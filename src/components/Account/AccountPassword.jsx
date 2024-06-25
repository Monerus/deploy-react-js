import React, {useState} from 'react'
import styles from '../../styles/Account.module.css'
import { Link, NavLink } from 'react-router-dom'


const addColor = ({isActive}) => ({background : isActive ? '#accca1' : '',
  padding: '5px', 
  border: 'solid 1px #FFF',
  color: '#fff'
})


const AccountPassword = () => {

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
          >
            Мои заказы
            </NavLink>
          <NavLink to={'/account/change'}
          style={addColor}
          >
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
         <Link to={''}>Смена пароля</Link>
          </div> 
          <div className={styles.wrapper_password}>
            <p>Смена пароля</p>
            <div className={styles.content_password}>
              <div className={styles.content_change}>
                <p>Текущий пароль</p>
                <input type="text" />
              </div>
              <div className={styles.content_change}>
                <p>Новый пароль</p>
                <input type="text" />
              </div>
              <div className={styles.content_change}>
                <p>Повторите <span>новый</span> пароль</p>
                <input type="text" />
              </div>
            <div className={styles.content_button}>
            <button className={styles.content_cancellation}>Отмена</button>
            <button className={styles.content_save}>Сохранить</button>
            </div>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default AccountPassword
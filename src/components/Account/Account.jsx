import React from 'react'
import styles from '../../styles/Account.module.css'
import { Link, NavLink } from 'react-router-dom'
import sale from '../../images/ref.png'
const Account = () => {

  const addColor = ({isActive}) => ({background : isActive ? '#accca1' : '',
  padding: '5px', 
  border: 'solid 1px #FFF',
  color: '#fff'
})
  return (
    <section className={styles.account}>
    <div className={styles.container}>
        <div className={styles.list}>
        <h1>ЛИЧНЫЙ КАБИНЕТ</h1>
        <div className={styles.link}>
          <NavLink to={''}
          style={addColor}
          className={styles.a}>
          Профиль
          </NavLink>
          <NavLink to={'/account/orders'}
          className={styles.a}
          >
            Мои заказы
            </NavLink>
          <NavLink to={'/account/change'}
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
         <Link to={''}>Профиль</Link>
          </div> 
        <div className={styles.wrapper}>
          <div className={styles.wrapper_content}>
          <img className={styles.mapImg} src={sale}/>
          </div>
          <div className={styles.wrapper_account}>
            <p>Информация обо мне</p>
            <div className={styles.info_wrapper}>
            <div>
              <h3>Имя и фамилия</h3>
              <div className={styles.info}>
                Анатолий Петров
              </div>
            </div>
            <div>
              <h3>Моб. номер</h3>
              <div className={styles.info}>
              +7 (800) 535 35 45
              </div>
            </div>
            <div>
              <h3>Город</h3>
              <div className={styles.info}>
                Москва
              </div>
            </div>
            <div>
              <h3>Адрес</h3>
              <div className={styles.info}>
                Москва
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    </section>
  )
}

export default Account
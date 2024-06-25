import React, {useState} from 'react'
import styles from '../../styles/Header.module.css'
import burger from '../../images/burger.png'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import {selectIsAuth } from '../../redux/slices/authSlice'
import user from '../../images/user.png'
import { useSelector} from 'react-redux'

const Header = () => {
    const [open, setOpen] = useState(false);
    const addColor = ({isActive}) => ({color : isActive ? 'green' : ''})
    const isAuth = useSelector(selectIsAuth)
  return (
    <header className={styles.header}>
      <nav className={styles.answers}
      onClick={() => setOpen(!open)}
      >МЕНЮ
        <img src={burger}/>
        <ul className={styles.answer}>
          {
            open && (
              <div className={styles.burger_menu}>
              <ul className={styles.ul}>
              <li><Link to={'/'}>Главная</Link></li>
                <li><Link to={'/catalogs'}>Каталог</Link></li>
                <li><Link to={'/discounts'}>Скидки</Link></li>
                <li><Link to={'/reviews'}>Отзывы</Link></li>
                <li><Link to={'/contact'}>Контакты</Link></li>
                <li><Link to={'/answers'}>Информация для клиента</Link></li>
              <div className={styles.profile}>
              <button>
                <Link to={'/login'}>
                  <img src={user}
                  className={styles.img}
                  />
                </Link>
                <Link to={'/cart'}>
                  <button className={styles.cart}>Мои заказы</button>
                </Link>
              </button> 
              {!isAuth ? (
        <></>
      ) : (
        <div className={styles.profile_okey}>
          <Link to={'/account'}>Мой аккаунт</Link>
        </div>
      )} 
            </div>
              </ul>
              </div>
            ) 
          }
        </ul>
      </nav>
      <div className={styles.container}>
      <ul className={styles.info}>
        <li>
          <NavLink to={'/catalogs'}
          style={addColor}>Каталог</NavLink>
          <NavLink to={'/discounts'} 
          style={addColor}
          >Скидки
          </NavLink>
          <NavLink to={'/reviews'}
          style={addColor}>Отзывы</NavLink>
          <NavLink to={'/contact'}
          style={addColor}>Контакты</NavLink>
        </li>
      </ul>
      <Link to={'/'}>
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
      <div className={styles.btn}>
      <NavLink to={'/answers'}
      style={addColor}>Информация для клиента</NavLink>
      {!isAuth ? (
        <div className={styles.profile}>
          <button>
            <Link to={'/login'}>
              <img src={user}
              className={styles.img}
              />
            </Link>
            <Link to={'/cart'}>
              <button className={styles.cart}>Мои заказы</button>
            </Link>
          </button>   
        </div>
      ) : (
        <div className={styles.profile_okey}>
          <Link to={'/account'}>Мой аккаунт</Link>
          <Link to={'/cart'}>
              <button className={styles.cart}>Мои заказы</button>
            </Link>
        </div>
      )}
      </div>
      </div>
    </header>
  )
}

export default Header
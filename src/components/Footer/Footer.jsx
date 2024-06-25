import React from 'react'
import styles from '../../styles/Footer.module.css'
import { Link, NavLink} from 'react-router-dom'
import Button from '../Button/Button'
const addColor = ({isActive}) => ({color : isActive ? 'green' : ''})
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.link}>
        <div className={styles.link_container}> 
          <ul>
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
          <NavLink to={'/'}
          style={addColor}>Оферта</NavLink>
          <NavLink to={'/answers'}
          style={addColor}>Информация для клиента</NavLink>
          </li>
          </ul>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contant_container}>
          <div className={styles.contact_info}>
            <p>Контактная информация</p>
            <ul>
            <li>г. Владивосток, ул. Пушкинская, 17</li>
            <div className={styles.map}>
            <li>+ 7 888 888 88 88</li>

            </div>
            <li>+ 7 888 888 88 88</li>
            <li>Режим работы: Пн-Сб с 8:00 до 22:00</li>
            </ul>
          </div>
        <div className={styles.contact_visitors}>
        <div className={styles.contact_info}>
            <p>Для посетителей</p>
            <ul>
            <li>Оформление заказа</li> 
            <li>Вопросы и ответы</li>
            <li>Изменение или отмена заказа</li>
            <li>Способы доставки и оплаты</li>
            </ul>
          </div>
        </div>
        <div className={styles.contact_questions}>
        <div className={styles.contact_info}>
            <p>Возникли вопросы? Свяжитесь с нами</p>
            <div className={styles.contact_form}>
             <div className={styles.contact_form_content}>
              <div>
                <h3>Ваше имя</h3>
                <input type="text" />
              </div>
              <div>
                <h3>Моб.номер</h3>
                <input type="text" />
              </div>
              <div>
                <input type="text" 
                className={styles.input}
                />
                <div className={styles.btn}>
                  <Button text='Отправить'/>
                </div>
              </div>
              </div> 
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className={styles.brend}>
        <div className={styles.brend_container}>
          <p> © 2019 Цветочная лавка.</p>
        </div>
      </div>
    </section>
  )
}

export default Footer
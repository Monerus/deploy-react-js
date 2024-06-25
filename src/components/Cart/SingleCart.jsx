import React from 'react'
import single from '../../images/test.png'
import styles from '../../styles/Cart.module.css'
import { Link } from 'react-router-dom'

const SingleCart = () => {
  return (
    <div className={styles.single}>

    <div className={styles.cart_block}>
        <img src={single}/>
        <div className={styles.text_cart}>
            <h1>Букет из разноцветных роз</h1>
            <p>Большой (1 800 руб.)</p>
        </div>
            <div className={styles.sum}>
                <p>+</p>
                <p>5шт</p>
                <p>-</p>
                <div className={styles.itog}>
                    <h2>Сумма</h2>
                    <p>9000 руб.</p>
                </div>
            </div>
    </div>
    <div className={styles.cart_block}>
    <img src={single}/>
    <div className={styles.text_cart}>
        <h1>Букет из разноцветных роз</h1>
        <p>Большой (1 800 руб.)</p>
    </div>
        <div className={styles.sum}>
            <p>+</p>
            <p>5шт</p>
            <p>-</p>
            <div className={styles.itog}>
                <h2>Сумма</h2>
                <p>9000 руб.</p>
            </div>
        </div>
</div>
<div className={styles.cart_block}>
    <img src={single}/>
    <div className={styles.text_cart}>
        <h1>Букет из разноцветных роз</h1>
        <p>Большой (1 800 руб.)</p>
    </div>
        <div className={styles.sum}>
            <p>+</p>
            <p>5шт</p>
            <p>-</p>
            <div className={styles.itog}>
                <h2>Сумма</h2>
                <p>9000 руб.</p>
            </div>
        </div>
</div>
<div className={styles.cart_block}>
    <img src={single}/>
    <div className={styles.text_cart}>
        <h1>Букет из разноцветных роз</h1>
        <p>Большой (1 800 руб.)</p>
    </div>
        <div className={styles.sum}>
            <p>+</p>
            <p>5шт</p>
            <p>-</p>
            <div className={styles.itog}>
                <h2>Сумма</h2>
                <p>9000 руб.</p>
            </div>
        </div>
</div>
<div className={styles.office}>
    <div className={styles.office_sales}>
        <h1>Зайдите в <Link to={'/login'} className={styles.li}>личный кабинет</Link> чтобы проверить вашу СКИДКУ!</h1>
    </div>
    <div className={styles.total}>
        <h2>Итого:</h2>
        <p>36 000руб.</p>
        </div>
</div>
    </div>
  )
}

export default SingleCart
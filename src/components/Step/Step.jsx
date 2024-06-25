import React from 'react'
import styles from '../../styles/Step.module.css'
import ONE from '../../images/one.png'
import TWO from '../../images/two.png'
import FREE from '../../images/free.png'
import FOUR from '../../images/four.png'
import BACK from '../../images/back.png'
import BACKTWO from '../../images/backTwo.png'


const Step = () => {
  return (
    <section className={styles.step}>
        <img className={styles.back} src={BACK}/>
        <img className={styles.backTwo} src={BACKTWO}/>
        <div className={styles.text}>
        <h1><b>ЗАКАЗАТЬ</b> В 5 ШАГОВ</h1>
        </div>
        <div className={styles.container}>
           <div className={styles.one}>
            <img src={ONE}/>
            <div className={styles.one_text}>
            <h1>Выберите букет</h1>
            <p>В каталоге выберите понравившийся букет</p>
            </div>
           </div>
           <div className={styles.two}>
            <img src={TWO}/>
            <div className={styles.two_text}>
            <h1>Выберите размер и дополнение</h1>
            <p>На странице с описанием букета выберите подходящий размер. По желанию, добавьте к букету мягкую игрушку, сладости или любой другой подарок</p>
            </div>
           </div>
           <div className={styles.free}>
            <img src={FREE}/>
            <div className={styles.free_text}>
            <h1>Укажите данные для доставки;</h1>
            <p>Заполните форму доставки и оплатите заказ удобным для вас способом;</p>
            </div>
           </div>
           <div className={styles.four}>
            <img src={FOUR}/>
            <div className={styles.four_text}>
            <h1>Букет готов!</h1>
            <p>Букет будет собран из свежайших цветов и доставлен получателю к указанной дате и времени.</p>
            </div>
           </div>
        </div>
    </section>
  )
}

export default Step
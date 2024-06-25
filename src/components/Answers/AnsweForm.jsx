import styles from '../../styles/Answers.module.css';
import React from 'react'
import Button from '../Button/Button';

const AnsweForm = () => {
  return (
    <div className={styles.form}>
        <div className={styles.info}>
            <div className={styles.text}>

            <div className={styles.content_info}>
                <h1>Имя и фамилия</h1>
                <div className={styles.content}>
                    Василий Петров
                </div>
            </div>
            <div className={styles.content_info}>
                <h1>Эл.почта</h1>
                <div className={styles.content}>
                example@mail.com
                </div>
            </div>
            </div>
        <div className={styles.input}>
            <input type="text"
            placeholder='Ваш комментарий'           
            />
        </div>
        </div>
        <div className={styles.btn}>
        <Button text='Отправить'/>
        </div>
    </div>
  )
}

export default AnsweForm
import React from 'react'
import styles from '../../styles/Button.module.css'


const Button = (props) => {
    return (
        <div className={styles.btn}>
        <div className={styles.text}>{props.text}</div>
        </div>
      )
}

export default Button
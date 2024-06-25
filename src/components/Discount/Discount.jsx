import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../styles/Discount.module.css'


const Discount = () => {
  const { list } =useSelector(({ discount }) => discount)

  return (
    <div className={styles.desktop}>
        {list.map(( {title, text, image } ) => (
            <div className={styles.content}>
                <img className={styles.img} src={image}/>
                <div className={styles.text}>
                    <h3>{title}</h3>
                    <h1>{text}</h1>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default Discount
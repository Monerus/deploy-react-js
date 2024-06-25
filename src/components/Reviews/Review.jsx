import React, {useState} from 'react'
import styles from '../../styles/Reviews.module.css'
import { useSelector } from 'react-redux'

const Review = () => {

const { list } = useSelector(( { reviews } ) => reviews)

  return (
    <div className={styles.text}>
     {!list.length ? (
        <div className={styles.clear}>Пока нет отзывов</div>
      ) : (
        <div>
        {list.map(({id, name, city, text}) => (
        <div key={id} className={styles.info}>
        <p>{name}</p>
        <b>{city}</b>
        <h1>{text}</h1>
      </div>
     ))}
      </div>
         )} 
    </div>
  )
}

export default Review
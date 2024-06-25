import styles from '../../styles/HomeReviews.module.css'
import { Link } from 'react-router-dom';
import React from 'react'
import ONE from '../../images/review_one.png'
import TWO from '../../images/review_two.png'
import FREE from '../../images/review_free.png'
import FOUR from '../../images/review_four.png'
import { useSelector } from 'react-redux'


const HomeReviews = () => {

  const { list } = useSelector(( { reviews } ) => reviews)


  return (
    <section className={styles.reviews}>
        <div className={styles.container}>
            <div className={styles.left}>
            <div className={styles.link}>
                <h1>ФОТОХВОСТЫ</h1>
                <Link to={'/reviews/image'}>Больше фото</Link>
            </div>
            <div className={styles.img}>
            <img src={ONE}/>
            <img src={TWO}/>
            <img src={FREE}/>
            <img src={FOUR}/>
            </div>
            </div>
            <div className={styles.right}>
            <div className={styles.link}>
                <h1>ОТЗЫВЫ</h1>
                <Link to={'/reviews'}>Смотреть все</Link>
            </div>
            <div className={styles.review}>
            {list.map(({id, name, city, text}) => (
              <div key={id} className={styles.info}>
                <p>{name}</p>
              <b>{city}</b>
            <h1>{text}</h1>
              </div>
            ))}
            </div> 
            </div>
        </div>
    </section>
  )
}

export default HomeReviews
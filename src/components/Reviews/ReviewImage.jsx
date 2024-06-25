import React from 'react'
import styles from '../../styles/Reviews.module.css'
import { useSelector } from 'react-redux'

const ReviewsImage = () => {

  const { list } = useSelector(( { reviews  } ) => reviews)
    const addColor = ({isActive}) => ({background : isActive ? '#accca1' : '',
    padding: '10px 10px'
    })
    
  return (
    <div className={styles.image}>
      {!list.length ? (
        <div className={styles.clear}>Пока нет отзывов</div>
      ) : (
        <div>
          {list.map(({id, image}) => (
        <div className={styles.photoReview} key={id}>
          <div className={styles.wrapper}>
          </div>
          <img src={image} className={styles.img}/>
        </div>
       ))}
        </div>
    )} 
    </div>
  )
}

export default ReviewsImage
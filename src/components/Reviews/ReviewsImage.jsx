import React, { useEffect } from 'react'
import styles from '../../styles/Reviews.module.css'
import { NavLink } from 'react-router-dom'
import Review from './Review'
import { useDispatch } from 'react-redux'
import { getReviews } from '../../redux/slices/reviewsSlice'
import ReviewsImage from './ReviewImage'


const Reviews = () => {
    
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getReviews())
  }, [])

    const addColor = ({isActive}) => ({background : isActive ? '#accca1' : '',
    padding: '10px 10px', 
})

  return (
    <section className={styles.reviews}>
        <div className={styles.container}>
        <div className={styles.list}>
        <h1>Отзывы</h1>
        <div className={styles.link}>
          <NavLink to={'/reviews'}>
          Текстовые отзывы</NavLink>
          <NavLink to={''}
          style={addColor}>
            Фотоотзывы</NavLink>
        </div>
        </div>
        <div className={styles.content}>  
          <ReviewsImage />
        </div>
        </div>
    </section>
  )
}

export default Reviews
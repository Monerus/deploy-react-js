import React, { useEffect } from 'react'
import styles from '../../styles/Reviews.module.css'
import { NavLink } from 'react-router-dom'
import Review from './Review'
import { useDispatch, useSelector } from 'react-redux'
import { getReviews } from '../../redux/slices/reviewsSlice'

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
          <NavLink to={''}
          style={addColor}>
          Текстовые отзывы</NavLink>
          <NavLink to={'/reviews/image'}>Фотоотзывы</NavLink>
        </div>
        </div>
        <div className={styles.content}>   
          <Review />
        </div>
        </div>
    </section>
  )
}

export default Reviews
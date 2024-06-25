import React from 'react'
import styles from '../../styles/Form.module.css'
import Button from '../Button/Button'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getReview } from '../../redux/slices/reviewsSlice'

const Form = () => {
  const dispatch = useDispatch()
  const { handleSubmit, register  } = useForm({})
  const onSubmit = () => {
    dispatch(getReview())
  }
  return (
    <section className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.content}>
          <h2>Город</h2>
          <input type="text"
          {...register('city')}/>
          <h2>Имя</h2>
          <input type="text"
          {...register('name')}/>
          <h2>Email</h2>
          <input type="text"
          {...register('email')}/>
          <h2>Text</h2>
          <input type="text"
          {...register('text')}/>
        </div>
        <button className={styles.sign}
          type="submit">
          Отправить отзыв
        </button>
      </form>
    </section>
  )
}
export default Form
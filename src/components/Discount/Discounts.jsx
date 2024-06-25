import React, { useEffect } from 'react'
import styles from '../../styles/Discount.module.css'
import { useDispatch, useSelector } from 'react-redux';
import Discount from './Discount';
import { getDiscount } from '../../redux/slices/discountSlice';


const Discounts = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDiscount())
  }, [])

  return (
    <section className={styles.discount}>
      <h1 className={styles.h1}>Акции</h1>
        <Discount/>
    </section>
  )
}

export default Discounts
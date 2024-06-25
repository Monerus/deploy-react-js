import React, { useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import Baner from '../Baner/Baner'
import Catalogs from '../Catalog/Catalogs'
import Step from '../Step/Step'
import Info from '../Info/Info'
import HomeReviews from '../HomeReviews/HomeReviews'
import { useDispatch } from 'react-redux'
import { getReviews } from '../../redux/slices/reviewsSlice'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReviews())
  }, [])
  return (
    <section className={styles.home}>
    <div className={styles.container}>
    <div className={styles.text}>
      <h1>Доставка цветов в городе <span>Владивосток</span></h1>
      <div className={styles.btn}>
        <Link to={'/catalogs'}>
          <Button text='Каталог'/>
        </Link>
      </div>
      </div>
    </div>
    <Baner />
    <div>
      <Catalogs />
    </div>
      <Step />
      <HomeReviews />
      <Info />
    </section>
  )
}

export default Home
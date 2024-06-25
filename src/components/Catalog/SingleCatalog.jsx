import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { useNavigate, useParams } from 'react-router-dom'
import styles from '../../styles/Single.module.css'
import Button from '../Button/Button'
import { useDispatch } from 'react-redux'
import Gift from '../Gift/Gift'
import { getGift } from '../../redux/slices/giftSlice'
import { addItemToCart} from '../../redux/slices/authSlice'


const SingleCatalog = (item) => {


  // const { title, text, price, image} = item


  const navigate = useNavigate()
  const {id} = useParams()


const dispatch = useDispatch()
// const addToCart = () => {
//   dispatch(addItemToCart(item))
// }
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState('')
  
  const size = ['Малый','Средний','Большой']
  const SOSTAV = ['Гербера Оранжевая — 11 шт.',
  'Гвоздика однобутонная розовая — 7 шт.',
  'Хризантема кустовая Филин Грин — 5 шт.',
  'Роза Шангри Ла — 29 шт.', 
  'Роза Пенни Лейн — 29 шт.']
  useEffect(() => {
    axios.get(`/catalog/${id}`)
    .then((res) => {
      setData(res.data)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })
    dispatch(getGift())
  }, [])


  if(isLoading) {
    return <h1 className={styles.loading} isLoading={isLoading}>Загрузка</h1>
  }
  return (
    <section className={styles.single}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img className={styles.image} src={data.image}/>
        </div>
        <div className={styles.info}>
          <h1>{data.text}</h1>
          <p className={styles.desc}>Размер</p>
          <div className={styles.size}>
            {size.map((value, i) => (
                <ul 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={activeIndex === i ? 'active-size' : ''}>
                <li>
                  <p>{value}</p>
                 </li>
              </ul>
            ))}
          </div>
          <div className={styles.content}>
            <div className={styles.link}>
              <p>Состав</p>
              <div className={styles.sostav}>
                {SOSTAV.map((value, i) => (
                <ul key={i}><li>{value}</li></ul>
              ))}
              </div>
            </div>
          </div>
          <div className={styles.wrapper_sum}>
          <div className={styles.number}>
              <div className={styles.number_main}>
               <div className={styles.minus}>-</div> 
               <div className={styles.ravno}>1 шт.</div> 
               <div className={styles.plus}>+</div> 
              </div>
          </div>
              <div className={styles.cart}>
            <div className={styles.sum}>
              <div className={styles.izm}>
                <p>Сумма:</p>
              <h1>100 000 руб.</h1>
              </div>
                <div className={styles.btn}>
                <Button text='В корзину' />
                </div>
            </div>
          </div>
          </div>
        </div>
        </div>
        <div className={styles.section_two}>
          <Gift />
        </div>
    </section>
    
  )
}

export default SingleCatalog
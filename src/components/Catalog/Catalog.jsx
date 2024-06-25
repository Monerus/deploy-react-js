import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styles from '../../styles/Catalogs.module.css'
import Button from '../Button/Button';


const Catalog = () => {

  const { list } = useSelector(({ catalog }) => catalog) 

  return (
    <div>
        <div className={styles.content}>
        {list.map(({_id, text, title, image, price}) => (
            <div className={styles.product}>
            <Link to={`/catalog/${_id}`}>
            <img className={styles.img} src={image}/>
            <div className={styles.text}>
            <h2>{text}</h2>
            <p>Стоимость: от <b>{price[0]} руб</b></p> 
            </div>
            </Link>
            <div className={styles.btn}>
               <Button text='В корзину'/> 
            </div> 
            </div>
            
        ))}
        </div>
        
    </div>
  )
}

export default Catalog
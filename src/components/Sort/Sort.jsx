import React, {useState} from 'react'
import styles from '../../styles/Catalogs.module.css'
import {useSelector} from 'react-redux'


const Sort = () => {

    const categories = ['Новизне', 'Цена по возростанию', 'Цена по убыванию', 'Популярности']
    const {data} = useSelector(({catalog}) => catalog)
    const [activeIndex, setActiveIndex] = useState('')
  return (
    <div className={styles.sort}>
            <ul className={styles.close_list}>
                Сортировать по:
                {categories.map((value, i) => (
                <li key={i}
                onClick={() => setActiveIndex(i)}
                className={activeIndex === i ? 'active-category' : ''}>
                {value}
                </li>
                ))}  
            </ul>  
        </div>
  )
}

export default Sort
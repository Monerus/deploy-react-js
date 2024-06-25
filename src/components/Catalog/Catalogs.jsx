import React, { useEffect } from 'react'
import styles from '../../styles/Catalogs.module.css'
import Catalog from './Catalog';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalog } from '../../redux/slices/catalogSlice';
import Sort from '../Sort/Sort';

const Catalogs = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCatalog())
  }, [])

  return (
    <section className={styles.catalogs}>
      <div className={styles.container}>
        <Sort/>
        <div className={styles.catalog}>
           <Catalog />
        </div>
        </div>    
    </section>
  )
}

export default Catalogs
import React from 'react'
import styles from '../../styles/Register.module.css'
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { fetchRegister, selectIsAuth } from '../../redux/slices/authSlice';

const Register = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const { handleSubmit, register  } = useForm({})
  const onSubmit = (values) => {
    dispatch(fetchRegister(values))
  }

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return (
    <section className={styles.login}>
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}> 
      <h1 className={styles.text}>Зарегистрироваться</h1>
        <div className={styles.content}>
          <h2>Почта:</h2>
          <input type="email"
          {...register('email')}/>
          <h2>Пароль:</h2>
          <input type="password"
          {...register('password')}/>
        </div>
        <div className={styles.btn}>
          <button className={styles.sign}
          type="submit">
          Регистрация
        </button>
        <button className={styles.register}>
          <Link to={'/login'}>Есть аккаунт</Link>
        </button>
        </div>
      </div>
      </form>
    </section>
  )
}

export default Register
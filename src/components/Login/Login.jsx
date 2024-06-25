import React from 'react'
import styles from '../../styles/Login.module.css'
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { fetchAuth, selectIsAuth } from '../../redux/slices/authSlice';

const Login = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const { handleSubmit, register  } = useForm({})
  const onSubmit = (values) => {
    dispatch(fetchAuth(values))
  }

  if (isAuth) {
    return <Navigate to={'/'} />
  }

  return (  
  <section className={styles.login}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}> 
      <h1 className={styles.text}>Войти</h1>
        <div className={styles.content}>
          <h2>Почта:</h2>
          <input 
          type="email"
          {...register('email')}/>
          <h2>Пароль:</h2>
          <input 
          type="password"
          {...register('password')}/>
        </div>
        <div className={styles.btn}>
          <button className={styles.sign}
          type="submit">
          Войти
        </button>
        <button className={styles.register}>
          <Link to={'/register'}>Регистрация</Link>
        </button>
        </div>
      </div>
      </form>
    </section>
  )
}

export default Login
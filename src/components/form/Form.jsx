import React from 'react'
import styles from './Form.module.scss'
import { useForm } from 'react-hook-form'

const Form = ({ title, getDataForm, firebaseError }) => {

  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    mode: 'onChange'
  })

  const onSubmit = ({ email, password }) =>{
    getDataForm(email, password);
    reset();
  }

  const userEmail = {
    required:"필수 필드입니다."
  }

  const userPassword = {
    required:"필수 필드입니다.",
    minLength:{
      value: 6,
      message: "최소 6자입니다."
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div>
        <input
          type="email"
          placeholder="E-mail"
          {...register("email", userEmail)}
        />
        {errors?.email &&
          <div>
            <span className={styles.form_error}>
             {errors.email.message}
            </span>
          </div>
        }
        
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          {...register("password", userPassword)}
        />
        {errors?.password &&
          <div>
            <span className={styles.form_error}>
             {errors.password.message}
            </span>
          </div>
        }
      </div>
      <button type='submit'>{title}</button>
      {firebaseError && (
        <span className={styles.form_error}>{firebaseError}</span>
      )}
      
    </form>
  )
}

export default Form
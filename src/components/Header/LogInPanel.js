import { useNavigate } from "react-router-dom"
import { MainButton } from "../Buttons/MainButton"
import { MainLink } from "../Links/MainLink"
import styles from "./Header.module.scss"

export const LogInPanel = () => {
  const clickHandler = useNavigate().bind(null, 'auth/signup')
  return (
    <div className={styles.loginPanel}>
      <div>
        <MainLink to="auth/login" text="Войти"/>
      </div>
        <MainButton onClick={clickHandler} text='Зарегистрироваться'/>
    </div>
  )
}

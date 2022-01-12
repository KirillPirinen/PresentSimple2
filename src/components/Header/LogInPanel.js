import { useNavigate } from "react-router-dom"
import { MainButton } from "../Buttons/MainButton"
import { MainLink } from "../Links/MainLink"
import styles from "./Header.module.scss"

export const LogInPanel = () => {
  const clickHandler = useNavigate().bind(null, 'auth/signup')
  const fakeauth = true;
  return (
    <div className={styles.loginPanel}>
      {
        fakeauth ? (
          <>
            <MainLink to="profile" text="Мой профиль"/>
            <MainLink to="search" text="Найти список желаний"/>
          </>
        ) : (
          <>
            <MainLink to="auth/login" text="Войти"/>
            <MainButton onClick={clickHandler} text='Зарегистрироваться'/>
          </>
        )
      }
        
    </div>
  )
}

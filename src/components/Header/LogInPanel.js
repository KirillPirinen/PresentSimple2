import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "../../redux/actions/User.ac"
import { MainButton } from "../Buttons/MainButton"
import { ImitationLink } from "../Links/ImitationLink"
import { MainLink } from "../Links/MainLink"
import styles from "./Header.module.scss"

export const LogInPanel = ({user}) => {
  const clickHandler = useNavigate().bind(null, 'auth/signup')
  const dispatch = useDispatch()

  const logoutHandler = (e) => {
    e.preventDefault()
    dispatch(signOut())
  }

  return (
    <div className={styles.loginPanel}>
      {
        user ? (
          <>
            <MainLink to="profile" text={user.name}/>
            <ImitationLink onClick={logoutHandler} to="logout" text='Выйти'/>
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

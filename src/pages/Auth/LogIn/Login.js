import { SimpleButton } from '../../../components/Buttons/SimpleButton'
import { MainInput } from '../../../components/Inputs/MainInput'
import styles from '../Auth.module.scss'
import { GoogleButton } from '../../../components/Buttons/GoogleButton'

export const Login = () => {
  return (
    <div className={styles.login}>
      <div>
      <h3>
          Рады Вас видеть снова!
        </h3>
        <p>
          У нас регулярные обновления и новый функционал, также вы можете написать разработчику и предложить собственные идеи.
        </p>
        <p>
          Создай свой сервис мечты.
        </p>
      </div>
      <form>
        <MainInput type="email" placeholder="Ваш email" required/>
        <MainInput type="password" placeholder="Пароль" required/>
        <br/>
        <SimpleButton text={'Войти'}/>
        <div>
          <GoogleButton text="Войти с помощью Google"/>
        </div>
      </form>
    </div>
  )
}

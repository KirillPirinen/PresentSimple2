import { SimpleButton } from '../../../components/Buttons/SimpleButton'
import { MainInput } from '../../../components/Inputs/MainInput'
import styles from '../Auth.module.scss'
import { GoogleButton } from '../../../components/Buttons/GoogleButton'
import { useOutletContext } from 'react-router-dom'
import {ImitationLink} from '../../../components/Links/ImitationLink'

export const Login = () => {
  const utils = useOutletContext()
  return (
    <div className={styles.login}>
      <div>
      <h3>
          Рады Вас снова видеть !
        </h3>
        <p>
          У нас регулярные обновления и новый функционал, также вы можете написать разработчику и предложить собственные идеи.
        </p>
        <p>
          Создай свой сервис мечты.
        </p>
      </div>
      <form onSubmit={utils.signInSubmit}>
        <MainInput name="email" type="email" placeholder="Ваш email" required/>
        <MainInput name="password" type="password" placeholder="Пароль" required/>
        <br/>
        <SimpleButton text={'Войти'}/>
        <div>

          <GoogleButton
            onSuccess={utils.onSuccess}
            onFailure={utils.onFailure}  
          /> 

        </div>
        <br/>
        <ImitationLink onClick={utils.forgetPassword} href="/restore" text="Забыл пароль"/>
      </form>
    </div>
  )
}

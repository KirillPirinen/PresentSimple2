import { SimpleButton } from '../../../components/Buttons/SimpleButton'
import { MainInput } from '../../../components/Inputs/MainInput'
import styles from '../Auth.module.scss'
import { GoogleButton } from '../../../components/Buttons/GoogleButton'
import { useOutletContext } from 'react-router-dom'

export const SignUp = () => {
  const utils = useOutletContext()
  return (
    <div className={styles.signUp}>
      <div>
      <h3>
          Один шаг до вступления.
        </h3>
        <p>
          Не забудьте заполнить свой список желаний. Так ваши друзьям c легкостью подберут вам подарок, и вы получите то что нужно!
        </p>
      </div>
      <form onSubmit={utils.signUpSubmit}>
        <MainInput name="name" type="text" placeholder="Имя" required/>
        <MainInput name="lname" type="text" placeholder="Фамилия" required/>
        <MainInput name="email" type="email" placeholder="Ваш email" required/>
        <MainInput name="password" type="password" placeholder="Пароль" required/>
        <MainInput name="password2" type="password" placeholder="Повторите пароль" required/>
        <p>Не все могут знать вашу почту, поэтому рекомендуем указать телефон. По нему Вас легко найдут ваши друзья.</p>
        <MainInput name="phone" type="phone" placeholder="Телефон"/>
        <br/>
        <SimpleButton text={'Присоединиться'}/>
        <div>
        <GoogleButton
            onSuccess={utils.onSuccess}
            onFailure={utils.onFailure}  
          /> 
        </div>
      </form>
    </div>
  )
}

import { SimpleButton } from '../../../components/Buttons/SimpleButton'
import { MainInput } from '../../../components/Inputs/MainInput'
import styles from '../Auth.module.scss'
import googleico from '../../../icongoogle.png'
import { GoogleButton } from '../../../components/Buttons/GoogleButton'

export const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div>
      <h3>
          Один шаг до вступления.
        </h3>
        <p>
          Не забудьте заполнить свой список желаний. Так вашим друзьям будет проще подобрать вам подарок, а вам получить то что нужно!
        </p>
      </div>
      <form>
        <MainInput type="text" placeholder="Имя" required/>
        <MainInput type="text" placeholder="Фамилия"/>
        <MainInput type="phone" placeholder="Телефон" required/>
        <MainInput type="email" placeholder="Ваш email" required/>
        <MainInput type="password" placeholder="Пароль" required/>
        <MainInput type="password" placeholder="Повторите пароль" required/>
        <br/>
        <SimpleButton text={'Присоединиться'}/>
        <div>
          <GoogleButton/>
        </div>
      </form>
    </div>
  )
}

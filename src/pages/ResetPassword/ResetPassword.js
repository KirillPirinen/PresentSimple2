import { SimpleButton } from '../../components/Buttons/SimpleButton'
import { MainInput } from '../../components/Inputs/MainInput'
import styles from './ResetPassword.module.scss'

export const ResetPassword = ({utils}) => {
  return (
    <div className={styles.container}>
      <form onSubmit={utils.submitHandler}>
        <h4>Изменение пароля</h4>
        <MainInput onChange={utils.changeHandler} type="password" name="first" placeholder="новый пароль" value={utils.password.first}/>
        <MainInput onChange={utils.changeHandler} type="password" name="second" placeholder="повторите" value={utils.password.second}/>
        <SimpleButton type="submit" text="Изменить пароль"/>
      </form>
    </div>
  )
}

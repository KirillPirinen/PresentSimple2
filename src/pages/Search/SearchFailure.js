import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { SimpleButton } from '../../components/Buttons/SimpleButton'
import { MainInput } from '../../components/Inputs/MainInput'
import { makeNewForm } from '../../redux/actions/createForm.ac'
import styles from './Search.module.scss'

export const SearchFailure = ({payload}) => {
  const [inputs, setInputs] = useState(payload)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeHandler = (e) => {
    setInputs(prev=> ({...prev, [e.target.name]:e.target.value}))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(makeNewForm(inputs, navigate))
  }

  return (
    <>
      <div>
        <h4>Похоже мы ничего не нашли... однако не стоит сдаваться. Вы на верном пути. Станьте первым и отправьте Вашему другу анкету!</h4>
        <p>Когда он её заполнит, список его желаний станет доступен и все желающие узнают, что дарить. Также вы получите уведомление о заполнении на электронную почту, указанную Вами при регистрации.</p>
        <p>Следить за статусом, можно дополнительно в Вашем профиле.</p>
      </div>
        <form onSubmit={submitHandler} className={styles.forms} onChange={changeHandler}>
          <MainInput type="text" placeholder="имя" name="name" defaultValue={inputs.name}/>
          <MainInput type="text" placeholder="фамилия" name="lname" defaultValue={inputs.lname}/>
          <MainInput type="phone" placeholder="телефон" name="phone" defaultValue={inputs.phone}/>
          <MainInput type="email" placeholder="email" name="email" defaultValue={inputs.email}/>
          <br/>
          <SimpleButton text="Создать анкету"/>
        </form>
    </>
  )
}

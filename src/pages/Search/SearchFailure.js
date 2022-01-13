import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SimpleButton } from '../../components/Buttons/SimpleButton'
import { MainInput } from '../../components/Inputs/MainInput'

export const SearchFailure = () => {
  const [query] = useSearchParams()
  const [inputs, setInputs] = useState({name:'', lname:'', phone:query.get('phone'), email:query.get('email')})
  
  const changeHandler = (e) => {
    setInputs(prev=> ({...prev, [e.target.name]:e.target.value}))
  }
  
  return (
    <>
      <div>
        <h4>Похоже мы ничего не нашли... однако не стоит сдаваться. Вы на верном пути. Станьте первым и отправьте Вашему другу анкету!</h4>
        <p>Когда он её заполнит, список его желаний станет доступен и все желающие узнают, что дарить. Также вы получите уведомление о заполнении на электронную почту, указанную Вами при регистрации.</p>
        <p>Следить за статусом, можно дополнительно в Вашем профиле.</p>
      </div>
      <div>
        <form onChange={changeHandler}>
          <MainInput type="text" placeholder="имя" name="name" value={inputs.name}/>
          <MainInput type="text" placeholder="фамилия" name="lname" value={inputs.lname}/>
          <MainInput type="phone" placeholder="телефон" name="phone" value={inputs.phone}/>
          <MainInput type="email" placeholder="email" name="email" value={inputs.email}/>
          <SimpleButton text="Отправить анкету"/>
        </form>
      </div>
    </>
  )
}

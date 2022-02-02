import styles from './Profile.module.scss';
import {MainInput} from '../../components/Inputs/MainInput';
import { SimpleButton } from '../../components/Buttons/SimpleButton';
import { RefuseButton } from '../../components/Buttons/RefuseButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUserData, editUserAvatar} from '../../redux/actions/profile.ac';
import { EditAvatar } from '../../components/Avatar/EditAvatar';
import char from '../../character.png'
import { setInformer } from '../../redux/actions/Informer.ac';

export const PersonalTab = ({user:{email, lname, phone, name, avatar}}) => {
  const init = {name:'', lname:'', phone:'', email:''}
  const passInit = {first:'', second:''}
  const [inputs, setInputs] = useState(init)  
  const [password, setPassword] = useState(passInit)

  const dispatch = useDispatch()

  const clearHandler = () => {
    setInputs(init)
  }

  const avatarHandler = (e) => {
    const avatar = new FormData()
    avatar.append('avatar', e.target.files[0])
    dispatch(editUserAvatar(avatar))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    Object.keys(inputs).forEach(prop => {
      if(inputs[prop] === '') delete inputs[prop]
    })
    dispatch(editUserData(inputs))
    clearHandler()
  }

  const submitPassword = (e) => {
    e.preventDefault()
    if(password.first === '') {
      dispatch(setInformer({error:'Поля не могут быть пустыми'}))
    } else if (password.first !== password.second) {
      dispatch(setInformer({error:'Пароли не совпадают'}))
    } else {
      dispatch(editUserData({password:password.first}))
    }
    setPassword(passInit)
  }

  const changePassword = (e) => setPassword(prev => ({...prev, [e.target.name]: e.target.value}))
  const changeHandler = (e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))

  return (
    <>
    <div className={styles.imgCont}>
      <h3>Здесь вы можете скорректировать свой профиль</h3>
      <img src={char}className={styles.char}/>
    </div>
      <div className={styles.personalTab}>
        <div className={styles.editAvatar}>
          <h4>Почта: {email}</h4>
          <EditAvatar src={avatar} gender="male" onChange={avatarHandler}/>
        </div>
      <form onSubmit={submitHandler}>
        <MainInput onChange={changeHandler} type="name" name="name" placeholder={name} value={inputs.name}/>
        <MainInput onChange={changeHandler} type="text" name="lname" placeholder={lname} value={inputs.lname}/>
        <MainInput onChange={changeHandler} type="tel" name="phone" placeholder={phone || 'Телефон не указан'} value={inputs.phone}/>
        <SimpleButton type="submit" text="Сохранить изменения"/>
        <RefuseButton onClick={clearHandler} type="button" text="Отменить изменения"/>
      </form>
      <form onSubmit={submitPassword}>
        <h4>Изменение пароля</h4>
        <MainInput onChange={changePassword} type="password" name="first" placeholder="новый пароль" value={password.first}/>
        <MainInput onChange={changePassword} type="password" name="second" placeholder="повторите" value={password.second}/>
        <SimpleButton type="submit" text="Изменить пароль"/>
      </form>
      </div>
    </>
  )
}

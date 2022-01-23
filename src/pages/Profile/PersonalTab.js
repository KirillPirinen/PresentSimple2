import styles from './Profile.module.scss';
import {MainInput} from '../../components/Inputs/MainInput';
import { SimpleButton } from '../../components/Buttons/SimpleButton';
import { RefuseButton } from '../../components/Buttons/RefuseButton';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUserData, editUserAvatar} from '../../redux/actions/profile.ac';
import { EditAvatar } from '../../components/Avatar/EditAvatar';
import { host } from '../../config/endPoints';
import char from '../../character.png'

export const PersonalTab = ({user:{email, lname, phone, name, avatar}}) => {
  const init = {name:'', lname:'', phone:'', email:''}
  const [inputs, setInputs] = useState(init)

  const dispatch = useDispatch()

  const clearHandler = () => {
    setInputs(init)
  }

  const avatarHandler = (e) => {
    const avatar = new FormData();
    avatar.append('avatar', e.target.files[0]);
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

  const changeHandler = (e) => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <>
    <div className={styles.imgCont}>
      <h3>Здесь вы можете скорректировать свой профиль</h3>
      <img src={char}className={styles.char}/>
    </div>
      <div className={styles.personalTab}>
        <EditAvatar src={avatar} gender="male" onChange={avatarHandler}/>
      <form onSubmit={submitHandler}>
        <MainInput onChange={changeHandler} type="name" name="name" placeholder={name} value={inputs.name}/>
        <MainInput onChange={changeHandler} type="text" name="lname" placeholder={lname} value={inputs.lname}/>
        {/* <MainInput onChange={changeHandler} type="email" name="email" placeholder={email} value={inputs.email}/> */}
        <MainInput onChange={changeHandler} type="tel" name="phone" placeholder={phone || 'Телефон не указан'} value={inputs.phone}/>
        <SimpleButton type="submit" text="Сохранить изменения"/>
        <RefuseButton onClick={clearHandler} type="button" text="Отменить изменения"/>
      </form>
      <div>
        тут фотачка
      </div>
      </div>
    </>
  )
}

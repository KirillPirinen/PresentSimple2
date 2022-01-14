import styles from './Search.module.scss'
import female from '../../avatars/femaleDefault.jpg'
import male from '../../avatars/maleDefault.jpg'
import { SimpleButton } from '../../components/Buttons/SimpleButton';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../../components/Avatar/Avatar';
import { Loader } from '../../components/Loader/Loader';

export const UserBlock = ({user:{lname, name, id}}) => {
  const navigate = useNavigate()
  const gender = 'female';
  return (
    <div className={styles.userBlock}>
      <h4>Отличная новость! Пользователь уже использует наш сервис.</h4>
      <div>
        <Avatar gender={'male'}/>
        <p>{name}&nbsp;{lname}</p>
      </div>
      <SimpleButton onClick={navigate.bind(null, `/wishlist/${id}`)} text="Перейти к списку желаний"/>
    </div>
  )
}

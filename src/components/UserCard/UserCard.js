import { useSelector } from 'react-redux';
import { Avatar } from '../Avatar/Avatar';
import styles from './UserCard.module.scss';

export const UserCard = ({user, label, isAdmin, ...rest}) => {

  const isOnline = useSelector(state => state.chat.online.includes(user.id))

  return (
    <div className={label ? styles.label : styles.card} {...rest}>
      <Avatar style={{width:'80px', height:'80px', margin:0}}/>
      <div>
      <p>{user.name} {user.lname}</p>
      <p>{user.email}</p>
      </div>
      {isOnline && <span className={styles.online}>online</span>}
      {isAdmin && <span className={styles.admin}>admin</span>}
    </div>
  )
}

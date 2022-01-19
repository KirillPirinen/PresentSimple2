import { Avatar } from '../Avatar/Avatar';
import styles from './UserCard.module.scss';

export const UserCard = ({user, label, ...rest}) => {
  return (
    <div className={label ? styles.label : styles.card} {...rest}>
      <Avatar style={{width:'80px', height:'80px', margin:0}}/>
      <div>
      <p>{user.name} {user.lname}</p>
      <p>{user.email}</p>
      </div>
    </div>
  )
}

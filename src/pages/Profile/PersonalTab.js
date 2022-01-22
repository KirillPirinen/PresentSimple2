import { Avatar } from '../../components/Avatar/Avatar';
import styles from './Profile.module.scss';

export const PersonalTab = ({user:{email, lname, phone, name, avatar}}) => {
  return (
      <div className={styles.personalTab}>
        <div>
          <Avatar src={avatar} gender="male"/>
           
        </div>
      <div>{name}</div>
      </div>
  )
}

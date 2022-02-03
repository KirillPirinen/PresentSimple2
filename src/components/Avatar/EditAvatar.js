import styles from './Avatar.module.scss'
import { Avatar } from './Avatar'

export const EditAvatar = ({src, gender, ...rest}) => {
  return (
    <label className={styles.file} {...rest}>
      <Avatar src={src} gender={gender}/>
      <input name="avatar" type="file"/>
    </label>
  )
}

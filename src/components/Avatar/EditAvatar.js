import styles from './Avatar.module.scss'
import female from '../../avatars/femaleDefault.jpg'
import male from '../../avatars/maleDefault.jpg'
import { host } from '../../config/endPoints'
import { Avatar } from './Avatar'

export const EditAvatar = ({src, gender, ...rest}) => {
  return (
    <label className={styles.file} {...rest}>
      <Avatar src={src} gender={gender}/>
      <input name="avatar" type="file"/>
    </label>
  )
}

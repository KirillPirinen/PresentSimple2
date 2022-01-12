import styles from './Avatar.module.css'
import female from '../../avatars/femaleDefault.jpg'
import male from '../../avatars/maleDefault.jpg'

export const Avatar = ({src, gender}) => {

  const avatarSetter = () => {
    if(src) return src;
    else return gender === 'male' ? male : female;
  }

  return <img className={styles.img} src={avatarSetter()} alt="Person"/>
}

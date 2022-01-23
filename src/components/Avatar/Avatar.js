import styles from './Avatar.module.scss'
import female from '../../avatars/femaleDefault.jpg'
import male from '../../avatars/maleDefault.jpg'
import { host } from '../../config/endPoints'

export const Avatar = ({src, gender, ...rest}) => {
  const avatarSetter = () => {
    if(src) return /http/.test(src) ? src : host + '/' + src;
    else return gender === 'male' ? male : female;
  }
    if(rest.hasOwnProperty('style')) {
      rest.style.backgroundImage = `url(${avatarSetter()})`
    }
  
    return <div style={{backgroundImage:`url(${avatarSetter()})`}} className={styles.img} alt="Person" {...rest}></div>
}

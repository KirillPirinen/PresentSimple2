import styles from './Avatar.module.scss'
import female from '../../avatars/femaleDefault.jpg'
import male from '../../avatars/maleDefault.jpg'
import { host } from '../../config/endPoints'
import { useMemo } from 'react'

export const Avatar = ({src, gender, ...rest}) => {

  const avatarSetter = useMemo(() => {
    if(src) return /http/.test(src) ? src : host + '/' + src;
    else return gender === 'female' ? female : male;
  }, [src])

    if(rest.hasOwnProperty('style')) {
      rest.style.backgroundImage = `url(${avatarSetter})`
    }
  
    return <div style={{backgroundImage:`url(${avatarSetter})`}} className={styles.img} alt="Person" {...rest}></div>
}

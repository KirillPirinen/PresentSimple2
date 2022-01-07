import styles from './Header.module.scss'
import { LogInPanel } from './LogInPanel'
import { Logo } from './Logo'

export const Header = () => {
 return (
   <div className={styles.container}>
     <Logo/>
     <LogInPanel/>
   </div>
 ) 
}

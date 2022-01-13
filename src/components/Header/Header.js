import styles from './Header.module.scss'
import { LogInPanel } from './LogInPanel'
import { Logo } from './Logo'

export const Header = ({user}) => {
 return (
   <div className={styles.container}>
     <Logo/>
     <LogInPanel user={user}/>
   </div>
 ) 
}

import { Outlet } from 'react-router-dom'
import styles from './Wrapper.module.css'

export const Wrapper = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet/>
    </div>
  )
}

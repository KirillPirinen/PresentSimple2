import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styles from './Wrapper.module.scss'

export const Wrapper = () => {
  return (
    <main className={styles.wrapper}>
       <Outlet/>
    </main>
  )
}

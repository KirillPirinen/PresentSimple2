import { Outlet } from 'react-router-dom'
import { Modal } from '../../components/Modal/Modal'
import styles from './Wrapper.module.css'

export const Wrapper = () => {
  return (
    <main className={styles.wrapper}>
      <Outlet/>
    </main>
  )
}

import { useSelector } from 'react-redux'
import styles from './Loader.module.scss'

export const Loader = () => {
  const loader = useSelector(state => state.loader)
  return (
    <>
    {loader && (
      <div className={`${styles.container} ${styles['animation-5']}`}>
      <div className={`${styles.shape} ${styles.shape1}`}></div>
      <div className={`${styles.shape} ${styles.shape2}`}></div>
      <div className={`${styles.shape} ${styles.shape3}`}></div>
      <div className={`${styles.shape} ${styles.shape4}`}></div>
    </div>
    )}
    </>
  )
}

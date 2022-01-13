import styles from './Progress.module.scss'

export const Progress = (props) => {
  return (
      <progress className={styles.progress} {...props}></progress>
  )
}

import styles from "./Inputs.module.scss"

export const MainInput = ({...rest}) => {
  return (
    <input className={styles.mainInput} {...rest}/>
  )
}

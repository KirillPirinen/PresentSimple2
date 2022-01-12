import styles from './Flag.module.css' 

export const Flag = ({text, ...rest}) => {
  return (
    <div {...rest} className={styles.flag}>
      {text}
    </div>
  )
}

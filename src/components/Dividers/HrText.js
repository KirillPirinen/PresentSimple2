import styles from './HrText.module.scss' 

export const HrText = ({text, ...rest}) => {

  return (
      <hr className={styles.hrtext} data-content={text}/>
  )
}

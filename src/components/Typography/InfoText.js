import styles from './InfoText.module.scss';

export const InfoText = ({text}) => {
  return (
    <i className={styles.info}>{text}</i>
  )
} 

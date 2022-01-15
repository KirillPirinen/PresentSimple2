import styles from './Flag.module.css' 

export const PriceTag = ({text, ...rest}) => {
  return (
    <span {...rest} className={styles.priceTag}>{text}</span>
  )
}

import styles from "./Links.module.scss"

export const ImitationLink = ({to, text, ...rest}) => {
  return (
    <a className={`${styles.mainLink} ${styles.underline}`} href={to} {...rest}>{text}</a>
  )
}

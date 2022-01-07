import { Link } from "react-router-dom"
import styles from "./Links.module.scss"

export const MainLink = ({to, text}) => {
  return (
    <Link className={`${styles.mainLink} ${styles.underline}`} to={to}>{text}</Link>
  )
}

import styles from "./Header.module.scss"
import logo from "../../Logo.png"
import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} />
    </Link>
  )
}

import { memo } from "react"
import styles from "./Tabs.module.scss"

const TabLink = ({active, text, id, icon, ...rest}) => {
  return (
    <div className={active ? styles.active : null} {...rest}>
        <i className={`fa ${icon}`}></i>
      <span>{text}</span>
    </div>
  )
} 

export default memo(TabLink)

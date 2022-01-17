import { memo } from "react"
import styles from "./Tabs.module.scss"

const TabLink = ({active, text, id, ...rest}) => {
  return (
    <div className={active ? styles.active : ''} {...rest}>
        <i className="fa fa-code"></i>
      <span>{text}</span>
    </div>
  )
} 

export default memo(TabLink)

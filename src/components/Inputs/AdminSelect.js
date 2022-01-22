import { useSelector } from "react-redux"
import styles from "./Inputs.module.scss"

export const AdminSelect = ({users, ...rest}) => {
  const admin = useSelector(state => state.user)
  return (
    <select defaultValue={`${admin.name} ${admin.lname}`} className={styles.select} {...rest}>
        <>
        <option key={admin.id} disabled>{`${admin.name} ${admin.lname}`}</option>
        {
          users?.reduce((acc, user) => {
            if(user.id !== admin.id) {
              return acc.push(
                <option key={user.id} value={user.id}>
                  {`${user.name} ${user.lname}`}
                </option>
              ), acc
            } else {
              return acc
            }
          }
          , [])
        }
        </>
    </select>
  )
}

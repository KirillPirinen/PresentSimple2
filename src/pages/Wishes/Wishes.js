import { Avatar } from "../../components/Avatar/Avatar"
import { WishList } from "../../components/WishList/WishList"

export const Wishes = () => {
  return (
    <>
    <Avatar gender={'female'}/>
      <h3>Список желаний Петра Петрова</h3>
    <WishList/>
    </>
  )
}

import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Avatar } from "../../components/Avatar/Avatar"
import { WishList } from "../../components/WishList/WishList"
import { getAllWishes } from "../../redux/actions/modalGroup.ac"

export const Wishes = () => {

  const {user_id} = useParams()
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist)

  useEffect(()=> {
    dispatch(getAllWishes(user_id))
  }, [dispatch])

  return (
    <>
      <Avatar src={wishlist.User?.avatar} gender={'female'}/>
      <h3>Список желаний пользователя {wishlist.User?.name} {wishlist.User?.lname}</h3>
      <p>Создан {moment(wishlist.createdAt).format('ll')} Последнее редактирование {moment(wishlist.updatedAt).format('ll')}</p>
      <WishList data={wishlist.Wishes}/>
    </>
  )
}

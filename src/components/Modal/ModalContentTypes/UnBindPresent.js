import { useDispatch } from "react-redux"
import { clearModal } from "../../../redux/actions/modal.ac"
import { givePresent, giveWish, unBindPresent, unBindWish } from "../../../redux/actions/profile.ac"
import { MainButton } from "../../Buttons/MainButton"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { SimpleButton } from "../../Buttons/SimpleButton"
import { HrText } from "../../Dividers/HrText"
import { InfoText } from "../../Typography/InfoText"
import { Wish } from "../../Wish/Wish"

export const UnbindPresent = ({wish, cost}) => {
  const dispatch = useDispatch()

  const unBindHandler = () => {
    if(wish.Form?.name) {
     return dispatch(unBindPresent(wish.id))
    } else {
      return dispatch(unBindWish(wish.id))
    }
  }

  const giveHandler = () => {
    if(wish.Form?.name) {
      return dispatch(givePresent(wish.id))
    } else {
      return dispatch(giveWish(wish.id))
    }
  }

  return (
    <>
      <h4>Убрать подарок для {wish.Form?.name || wish.Wishlist?.User.name} {wish.Form?.lname || wish.Wishlist?.User.lname} из списка ?</h4>
      <Wish wish={wish} cost={cost} label={true}/>
      <div>
        <MainButton onClick={giveHandler}text="Подарил"/>
        <SimpleButton style={{backgroundColor:'#887c0d'}} onClick={unBindHandler} text="Передумал дарить"/>
        <RefuseButton style={{backgroundColor:'white', color:'black'}} onClick={()=> dispatch(clearModal())} text="Отмена" />
      </div>
      <HrText text='Примечание'/>
      <InfoText text='Если вы отметите подарок как подаренный, то он станет недоступен. Повтороная активация возможна только из личного кабинета владельца'/>
    </>
  )
}

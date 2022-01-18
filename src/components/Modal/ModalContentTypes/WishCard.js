import { useDispatch, useSelector } from "react-redux"
import { clearModal } from "../../../redux/actions/modal.ac"
import { addAlone } from "../../../redux/actions/modalGroup.ac"
import { bindPresent } from "../../../redux/actions/presents.ac"
import { MainButton } from "../../Buttons/MainButton"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { SimpleButton } from "../../Buttons/SimpleButton"
import { HrText } from "../../Dividers/HrText"
import { InfoText } from "../../Typography/InfoText"
import { Wish } from "../../Wish/Wish"

export const WishCard = ({wish, cost}) => {
  const dispatch = useDispatch()
  const {User} = useSelector(state=>state.wishlist)

  return (
    <>
      <h4>Забронировать подарок для {User?.name} {User?.lname}?</h4>
      <Wish wish={wish} cost={cost} label={true}/>
      <div>
        {
          wish.Group ? (
            <SimpleButton text="Вступить в группу"/>
          ) : (
            <>
              <MainButton onClick={() => dispatch(addAlone(wish.id))} text="Подарю сам"/>
              <SimpleButton text="Создать группу"/>
            </>
          )
        }
        <RefuseButton style={{backgroundColor:'white', color:'black'}} onClick={()=> dispatch(clearModal())} text="Отмена" />
      </div>
      <HrText text='Примечание'/>
      <InfoText text='Вы сможете отменить бронь в своем личном кабинете.'/>
    </>
  )
}

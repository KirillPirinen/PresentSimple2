import { useDispatch, useSelector } from "react-redux"
import { clearModal } from "../../../redux/actions/modal.ac"
import { bindPresent } from "../../../redux/actions/presents.ac"
import { MainButton } from "../../Buttons/MainButton"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { HrText } from "../../Dividers/HrText"
import { InfoText } from "../../Typography/InfoText"
import { Wish } from "../../Wish/Wish"

export const PresentCard = ({wish, cost}) => {
  const dispatch = useDispatch()

  return (
    <>
      <h4>Забронировать подарок для {wish.Form?.name}?</h4>
      <Wish wish={wish} cost={cost} label={true}/>
      <div>
        <MainButton onClick={() => dispatch(bindPresent(wish['form_id'], wish.id, wish['pricerange_id'])) } text="Забронировать"/>
        <RefuseButton style={{backgroundColor:'white', color:'black'}} onClick={()=> dispatch(clearModal())} text="Отмена" />
      </div>
      <HrText text='Примечание'/>
      <InfoText text='Вы сможете отменить бронь в своем личном кабинете.'/>
    </>
  )
}

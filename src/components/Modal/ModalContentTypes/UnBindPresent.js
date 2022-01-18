import { useDispatch } from "react-redux"
import { clearModal } from "../../../redux/actions/modal.ac"
import { bindPresent } from "../../../redux/actions/presents.ac"
import { givePresent, unBindPresent } from "../../../redux/actions/profile.ac"
import { MainButton } from "../../Buttons/MainButton"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { SimpleButton } from "../../Buttons/SimpleButton"
import { HrText } from "../../Dividers/HrText"
import { InfoText } from "../../Typography/InfoText"
import { Wish } from "../../Wish/Wish"

export const UnbindPresent = ({wish, cost}) => {
  const dispatch = useDispatch()

  return (
    <>
      <h4>Убрать подарок для {wish.Form.name} {wish.Form.lname} из списка ?</h4>
      <Wish wish={wish} cost={cost} label={true}/>
      <div>
        <MainButton onClick={()=>dispatch(givePresent(wish.id))}text="Подарил"/>
        <SimpleButton style={{backgroundColor:'#887c0d'}} onClick={()=>dispatch(unBindPresent(wish.id))} text="Передумал дарить"/>
        <RefuseButton style={{backgroundColor:'white', color:'black'}} onClick={()=> dispatch(clearModal())} text="Отмена" />
      </div>
      <HrText text='Примечание'/>
      <InfoText text='Вы сможете отменить бронь в своем личном кабинете.'/>
    </>
  )
}

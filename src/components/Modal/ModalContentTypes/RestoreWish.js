import { useDispatch } from "react-redux"
import { clearModal } from "../../../redux/actions/modal.ac"
import { bindPresent } from "../../../redux/actions/presents.ac"
import { archiveWish, deleteWish } from "../../../redux/actions/profile.ac"
import { MainButton } from "../../Buttons/MainButton"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { HrText } from "../../Dividers/HrText"
import { InfoText } from "../../Typography/InfoText"
import { Wish } from "../../Wish/Wish"

export const RestoreWish = ({restoreWish, cost}) => {
  const dispatch = useDispatch()

  return (
    <>
      <h4>Добавить {restoreWish.title} в список желаний?</h4>
      <Wish wish={restoreWish} cost={cost} label={true}/>
      <div>
        <MainButton onClick={()=>dispatch(archiveWish(restoreWish.id))} text="Восстановить"/>
        <RefuseButton style={{backgroundColor:'white', color:'black'}} onClick={()=> dispatch(clearModal())} text="Отмена" />
        <RefuseButton onClick={()=> dispatch(deleteWish(restoreWish.id))} text="Удалить насовсем" />
      </div>
      <HrText text='Примечание'/>
      <InfoText text='Подарок снова станет виден другим пользователям'/>
    </>
  )
}

import moment from "moment"
import { useDispatch } from "react-redux"
import { clearModal } from "../../../redux/actions/modal.ac"
import { deleteForm } from "../../../redux/actions/profile.ac"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { HrText } from "../../Dividers/HrText"
import { InfoText } from "../../Typography/InfoText"

export const DeleteForm = ({form}) => {
  const dispatch = useDispatch()
  
  return (
    <>
      <h4>Отозвать анкету для {form.name} {form.lname}?</h4>
      <p>Анкета создана: {moment(form.createdAt).format('ll')} но ещё не заполнена</p>
      <div>
        <RefuseButton style={{backgroundColor:'white', color:'black'}} onClick={()=> dispatch(clearModal())} text="Отмена" />
        <RefuseButton onClick={()=> dispatch(deleteForm(form.id))} text="Удалить насовсем" />
      </div>
      <HrText text='Примечание'/>
      <InfoText text='После удаления ссылка станет недоступна'/>
    </>
  )
}

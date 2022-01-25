import { useDispatch } from "react-redux"
import { getFormData } from "../../../custom/getFormData"
import { clearModal } from "../../../redux/actions/modal.ac"
import { checkEmail } from "../../../redux/actions/User.ac"
import { MainButton } from "../../Buttons/MainButton"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { HrText } from "../../Dividers/HrText"
import { MainInput } from "../../Inputs/MainInput"
import { InfoText } from "../../Typography/InfoText"
import styles from '../Modal.module.scss'


export const RestorePassword = () => {
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(checkEmail(getFormData(e.target)))
  }

  return (
    <>
      <h4>Восстановление пароля</h4>
      <div>
        <form onSubmit={submitHandler} className={styles.addForm}>
          <MainInput type="text" name="email" placeholder="email"/>
          <MainButton text="Восстановить"/>
          <RefuseButton type="button" style={{backgroundColor:'white', color:'black'}} onClick={()=> dispatch(clearModal())} text="Отмена" />
        </form>
      </div>
      <HrText text='Примечание'/>
      <InfoText text='Ссылка для восстановление пароля будет направлена на электронную почту'/>
    </>
  )
}

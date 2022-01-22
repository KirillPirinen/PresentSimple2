import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { clearModal } from "../../../redux/actions/modal.ac"
import { bindPresent } from "../../../redux/actions/presents.ac"
import groupPageReducer from "../../../redux/reducers/groupPageReducer"
import { MainButton } from "../../Buttons/MainButton"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { SimpleButton } from "../../Buttons/SimpleButton"
import { HrText } from "../../Dividers/HrText"
import { InfoText } from "../../Typography/InfoText"
import { MainInput } from "../../Inputs/MainInput"
import { MainSelect } from "../../Inputs/MainSelect"
import styles from '../Modal.module.scss'
import { AdminSelect } from "../../Inputs/AdminSelect"
import { getFormData } from "../../../custom/getFormData"
import { deleteGroup, editGroup } from "../../../redux/actions/groupPage.ac"
import { useNavigate } from "react-router-dom"

export const EditGroup = ({toDelete, group}) => {
  const [toggler, setDelete] = useState(toDelete)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = getFormData(e.target)
    dispatch(editGroup(group.id, data))
  }
    if(toggler) {
      return (
        <>
          <h4>Вы уверены что хотите расформировать группу {group.name}?</h4>
          <div>
             <p>Если вы решили покинуть группу, её не обязательно удалять.</p>
             <p>Назначьте нового админа и покиньте группу</p>
             <SimpleButton onClick={() => setDelete(false)}text="Редактировать группу"/>
             <RefuseButton onClick={() => dispatch(deleteGroup(group.id, navigate))} text="Всё равно удалить"/>
          </div>
          <HrText text='Внимание!'/>
          <InfoText text='Восстановить группу невозможно.'/>
          <InfoText text='Подарок снова станет доступен для бронирования другими пользователями.'/>
        </>
      )
    } else {
      return (
        <form onSubmit={handleSubmit} className={styles.group}>
          <label>
            Название группы:
            <MainInput type="text" name="name" placeholder="Название группы" defaultValue={group.name}/>
          </label>
          <br/>
          <label>
            Количество участников
          <MainSelect name="maxusers" maxNum={10} firstOpt={group.maxusers}/>
          </label>
          <br/>
          <label>
            Админ:
            <AdminSelect users={group.Users} name="admin_id"/>
          </label>
          <br/>
          <MainButton type="submit" text="Редактировать группу"/>
          <RefuseButton type="button" style={{backgroundColor:'white', color:'black'}} onClick={() => dispatch(clearModal())} text="Отменить" />
        </form>
      )
    }
}

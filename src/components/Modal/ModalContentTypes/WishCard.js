import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getFormData } from "../../../custom/getFormData"
import { clearModal } from "../../../redux/actions/modal.ac"
import { addAlone, addGroup, joinGroup } from "../../../redux/actions/modalGroup.ac"
import { bindPresent } from "../../../redux/actions/presents.ac"
import { MainButton } from "../../Buttons/MainButton"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { SimpleButton } from "../../Buttons/SimpleButton"
import { HrText } from "../../Dividers/HrText"
import { MainInput } from "../../Inputs/MainInput"
import { MainSelect } from "../../Inputs/MainSelect"
import { InfoText } from "../../Typography/InfoText"
import { Wish } from "../../Wish/Wish"
import styles from '../Modal.module.scss'

export const WishCard = ({wish, cost}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {User} = useSelector(state=>state.wishlist)
  const [group, setGroup] = useState(false)
  const groupHandler = () => setGroup(prev=>!prev)

  const groupGo = () => navigate('/group/' + wish.Group.id)

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(addGroup(getFormData(e.target), wish.id))
  }

  if(group) {
    return (
      <>
      <div>
        <h3>Дарим группой {wish.title}</h3>
        <Wish wish={wish} cost={cost} label={true}/>
        <form onSubmit={submitHandler} className={styles.group}>
          <label>
            Выберите количество участников в группе
            <br/>
          <MainSelect name="maxusers" maxNum={10} firstOpt="Количество участников"/>
          </label>
          <br/>
          <label>
            <MainInput type="text" name="name" placeholder="Название группы"/>
          </label>
          <br/>
          <MainButton type="submit" text="Cоздать группу"/>
          <RefuseButton type="button" style={{backgroundColor:'white', color:'black'}} onClick={groupHandler} text="Назад" />
        </form>
      </div>
      <HrText text='Примечание'/>
      <InfoText text='Стоимость подарка обычно делится равными частями между участниками.'/>
      <InfoText text='В будущем мы планируем расширить функционал групп. Однако пока просим Вас создать группу для обшения в стороннем сервисе.'/>
      </>
    )
  } else {
    return (
      <>
        <h4>{wish.Group ? 'Вступить в группу для подарка ' : `Забронировать подарок для `}{User?.name} {User?.lname}?</h4>
        <Wish wish={wish} cost={cost} label={true}/>
        <div>
          {
            wish.Group ? (
              <SimpleButton onClick={()=>dispatch(joinGroup(wish.id, groupGo))} text="Вступить в группу"/>
            ) : (
              <>
                <MainButton onClick={() => dispatch(addAlone(wish.id))} text="Подарю сам"/>
                <SimpleButton onClick={groupHandler} text="Создать группу"/>
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

  
}

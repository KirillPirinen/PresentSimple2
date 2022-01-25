import { useDispatch } from "react-redux"
import { clearModal } from "../../../redux/actions/modal.ac"
import { addNewWish, toggleStatusWish, deleteWish, reloadWish } from "../../../redux/actions/profile.ac"
import { MainButton } from "../../Buttons/MainButton"
import { RefuseButton } from "../../Buttons/RefuseButton"
import { SimpleButton } from "../../Buttons/SimpleButton"
import { HrText } from "../../Dividers/HrText"
import { MainInput } from "../../Inputs/MainInput"
import { MainTextArea } from "../../Inputs/MainTextArea"
import { InfoText } from "../../Typography/InfoText"
import styles from '../Modal.module.scss'

export const AddWish = ({editWish}) => {
  const dispatch = useDispatch()

  const submitAction = (e) => {
    e.preventDefault();
    if (editWish?.id) {
      const data = new FormData(e.target);
      data.append('id', editWish.id);
      dispatch(reloadWish(data));
    } else {
      console.log(e)
      dispatch(addNewWish(new FormData(e.target)));
    }
  };


  if(editWish?.isBinded) {
    return (
      <>
        <h3>Упс... Похоже кто-то уже собрался дарить данный подарок</h3>
        <p>Отредактировать данные не получится, дождитесь когда его Вам вручат и переместите в архив.</p>
        <SimpleButton style={{backgroundColor:'#887c0d'}} onClick={()=>dispatch(toggleStatusWish(editWish?.id))} type="Button" text="Мне уже подарили"/>
        <RefuseButton style={{backgroundColor:'white', color:'black'}} type="button" onClick={()=>dispatch(clearModal())} text="Отмена" />
        <HrText text='Примечание'/>
        <InfoText text="Не удаляйте подарок до вручения, иначе даритель может его потерять"/>
      </>
    )
  } else {
    return (
      <>
        <h4>{editWish ? 'Редактирование' :'Добавить новый подарок в список желаний?'}</h4>
        <form onSubmit={submitAction} className={styles.addForm}>
              <MainInput 
                name='title' 
                type="text"
                placeholder={editWish?.title || "Желаемый подарок"}
              />
              <MainInput
                name='price'
                type="number"
                placeholder={editWish?.cost || "Примерная стоимость"}
                />
              <MainTextArea
                name='description' 
                type="text"
                placeholder={editWish?.description || "Описание/ссылка"}
                />
              <MainInput
                name="photo"
                type="file"
                />
              <br/>
          <MainButton type="submit" text={editWish ? 'Редактировать' : 'Добавить'}/>
          {editWish && 
          (
            <SimpleButton style={{backgroundColor:'#887c0d'}} onClick={()=>dispatch(toggleStatusWish(editWish?.id))} type="Button" text="Мне уже подарили"/>
          )
          }
          <RefuseButton style={{backgroundColor:'white', color:'black'}} type="button" onClick={()=>dispatch(clearModal())} text="Отмена" />
        </form>
        <HrText text='Примечание'/>
        <InfoText text={editWish ? 'Указывайте примерную стоимость числом, на карточке подарка отображается диапазон' :'Советуем максимально точно составлять описание'}/>
      </>
    )
  }

}

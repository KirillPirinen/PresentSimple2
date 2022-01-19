import { useState } from "react"
import { useDispatch } from "react-redux"
import { clearModal } from "../../../redux/actions/modal.ac"
import { bindPresent } from "../../../redux/actions/presents.ac"
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

  const [value, setValues] = useState(editWish || {title:'', description:'', price:''});
  const [photo, setPhoto] = useState();
  
  const changeHandler = (e) => {
    setValues(prev=> ({...prev, [e.target.name]:e.target.value}))
  }

  const submitAction = (e) => {
    e.preventDefault();
    if (editWish?.id) {
      const data = new FormData();
      data.append('photo', photo);
      data.append('title', value.title);
      data.append('description', value.description);
      data.append('price', value.price);
      data.append('id', editWish.id);
      dispatch(reloadWish(data));
    } else {
      const data = new FormData();
      data.append('photo', photo);
      data.append('title', value.title);
      data.append('description', value.description);
      data.append('price', value.price);
      dispatch(addNewWish(data));
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
                onChange={changeHandler}
                type="text"
                placeholder="Желаемый подарок"
                value={value.title}
              />
              <MainInput
                name='price'
                onChange={changeHandler}
                type="number"
                placeholder={editWish?.cost || "Примерная стоимость"}
                value={value.price}
                />
              <MainTextArea
                name='description' 
                onChange={changeHandler}
                type="text"
                placeholder="Описание/ссылка"
                value={value.description}
                />
              <MainInput
                name="photo"
                onChange={(e) => setPhoto(e.target.files[0])}
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

import { memo, useState } from "react";
import styles from "./styles.module.scss";
import {DeleteBtn} from "./DeleteBtn";
import { MainTextArea } from "../../../components/Inputs/MainTextArea";
import { SimpleButton } from "../../../components/Buttons/SimpleButton";
import { MainInput } from "../../../components/Inputs/MainInput";

const PriceRangeInput = ({id, deleteSelf, rangeid, changeHandler, title, description}) => {
   const [textarea, setTextarea] = useState(Boolean(description))
   const changeActivator = (e) => changeHandler(e, rangeid, id)
  return (
    <div className={styles['present-box']}>
      <DeleteBtn onClick={() => deleteSelf(id)}/>
          <MainInput onChange={changeActivator} name="title" placeholder="Название подарка" type="text" defaultValue={title}/>
      {textarea ? <MainTextArea defaultValue={description} name="description" placeholder="Расскажите подробнее о подарке" onChange={changeActivator}/> : null}
      <SimpleButton type="button" onClick={() => setTextarea(prev=>!prev)} text={`${textarea ? 'Убрать' : "Добавить"} описание`} /> 
  </div>
  )
}

export default memo(PriceRangeInput)

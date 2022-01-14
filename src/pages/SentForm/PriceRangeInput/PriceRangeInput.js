import { useState } from "react";
import styles from "./styles.module.css";
import {DeleteBtn} from "./DeleteBtn";
import { MainTextArea } from "../../../components/Inputs/MainTextArea";
import { SimpleButton } from "../../../components/Buttons/SimpleButton";
import { MainInput } from "../../../components/Inputs/MainInput";
import { useSentFormContext } from "../../../context/SentFormContext";

export const PriceRangeInput = ({id, del, rangeid}) => {
   const [description, setTextarea] = useState(false)
   const {changeHandler} = useSentFormContext()
   const changeActivator = (e) => changeHandler(e, rangeid, id)

  return (
    <div className={styles['present-box']}>
      <DeleteBtn del={() => del(id)}/>
          <MainInput onChange={changeActivator} name="title" placeholder="Название подарка" type="text" />
      {description ? <MainTextArea name="description" placeholder="Расскажите подробнее о подарке" onChange={changeActivator}/> : null}
      <SimpleButton onClick={() => setTextarea(prev=>!prev)} text={`${description ? 'Убрать' : "Добавить"}детальное описание`} /> 
  </div>
  )
}

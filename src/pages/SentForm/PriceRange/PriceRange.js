import { useCallback, useState } from "react"
import { PlusButton } from "../../../components/Buttons/PlusButton";
import { useSentFormContext } from "../../../context/SentFormContext";
import PriceRangeInput from "../PriceRangeInput/PriceRangeInput"
import styles from "./PriceRange.module.scss";

export const PriceRange = ({range}) => {
  const {addInput, deleteInput, data, changeHandler} = useSentFormContext()

  const [counter, setCounter] = useState(range.payload.length)
  
  const deleteHandler = useCallback((inputId) => {
    deleteInput(range.id, inputId)
  }, [])
  
  const clickHandler = () => {
    addInput(range.id, counter)
    setCounter(prev=>prev+1)
  }

  return (
    <div className={
    range.to === 1000 ? styles.easy : 
    range.to === 3000 ? styles.middle : 
    range.to === 5000 ? styles.hard : 
    range.to === 10000 ? styles.superhard :
    range.to === null ? styles.insane :  
    null}>

      <div className={styles.info}>
        <h3>От {range.from} до {range.to ? range.to : '...'} руб.</h3>
        {range.payload.length <= 5 && <PlusButton onClick={clickHandler} />}
      </div>

        {range.payload?.map(el => (
          <PriceRangeInput 
          rangeid={range.id} 
          deleteSelf={deleteHandler} 
          changeHandler={changeHandler}
          {...el}
          />
        ))}
    
    </div>
  )
}

export default PriceRange

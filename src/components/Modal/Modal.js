import { useDispatch, useSelector } from "react-redux"
import { clearModal } from "../../redux/actions/modal.ac"
import { MainButton } from "../Buttons/MainButton"
import { RefuseButton } from "../Buttons/RefuseButton"
import { SimpleButton } from "../Buttons/SimpleButton"
import { Wish } from "../Wish/Wish"
import styles from "./Modal.module.scss"

export const Modal = () => {
  const dispatch = useDispatch()
  const {status:signal, data} = useSelector(state=>state.modal)
  return (
      <div className={signal ? `${styles.modal} ${styles.active}` : styles.modal} onClick={()=> dispatch(clearModal())}> 
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>
        {data?.hasOwnProperty('wish') && (
          <>
            <Wish wish={data.wish} cost={data.cost} label={true}/>
            <div>
              <MainButton text="Забронировать"/>
              <RefuseButton text="Отказаться" />
            </div>
          </>
        )}
      </div>
      <h2 className={styles.clickhere}>Кликни что-бы выйти</h2>
    </div>
    )
}

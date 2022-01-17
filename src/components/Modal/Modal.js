import { useDispatch, useSelector } from "react-redux"
import { clearModal } from "../../redux/actions/modal.ac"
import styles from "./Modal.module.scss"
import { AddWish } from "./ModalContentTypes/AddWish"
import { PresentCard } from "./ModalContentTypes/PresentCard"

export const Modal = () => {
  const dispatch = useDispatch()
  const {status:signal, data} = useSelector(state=>state.modal)

  return (
      <div className={signal ? `${styles.modal} ${styles.active}` : styles.modal} onClick={()=> dispatch(clearModal())}> 
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>

        {data?.hasOwnProperty('wish') && (
          <PresentCard wish={data.wish} cost={data.cost}/>
        )}

        {data?.hasOwnProperty('addWish') && (
          <AddWish wish={data?.wish}/>
        )}

        {data?.hasOwnProperty('editWish') && (
          <AddWish editWish={data.editWish}/>
        )}

      </div>
      <h2 className={styles.clickhere}>Кликни что-бы выйти</h2>
    </div>
    )
}

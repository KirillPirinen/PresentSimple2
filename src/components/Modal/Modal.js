import { useDispatch, useSelector } from "react-redux"
import { clearModal } from "../../redux/actions/modal.ac"
import styles from "./Modal.module.scss"
import { AddWish } from "./ModalContentTypes/AddWish"
import { DeleteForm } from "./ModalContentTypes/DeleteForm"
import { PresentCard } from "./ModalContentTypes/PresentCard"
import { RestoreWish } from "./ModalContentTypes/RestoreWish"
import { UnbindPresent } from "./ModalContentTypes/UnBindPresent"
import { WishCard } from "./ModalContentTypes/WishCard"

export const Modal = () => {
  const dispatch = useDispatch()
  const {status:signal, data} = useSelector(state=>state.modal)

  return (
      <div className={signal ? `${styles.modal} ${styles.active}` : styles.modal} onClick={()=> dispatch(clearModal())}> 
      <div onClick={(e) => e.stopPropagation()} className={styles.content}>

        {data?.hasOwnProperty('present') && (
          <PresentCard wish={data.wish} cost={data.cost}/>
        )}

        {data?.hasOwnProperty('wish') && (
          <WishCard wish={data.wish} cost={data.cost}/>
        )}

        {data?.hasOwnProperty('addWish') && (
          <AddWish wish={data?.wish}/>
        )}

        {data?.hasOwnProperty('editWish') && (
          <AddWish editWish={data.editWish}/>
        )}

        {data?.hasOwnProperty('restoreWish') && (
          <RestoreWish restoreWish={data.restoreWish} cost={data.cost}/>
        )}

        {data?.hasOwnProperty('deleteForm') && (
          <DeleteForm form={data.deleteForm}/>
        )}

        {data?.hasOwnProperty('unBind') && (
          <UnbindPresent wish={data.unBind} cost={data.cost}/>
        )}

      </div>
      <h2 className={styles.clickhere}>Кликни что-бы выйти</h2>
    </div>
    )
}

import { useDispatch } from 'react-redux'
import { getCostByRange } from '../../custom/getCostByRange'
import { setModal } from '../../redux/actions/modal.ac'
import { Wish } from '../Wish/Wish'
import styles from './WishList.module.scss'

export const WishList = ({data}) => {
  const dispatch = useDispatch()

  const activeProp = (e) => !e.isBinded ? {
    onClick:()=>dispatch(setModal({wish:e, cost:e.cost})),
    key:e.id,
    wish:e
  } : {
    key:e.id,
    wish:e,
    }

  return (
      <div className={styles.content}>
        {data?.map(wish=>{
          const cost = getCostByRange(wish.pricerange_id)
          return (
            <Wish 
            cost={cost}
            {...activeProp(wish)}
            />
            )
        })}
      </div>
  )
}


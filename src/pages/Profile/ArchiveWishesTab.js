import moment from 'moment';
import { useDispatch } from 'react-redux';
import { PlusButton } from '../../components/Buttons/PlusButton';
import { HrText } from '../../components/Dividers/HrText';
import { Loader } from '../../components/Loader/Loader';
import { Wish } from '../../components/Wish/Wish';
import { getCostByRange } from '../../custom/getCostByRange';
import { setModal } from '../../redux/actions/modal.ac';
import styles from './Profile.module.scss';

const ArchiveWishesTab = ({wishlist}) => {
  const dispatch = useDispatch()

  return !wishlist ? <Loader/> : 
      (
      <div className={styles.wishTab}>
        <h3>Подаренные подарки</h3>
        <p>Вы можете повторно добавить эти подарки в свой список при необходимости или удалить навсегда.</p>
        <div className={styles.wishes}>
          {wishlist.Wishes?.reduce((acc, wish) => {
            if(!wish.isGiven) return acc
            const cost = getCostByRange(wish.pricerange_id)
            return acc.push(
            <Wish 
              cost={cost}
              key={wish.id} 
              wish={wish}
              onClick={()=>dispatch(setModal({restoreWish:wish, cost}))}
            />
            ), acc
          }, [])
          }
        </div>
        <HrText text={wishlist.Wishes.length ? `Список того, что уже подарено ` : 'Список пуст'}/>
      </div>
      )
}

export default ArchiveWishesTab

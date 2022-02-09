import moment from 'moment';
import { useDispatch } from 'react-redux';
import { PlusButton } from '../../components/Buttons/PlusButton';
import { HrText } from '../../components/Dividers/HrText';
import { Wish } from '../../components/Wish/Wish';
import { getCostByRange } from '../../custom/getCostByRange';
import { setModal } from '../../redux/actions/modal.ac';
import styles from './Profile.module.scss';

const WishesTab = ({wishlist = {}}) => {
  const dispatch = useDispatch()

  return (
      <div className={styles.wishTab}>
        <div className={styles.addBtn}>
          <h5>Добавить подарок</h5>
          <PlusButton onClick={()=>dispatch(setModal({addWish:true}))}/>
        </div>
        <h3>Создан: {moment(wishlist.createdAt).format('ll')}</h3>
        <h3>Последнее обновление: {moment(wishlist.updatedAt).format('ll')}</h3>
        <HrText text={wishlist.Wishes?.length ? `Список ваших хотелок` : 'Список пуст'}/>
        <div className={styles.wishes}>
          {wishlist.Wishes?.reduce((acc, wish) => {
            if(wish.isGiven) return acc;
            const cost = getCostByRange(wish.pricerange_id)
            return acc.push(
            <Wish 
              cost={cost}
              key={wish.id} 
              wish={wish}
              addClass={styles.customWish}
              onClick={()=>dispatch(setModal({editWish:{
                id:wish.id,
                title:wish.title,
                description:wish.description,
                price:'',
                cost,
                isBinded:wish.isBinded
            }}))}
            />
            ), acc
          }, [])
          }
        </div>
      </div>
      )
}

export default WishesTab

import { useDispatch } from 'react-redux';
import { HrText } from '../../components/Dividers/HrText';
import { Wish } from '../../components/Wish/Wish';
import { getCostByRange } from '../../custom/getCostByRange';
import { setModal } from '../../redux/actions/modal.ac';
import styles from './Profile.module.scss';

const GiveTab = ({wishes = [], presents = []}) => {
  const dispatch = useDispatch()

  return (
      <>
        <HrText/>
        <h4>Подарки из списков зарегистрированных пользователей: {wishes.length}</h4>
        <HrText/>
        <div className={styles.wishContainer}>
        {wishes.map(wish => {
            const cost = getCostByRange(wish.pricerange_id)
            return (
            <div 
            className={styles.wishWrap}
            onClick={()=>dispatch(setModal({unBind:wish, cost}))}
            >
              <h4>Подарок для {wish.Wishlist.User.name} {wish.Wishlist.User.lname}</h4>
              <Wish 
              cost={cost}
              key={wish.id} 
              wish={wish}
              label={true}
              />
            </div>
            )
          })}
        </div>
        <HrText/>
        <h4>Подарки из анкет: {presents.length}</h4>
        <HrText/>
        <div className={styles.wishContainer}>
          {presents.map(present => {
            const cost = getCostByRange(present.pricerange_id)
            return (
              <div className={styles.wishWrap}
              onClick={()=>dispatch(setModal({unBind:present, cost}))}
              >
              <h4>Подарок для {present.Form.name} {present.Form.lname}</h4>
              <Wish 
                cost={cost}
                key={present.id} 
                wish={present}
                label={true}
              />
              </div>
            )
          })}
        </div>
        </>
      )
}

export default GiveTab

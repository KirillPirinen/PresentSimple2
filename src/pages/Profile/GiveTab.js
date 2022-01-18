import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlusButton } from '../../components/Buttons/PlusButton';
import { SimpleButton } from '../../components/Buttons/SimpleButton';
import { HrText } from '../../components/Dividers/HrText';
import { FormCard } from '../../components/FormCard/FormCard';
import { Loader } from '../../components/Loader/Loader';
import { Wish } from '../../components/Wish/Wish';
import { getCostByRange } from '../../custom/getCostByRange';
import { setModal } from '../../redux/actions/modal.ac';
import styles from './Profile.module.scss';

const GiveTab = ({wishes, presents}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (!wishes || !presents) ? <Loader/> : 
      (<>
        <HrText/>
        <h4>Подарки из списков зарегистрированных пользователей:</h4>
        <HrText/>
        <div className={styles.wishContainer}>
        {wishes?.map(wish => {
            wish.isBinded = false;
            return (
              <Wish 
              cost={getCostByRange(wish.pricerange_id)}
              key={wish.id} 
              wish={wish}
            />
            )
          })}
        </div>
        <HrText/>
        <h4>Подарки из анкет:</h4>
        <HrText/>
        <div className={styles.wishContainer}>
          {presents?.map(present => {
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

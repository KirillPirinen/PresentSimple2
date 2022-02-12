import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SimpleButton } from '../../components/Buttons/SimpleButton';
import { HrText } from '../../components/Dividers/HrText';
import { FormCard } from '../../components/FormCard/FormCard';
import { Loader } from '../../components/Loader/Loader';
import { setModal } from '../../redux/actions/modal.ac';
import styles from './Profile.module.scss';

const FormsTab = ({forms}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const activeProp = (e) => e.isActive ? {
    onClick:()=>navigate(`/filledform/${e.id}`),
    key:e.id,
    form:e
  } : {
    key:e.id,
    form:e,
    className:styles.unactive,
    onClick:()=>dispatch(setModal({deleteForm:e}))
    }

  return !forms ? <Loader/> : 
      (<>
        <h4>Здесь отображаются формы которые были созданы Вами:</h4>
        <div className={styles.formsTab}>
          {forms?.map(e => (
            <FormCard {...activeProp(e)}/>
          ))}
        </div>
        <HrText text="Новая форма"/>
        <p>Учитывая, что для одного человка может быть создано много анкет разными людьми, мы рекомендуем перед созданием новой анкеты, попробовать найти информацию о человеке. Возможно мы уже знаем, что он хочет получить в подарок.</p>
        <SimpleButton onClick={() => navigate('/search')} text="Найти"/>
        </>
      )
}

export default FormsTab

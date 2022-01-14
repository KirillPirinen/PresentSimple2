import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { SimpleButton } from "../../components/Buttons/SimpleButton";
import { MainLink } from "../../components/Links/MainLink";
import { host } from "../../config/endPoints";
import { deliverForm } from "../../redux/actions/createForm.ac";
import styles from './FormGenerated.module.scss';

export const FormGenerated = () => {

  const form = useSelector(state=>state.createForm)

  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(deliverForm(form.id, navigate))
  }
  
  return (
    <>
      {form?.id ? <div className={styles.content}>
      <h3>Поздравляем, форма успешно сгенерирована</h3>
      <p>Ссылка на анкету для друга:</p> 
      <div className={styles.linkwrapper}>
        <MainLink to={`/sentform/${form.id}`} text={`${host}/sentform/${form.id}`}/>
      </div>
      <p>Можете отправить ссылку другу самостоятельно либо доверить отправку нам.
        Отправим анонимно, на почтовый ящик указанный Вами при заполнении контактных данных.
      </p>
      <p>
        Вам будет направлено письмо, когда Ваш друг заполнит анкету. Также информация будет доступна в вашем личном кабинете.
      </p>
      <SimpleButton onClick={clickHandler} text="Отправить анонимно"/>
    </div> : 
    <div className="container-glass">
      <h2>Нет данных</h2>
      <MainLink to='/' text='На главную'/>
    </div>
    }
    </>
  )
}

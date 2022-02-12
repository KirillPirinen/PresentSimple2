import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { SimpleButton } from "../../components/Buttons/SimpleButton";
import { MainLink } from "../../components/Links/MainLink";
import { deliverForm } from "../../redux/actions/createForm.ac";
import { setInformer } from "../../redux/actions/Informer.ac";
import styles from './FormGenerated.module.scss';

export const FormGenerated = () => {

  const form = useSelector(state=>state.createForm)
  const linkAddress = `https://easy2give.ru/sentform/${form.id}`
  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  const clickHandler = () => {
    dispatch(deliverForm(form.id, navigate))
  }

  const copyHandler = async () => {
    await navigator.clipboard.writeText(linkAddress)
    dispatch(setInformer({info:'Ссылка скопирована'}))
  }
  

  return (
    <>
      {form?.id ? <div className={styles.content}>
      <h3>Поздравляем, форма успешно сгенерирована</h3>
      <p>Ссылка на анкету для друга:</p> 
      <div className={styles.linkwrapper}>
        <MainLink to={`/sentform/${form.id}`} text={linkAddress}/>
      </div>
      <SimpleButton type="button" onClick={copyHandler} text='Скопировать ссылку'/>
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

import styles from './Search.module.scss'
import { SimpleButton } from '../../components/Buttons/SimpleButton'
import { useNavigate } from 'react-router-dom'
import { FormCard } from '../../components/FormCard/FormCard'

export const FormsList = ({forms, withUser, setForce}) => {
  const navigate = useNavigate()
  
  let text;

  if(withUser) {
    text = 'A также, мы нашли анкеты, которые он заполнял ранее. Возможно они будут полезными:'
  } else {
    text = `Хорошая новость! Ваш друг уже заполнял анкет${forms.length === 1 ? 'у' : 'ы'}:`
  }

  const activeProp = (e) => e.isActive ? {
    onClick:()=>navigate(`/filledform/${e.id}`),
    key:e.id,
    form:e
  } : {
    key:e.id,
    form:e
    }

  return (
    <div className={styles.forms}>
      <h4>{text}</h4>
        {forms?.map(e => (
        <FormCard {...activeProp(e)}/>
        ))}
        <div className={styles.button}>
          <SimpleButton onClick={() => setForce(true)} text="Данные устарели? Отправить новую"/>
        </div>
    </div>
  )
}

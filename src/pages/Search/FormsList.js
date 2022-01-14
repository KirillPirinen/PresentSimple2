import styles from './Search.module.scss'
import moment from 'moment'
import { SimpleButton } from '../../components/Buttons/SimpleButton'
import { useNavigate } from 'react-router-dom'

export const FormsList = ({forms, withUser, setForce}) => {
  const navigate = useNavigate()

  let text;

  if(withUser) {
    text = 'A также, мы нашли анкеты, которые он заполнял ранее. Возможно они будут полезными:'
  } else {
    text = `Хорошая новость! Ваш друг уже заполнял анкет${forms.length === 1 ? 'у' : 'ы'}:`
  }

  const activeProp = (active, id) => active ? {
    className:styles.active,
    onClick:()=>navigate(`/filledform/${id}`),
    key:id
  } : {key:id}

  return (
    <div className={styles.forms}>
      <h4>{text}</h4>
      {forms?.map(e => (
        <div {...activeProp(e.isActive, e.id)} key={e.id}>
          <h4>{e.name}&nbsp;{e.lname}</h4>
            <p>
              Дата отправки:<br/>
              <b>{moment(e.createdAt).format('ll')}</b>
            </p>
            <p>
              {e.isActive && 'Дата заполнения'}
              <br/>
              <b>{e.isActive ? moment(e.updatedAt).format('ll') : 'Ещё не заполнена'}</b>
            </p>
            <p>
              {e.isActive ? <span>Перейти в анкету</span> : 
              'Анкета станет доступна после заполнения'}
            </p>
        </div>
        ))}
        <div className={styles.button}>
          <SimpleButton onClick={() => setForce(true)} text="Данные устарели? Отправить новую"/>
        </div>
    </div>
  )
}

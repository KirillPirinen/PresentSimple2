import styles from './Forms.module.scss'
import moment from 'moment'

export const FormCard = ({form, ...rest}) => {
  return (
    <div className={form.isActive ? styles.active : styles.unactive} {...rest} key={form.id}>
          <h4>{form.name}&nbsp;{form.lname}</h4>
            <p>
              Дата отправки:<br/>
              <b>{moment(form.createdAt).format('ll')}</b>
            </p>
            <p>
              {form.isActive && 'Дата заполнения'}
              <br/>
              <b>{form.isActive ? moment(form.updatedAt).format('ll') : 'Ещё не заполнена'}</b>
            </p>
            <p>
              {form.isActive ? <span>Перейти в анкету</span> : 
              'Анкета станет доступна после заполнения'}
            </p>
        </div>
  )
}

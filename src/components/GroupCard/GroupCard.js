import styles from './GroupCard.module.scss'
import moment from 'moment'

export const GroupCard = ({group, ...rest}) => {
  return (
    <div className={styles.groupCard} {...rest}>
          <h4>{group.telegram}</h4>
            <p>
              Дата создания:<br/>
              <b>{moment(group.createdAt).format('ll')}</b>
            </p>
            <p>
              <span>На страницу группы</span>
            </p>
    </div>
  )
}

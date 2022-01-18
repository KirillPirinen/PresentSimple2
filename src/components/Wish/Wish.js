import { Flag } from '../Flag/Flag'
import { PriceTag } from '../Flag/PriceTag'
import { Progress } from '../Proggress/Progress'
import styles from './Wish.module.scss'
import gift from '../../gift.png'
import { host } from '../../config/endPoints'

export const Wish = ({wish, cost, label, addClass, ...rest}) => {

  const {id, title, description, isBinded, WishPhoto, Group, isGiven} = wish;

  const divProps = 
    label ? 
    {
      className:`${styles.wish} ${styles.label}`,
    } :
    !isBinded || isGiven || (Group && Group.maxusers !== Group.currentusers) ? 
    {
    className:`${styles.wish} ${styles.active}`,
    } 
    : 
    {
      className:styles.wish
    }

    if(addClass) divProps.className = divProps.className + " " + addClass;

    const getStatusColor = () => {
      const readyInd = Number(Group.value) / Number(Group.max)
      if(readyInd < 0.5) return 'red'
      else if (readyInd < 0.8) return 'yellow'
      else return 'green'
    }

  return (
          <div {...rest} {...divProps}>
            <PriceTag text={cost}/>

                <div className={styles.image}>
                  <img src={WishPhoto?.image ? host + '/' + WishPhoto.image : gift}/>
                </div>

            <div className={styles.info}>
              {
                Group && (
                  <>
                    {label || <Flag text={'Дарит группа'}/>}
                    <Progress 
                      max={Group.maxusers} 
                      value={Group.currentusers} 
                      style={{color:getStatusColor(), width:'calc(100% - 60px)'}}
                    />
                    <div>Участников в группе {Group.currentusers}/{Group.maxusers}</div>
                  </>
                )
              }
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
  )
}

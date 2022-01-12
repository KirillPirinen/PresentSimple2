import { useNavigate } from 'react-router-dom'
import { Flag } from '../Flag/Flag'
import { Progress } from '../Proggress/Progress'
import styles from './Wish.module.scss'

export const Wish = ({wish:{id, title, description, isBinded, WishPhoto, Group}}) => {
  const navigate = useNavigate()

  const divProps = 
    !isBinded || (Group && Group.max !== Group.value) ? 
    {
    className:`${styles.wish} ${styles.active}`,
    onClick:()=> navigate(`/wish/${id}`)
    } : 
    {
      className:styles.wish
    }

    const getStatusColor = () => {
      const readyInd = Number(Group.value) / Number(Group.max)
      if(readyInd < 0.5) return 'red'
      else if (readyInd < 0.8) return 'yellow'
      else return 'green'
    }

  return (
          <div {...divProps}>
            {
              WishPhoto.image && (
                <div className={styles.image}>
                  <img src={WishPhoto.image}/>
                </div>
              )
            }
            <div className={styles.info}>
              
              {
                Group && (
                  <>
                    <Flag text={'Дарит группа'}/>
                    <Progress 
                      max={Group.max} 
                      value={Group.value} 
                      style={{color:getStatusColor(), width:'calc(100% - 60px)'}}
                    />
                    <span>Учатников в группе {Group.value}/{Group.max}</span>
                  </>
                )
              }
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </div>
  )
}

import { useNavigate } from 'react-router-dom'
import { Flag } from '../Flag/Flag'
import { PriceTag } from '../Flag/PriceTag'
import { Progress } from '../Proggress/Progress'
import styles from './Wish.module.scss'
import gift from '../../gift.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setModal } from '../../redux/actions/modal.ac'

export const Wish = ({wish, cost, label, ...rest}) => {

  const dispatch = useDispatch()

  const {id, title, description, isBinded, WishPhoto, Group} = wish;

  const divProps = 
    label ? 
    {
      className:`${styles.wish} ${styles.label}`,
    } :
    !isBinded || (Group && Group.max !== Group.value) ? 
    {
    className:`${styles.wish} ${styles.active}`,
    onClick:() => dispatch(setModal({wish, cost})),
    } 
    : 
    {
      className:styles.wish
    }
    console.log(divProps)
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
                  <img src={WishPhoto?.image || gift}/>
                </div>

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
                    <div>Учатников в группе {Group.value}/{Group.max}</div>
                  </>
                )
              }
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
          </div>
  )
}

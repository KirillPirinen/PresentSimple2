import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Loader } from "../../components/Loader/Loader"
import { Wish } from "../../components/Wish/Wish"
import { setModal } from "../../redux/actions/modal.ac"
import { getAllPresents } from "../../redux/actions/presents.ac"
import styles from './FilledFormData.module.scss'


const FilledFormRange = ({range}) => {
  const dispatch = useDispatch()
  return (
    <>
            <h3>От {range.from} до {range.to ? range.to : '...'} руб.</h3>
            <div className={
              range.to === 1000 ? styles.easy : 
              range.to === 3000 ? styles.middle : 
              range.to === 5000 ? styles.hard : 
              range.to === 10000 ? styles.superhard :
              range.to === null ? styles.insane :  
              null}>
                {range.Presents?.map(wish=> {
                  const cost = `от ${range.from} до ${range.to} ₽`;
                  return (<Wish 
                    key={wish.id} 
                    wish={wish} 
                    cost={cost} 
                    onClick={() => dispatch(setModal({wish, cost}))}
                    />
                    )
                }
                )}
            </div>
    </>
  )
}

export const FilledFormData = () => {
  const {uuid} = useParams()
  const dispatch = useDispatch()
  const ranges = useSelector(state => state.presents)

  useEffect(()=> {
    dispatch(getAllPresents(uuid))
  }, [dispatch])
  
  const form = ranges[0]?.Presents[0]?.Form

  return (
    <div className={styles.content}>
      <h3>Вот что {form?.name} {form?.lname} указал в анкете от {moment(form?.createdAt).format('ll')}: </h3>
      {ranges ? (
        ranges.map(range => {
          return (
            <FilledFormRange key={String(range.id)} range={range}/>
          )
        })
      ) : <Loader/>}
    </div>
  )
}


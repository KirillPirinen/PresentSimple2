import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Loader } from "../../components/Loader/Loader"
import { Wish } from "../../components/Wish/Wish"
import { getAllPresents } from "../../redux/actions/presents.ac"
import styles from './FilledFormData.module.scss'

export const FilledFormData = () => {
  const {uuid} = useParams()
  const dispatch = useDispatch()
  const ranges = useSelector(state => state.presents)

  useEffect(()=> {
    dispatch(getAllPresents(uuid))
  }, [dispatch])

  return (
    <div className={styles.content}>
      <h3>Вот что Петр Петров указал в анкете 20.10.2021: </h3>
      {ranges ? (
        ranges.map(range => {
          return (
            <>
            <h3>От {range.from} до {range.to ? range.to : '...'} руб.</h3>
            <div key={String(range.id)} className={
              range.to === 1000 ? styles.easy : 
              range.to === 3000 ? styles.middle : 
              range.to === 5000 ? styles.hard : 
              range.to === 10000 ? styles.superhard :
              range.to === null ? styles.insane :  
              null}>
                {range.Presents?.map(el=>(<Wish key={el.id} wish={el} cost={`от ${range.from} до ${range.to} ₽`}/>))}
              </div>
              </>
          )
        })
      ) : <Loader/>}
    </div>
  )
}

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { clearInformer } from '../../redux/actions/Informer.ac'
import styles from './Informer.module.scss'

export const Informer = () => {
  const informer = useSelector(state=>state.informer)
  const dispatch = useDispatch()
  const location = useLocation()
  
  useEffect(()=>{
    if (informer.status) dispatch(clearInformer())
  }, [location])

  if (!informer.status) return null
  else {
    return (
      <div onClick={dispatch.bind(null, clearInformer())} className={informer.error ? styles.error : styles.info}>
        {informer.error || informer.info}
      </div>
    )
  }
}

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { Loader } from "../../components/Loader/Loader"
import { setInformer } from "../../redux/actions/Informer.ac"
import { checkLink, resetPassword } from "../../redux/actions/reset.ac"
import { ResetPassword } from "./ResetPassword"

export const CheckLink = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {uuid} = useParams()
  const isValid = useSelector(state => state.resetPassword)
  const [password, setPassword] = useState({first:'', second:''})
  const redirectHandler = (to) => navigate.bind(null, to, {replace:true})
  
  const utils = {
    submitHandler: (e) => {
      e.preventDefault()
      if(password.first === '') {
        dispatch(setInformer({error:'Поля не могут быть пустыми'}))
      } else if (password.first !== password.second) {
        dispatch(setInformer({error:'Пароли не совпадают'}))
      } else {
        dispatch(resetPassword({password:password.first}, redirectHandler('/auth/login')))
      }
    },
    changeHandler: (e) => setPassword(prev => ({...prev, [e.target.name]: e.target.value})),
    password
  }

  useEffect(() => {
    dispatch(checkLink(uuid, redirectHandler('/')))
  }, [dispatch])

  return isValid ? <ResetPassword utils={utils}/> : <Loader/>
}

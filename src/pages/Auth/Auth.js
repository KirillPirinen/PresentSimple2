import { useDispatch } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { getFormData } from "../../custom/getFormData"
import { googleIn, signIn, signUp } from "../../redux/actions/User.ac"
import styles from './Auth.module.scss'

export const Auth = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate()
  const redirectHandler = navigate.bind(null, from, {replace:true})
  
  const utils = {
    signUpSubmit: (e) => {
      e.preventDefault()
      dispatch(signUp(getFormData(e.target), navigate))
    },
    signInSubmit: (e) => {
      e.preventDefault()
      dispatch(signIn(getFormData(e.target), redirectHandler))
    },
    onSuccess: (res) => {
      dispatch(googleIn({token:res?.tokenId}, redirectHandler))
      console.log(res)
     },
    onFailure: (err) => {
     console.log(err)
    }
  }

  return (
    <div className={styles.content}>
      <Outlet context={utils}/>
    </div>
  )
}

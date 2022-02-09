import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { Loader } from "../../components/Loader/Loader"
import { activate } from "../../redux/actions/User.ac"

export const Activate = () => {
  const { uuid } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(activate(uuid))
  }, [dispatch])

  const loader = useSelector(state => state.loader)
  
  return loader ? <Loader/> : <Navigate to="/"/>
}

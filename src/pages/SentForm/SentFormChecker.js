import { useEffect } from "react"
import { useSentFormContext } from "../../context/SentFormContext"
import { CheckUUID } from "../../redux/actions/SentForm.ac"
import { SentForm } from "./SentForm"
import { Loader } from '../../components/Loader/Loader'

export const SentFormCheker = () => {
  const {dispatch, form, uuid, navigate} = useSentFormContext()
  
  useEffect(() =>
    dispatch(CheckUUID(uuid, navigate))
  ,[dispatch])

  return form?.status ? <SentForm /> : <Loader/>
}

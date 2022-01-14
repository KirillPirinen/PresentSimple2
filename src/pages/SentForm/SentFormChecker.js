import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSentFormContext } from "../../context/SentFormContext"
import { CheckUUID } from "../../redux/actions/SentForm.ac"
import { SentForm } from "./SentForm"


export const SentFormCheker = () => {
  const {dispatch, form} = useSentFormContext()
  const {uuid} = useParams()

  useEffect(() =>
    dispatch(CheckUUID(uuid))
  ,[dispatch])

  return (
    <>
      {form?.status ? <SentForm /> : null}
    </>
    )
}

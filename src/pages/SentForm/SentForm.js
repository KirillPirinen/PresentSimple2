import { SimpleButton } from "../../components/Buttons/SimpleButton";
import { MainInput } from "../../components/Inputs/MainInput";
import { useSentFormContext } from "../../context/SentFormContext";
import { SendForm } from "../../redux/actions/SentForm.ac";
import { PriceRange } from "./PriceRange/PriceRange";
import style from './SentForm.module.scss'

export const SentForm = () => {
  const { data, form:guest, dispatch, navigate } = useSentFormContext()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(SendForm(guest.id, data, navigate))
  }
  
  return (
    <div className={style.content}>
    <h2>Привет, {guest?.name} {guest?.lname}!</h2>
    <h3>Заполни пожалуйста анкету, чтобы твои друзья знали что тебе подарить</h3>
    <form onSubmit={submitHandler}>
    <label htmlFor="exampleEmail">Твой Email</label>
    <MainInput id="exampleEmail" name="email" placeholder={guest?.email} type="email" disabled/>
    <label htmlFor="Phone">Твой телефон:</label>
    <MainInput id="Phone" name="phone" placeholder={guest?.phone} type="phone" disabled/>
      {data?.map(range => <PriceRange key={range.id} range={range} />)}
    <hr/>
  <SimpleButton text="Отправить форму"/>
</form>
</div>
  )
}

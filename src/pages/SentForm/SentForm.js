import { MainButton } from "../../components/Buttons/MainButton";
import { SimpleButton } from "../../components/Buttons/SimpleButton";
import { MainInput } from "../../components/Inputs/MainInput";
import { MainLink } from "../../components/Links/MainLink";
import { useSentFormContext } from "../../context/SentFormContext";
import PriceRange from "./PriceRange/PriceRange";
import style from './SentForm.module.scss'

export const SentForm = () => {
  const { data, form:guest, clearForm, submitHandler } = useSentFormContext()
  
  return (
    <div className={style.content}>
    <h3>Привет, {guest?.name} {guest?.lname}!</h3>
    <p>Похоже что один из твоих друзей собирается подарить тебе что-то, что нужно именно тебе!</p>
    <p>Подробнее о том как это работает, ты можешь узнать <b><MainLink to="/" text="здесь"/></b>.</p>
    <p>Будь внимателен при заполнении анкеты, список подарков будет доступен всем твоим друзьям, шанс получить подарок мечты становится как никогда высок!</p>
    <form onSubmit={submitHandler}>
    <label htmlFor="exampleEmail">Твой Email</label>
    <MainInput id="exampleEmail" name="email" placeholder={guest?.email} type="email" disabled/>
    <label htmlFor="Phone">Твой телефон:</label>
    <MainInput id="Phone" name="phone" placeholder={guest?.phone} type="phone" disabled/>
    <SimpleButton onClick={clearForm} type="button" text="Очистить форму"/>
      {data?.map(range => <PriceRange key={String(range.id)} range={range} />)}
    <hr/>
  <MainButton text="Отправить форму"/>
</form>
</div>
  )
}

import background from '../../base.png'
import styles from './Main.module.scss'
import { StepCard } from './StepCard'
import { MainButton } from '../../components/Buttons/MainButton'
import { useNavigate } from 'react-router-dom'

export const Main = () => {
  const clickHandler = useNavigate().bind(null, 'auth/signup')

  return (
    <>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h2>
            Дарить подарки ещё никогда не было так просто
          </h2>
          <p>
            Дарёному коню в зубы не смотрят? Чушь! Каждый хочет получить подарок мечты, а Present Simple поможет Вам его выбрать.
          </p>
        </div>
        <img src={background} className={styles.image} />
      </div>
      <div className={styles.downContent}>
          <h2>Это просто как раз-два-три</h2>
          <p>Как это работает:</p>
          <StepCard text={{p:'Проверяем, есть ли список желаний у Вашего друга или он уже заполнял анкету у нас', h4:'1 минута'}}/>
          <StepCard text={{p:'Если информация есть, выбираете подходящий подарок и бронируете его, чтобы другие не подарили тоже самое', h4:'1 минута'}}/>
          <StepCard text={{p:'Если нет, заполняете контактные данные о друге, и отправляете ему ссылку на заполнение анкеты (можно анонимно, через наш сервис)', h4:'2 минуты'}}/>
          <StepCard text={{p:'После того, как анкета будет заполнена, Вам поступит уведомление. Данная анкета будет доступна всем зарегистрированным пользователям по контактным данным, поэтому желаемый подарок необходимо также забронировать', h4:'Сразу после заполнения другом анкеты'}}/>
          <StepCard text={{p:'Вручаем подарок!', h4:'☺'}} last={true}/>
          <p><hr/></p>
          <p>А ещё...</p>
          <p>Вы сможете создать или вступить в группу для покупки подарка и разделения его стоимости между участниками, а также многое другое.</p>
          <p><MainButton text="Зарегистрироваться и начать!" onClick={clickHandler}/></p>
      </div>
    </>
  )
}

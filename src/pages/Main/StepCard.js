import styles from './Main.module.scss'

export const StepCard = ({last, text:{p, h4}}) => {
  
  return (
    <div className={last ? styles.lastCard : styles.stepCard}>
        <p>{p}</p>
        <h4>{h4}</h4>
    </div>
  )

}

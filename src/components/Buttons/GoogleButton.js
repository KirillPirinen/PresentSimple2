import styles from "./Buttons.module.scss"
import GoogleLogin from 'react-google-login';

export const GoogleButton = (props) => {
  return (
    <GoogleLogin
    {...props}
    clientId={process.env.REACT_APP_GOOGLE_ID}
    render={(renderProps) => 
      (
      <button {...renderProps} type="button" className={styles.google}>
        Войти с помощью Google
      </button>
      )
    }
    />
  )
}

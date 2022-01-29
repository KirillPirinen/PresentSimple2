import styles from "./Buttons.module.scss"
import GoogleLogin from 'react-google-login';

const REACT_APP_GOOGLE_ID = '1062918467587-08js9mj4jovvslqhg5fjsmn9hfqh68ts.apps.googleusercontent.com'

export const GoogleButton = (props) => {
  return (
    <GoogleLogin
    {...props}
    clientId={REACT_APP_GOOGLE_ID}
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

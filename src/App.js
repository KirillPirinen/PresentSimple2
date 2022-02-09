import { lazy, Suspense, useEffect} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { RequireAuth } from "./components/RequireAuth/RequireAuth";
import { Auth } from "./pages/Auth/Auth";
import { Login } from "./pages/Auth/LogIn/Login";
import { SignUp } from "./pages/Auth/SignUp/SignUp";
import { Main } from "./pages/Main/Main";
import { Search } from "./pages/Search/Search";
import { Wrapper } from "./pages/Wrapper/Wrapper";
import "moment/locale/ru";
import { Wishes } from "./pages/Wishes/Wishes";
import { FilledFormData } from "./pages/FilledFormData/FilledFormData";
import { NewForm } from "./pages/NewForm/NewForm";
import { Informer } from "./components/Informer/Informer";
import { useSelector } from "react-redux";
import { FormGenerated } from "./pages/FormGenerated/FormGenerated";
import { SentFormCheker } from "./pages/SentForm/SentFormChecker";
import { FormContextProvider } from "./context/SentFormContext";
import { Modal } from "./components/Modal/Modal";
import { Profile } from "./pages/Profile/Profile";
import { CheckLink } from "./pages/ResetPassword/CheckLink";
import { Activate } from "./pages/Activate/Activate";
import { Loader } from './components/Loader/Loader';

const GroupPage = lazy(() => import('./pages/GroupPage/GroupPage'));

function App() {
  const user = useSelector(state=>state.user)

  useEffect(()=> {
    if(user?.name) window.localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <BrowserRouter>
      <Header user={user}/>
      <Routes>
        <Route path="/" element={<Wrapper />}>

          <Route index element={<Main />} />

          <Route path="auth" element={<Auth/>}>
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<SignUp/>} />
          </Route>
          
          <Route path="resetPassword/:uuid" element={<CheckLink/>}/>
          <Route path="activation/:uuid" element={<Activate/>}/>
          <Route path="sentform/:uuid" element={<FormContextProvider><SentFormCheker/></FormContextProvider>}/>

          <Route element={<RequireAuth />}>
            <Route path="profile" element={<Profile/>} />
            <Route path="search" element={<Search/>} />
            <Route path="newform" element={<NewForm/>} />
            <Route path="wishlist/:user_id" element={<Wishes/>} />
            <Route path="group/:group_id" element={<Suspense fallback={<Loader/>}><GroupPage/></Suspense>} />
            <Route path="filledform/:uuid" element={<FilledFormData/>} />
            <Route path="successCreated" element={<FormGenerated/>}/>
          </Route>

          <Route path="*" element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          >
          </Route>

        </Route>
      </Routes>
      <Informer/>
      <Modal/>
    </BrowserRouter>
  )
}

export default App;

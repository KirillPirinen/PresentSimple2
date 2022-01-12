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

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Wrapper />}>

          <Route index element={<Main />} />

          <Route path="auth" element={<Auth/>}>
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<SignUp/>} />
          </Route>
          
          <Route element={<RequireAuth />}>
            <Route path="dashboard" element={<div>Защищенный рут</div>} />
            <Route path="search" element={<Search/>} />
            <Route path="wishlist/:id" element={<Wishes/>} />
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
    </BrowserRouter>
  )
}

export default App;

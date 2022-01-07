import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Auth } from "./pages/Auth/Auth";
import { Main } from "./pages/Main/Main";
import { Wrapper } from "./pages/Wrapper/Wrapper";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Wrapper />}>

          <Route index element={<Main />} />

          <Route path="auth" element={<Auth/>}>
            <Route path="login" element={<div>Вход</div>} />
            <Route path="signup" element={<div>Регистрация</div>} />
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

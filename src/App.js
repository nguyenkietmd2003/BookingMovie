import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./templates/AuthTemplate";
import LoginPage from "./pages/loginPage/LoginPage";
import HomeTemplate from "./templates/HomeTemplate";
import HomePage from "./pages/HomePage/HomePage";
import DetailPage from "./pages/DetailPage/DetailPage";
import ScreenPage from "./pages/ScreenPage/ScreenPage";
import Loading from "./components/Loading/Loading";
import SignUpPage from "./pages/signupPage/signupPage";
import CheckUser from "./HOC/CheckUser";
import Responsive from "./components/DemoResponsive/Responsive";

function App() {
  return (
    <BrowserRouter>
      {/* Always on  */}
      <Loading />
      {/* <Responsive /> */}

      <Routes>
        {/* home template  */}
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="detail-movie/:idMovie" element={<DetailPage />} />
        </Route>

        {/*  */}
        <Route
          path="screen-movie/:maLichChieu"
          element={
            <CheckUser>
              <ScreenPage />
            </CheckUser>
          }
        />
        {/*  */}

        {/* auth template => xử lý các tác vụ khác: đăng kí, ....  */}
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

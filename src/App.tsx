import './App.css'
import {Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import { Navbar } from './components/ui-element/Navbar/Navbar';
import { LK } from './components/LK/LK';
import {authContext} from "./contexts/AuthContext";
import {FC, useContext} from "react";
import Signup from "./SignUp/Signup";
import Login from "./Login/Login";


type Props = {
    allowedRoles: string[]
};


const RequireAuth: FC<Props> = ({allowedRoles}) => {
    const context = useContext(authContext)
    const location = useLocation();
    return allowedRoles.find((role: string) => context?.auth.role.includes(role)) ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
    );
}


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<></>} />
          <Route path='/lk' element={<RequireAuth allowedRoles={["student"]}/>}>
              <Route path='/lk' element={<LK />}/>
          </Route>
          <Route path='/signup' element={<Signup />}/> {/*Регистрация*/}
          <Route path='/login' element={<Login />}/> {/*Вход*/}
        <Route path='/vacancy' element={<></>} /> {/* мои вакансии*/}
        <Route path='/project' element={<></>} /> {/*О проекте */}
      </Routes>
    </>
  )
}

export default App

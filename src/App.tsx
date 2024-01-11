import './App.css'
import {Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import { Navbar } from './components/ui-element/Navbar/Navbar';
// import { LK } from './components/LK/LK';
import { Createvacancy } from './components/create_vacancy/create_vacancy';
import { EditingVacancy } from './components/editing_vacancy/editing_vacancy';
import { LK_employer } from './components/LK_employer/LK_employer';
import { Main } from "./components/Main/Main/Main";
import {authContext} from "./contexts/AuthContext";
import {FC, useContext} from "react";
import Signup from "./SignUp/Signup";
import Login from "./Login/Login";
import Profile from './components/profile/profile';


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
        <Route path='/' element={<Main></Main>} />
          <Route path='/lk' element={<RequireAuth allowedRoles={["student"]}/>}>
              <Route path='/lk' element={<LK_employer />}/>
          </Route>
          <Route path='/signup' element={<Signup />}/> {/*Регистрация*/}
          <Route path='/login' element={<Login />}/> {/*Вход*/}
        <Route path='/vacancy' element={<></>} /> {/* мои вакансии*/}
        <Route path='/project' element={<></>} /> {/*О проекте */}
        <Route path='/createVacancy' element={<Createvacancy />} />
        <Route path='/EditingVacancy' element={<EditingVacancy />} />
          <Route path='/lkEmployer' element={<RequireAuth allowedRoles={["employer"]}/>}>
            <Route path='/lkEmployer' element={<LK_employer />} />
          </Route>
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
  )
}

export default App

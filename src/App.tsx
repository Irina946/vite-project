import './App.css'
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/ui-element/Navbar/Navbar';
import { LK } from './components/LK/LK';
import { Createvacancy } from './components/create_vacancy/create_vacancy';
import { EditingVacancy } from './components/editing_vacancy/editing_vacancy';
import { LK_employer } from './components/LK_employer/LK_employer';


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/lk' element={<LK />} />
        <Route path='/vacancy' element={<></>} /> {/* мои вакансии*/}
        <Route path='/project' element={<></>} /> {/*О проекте */}
        <Route path='/createVacancy' element={<Createvacancy />} />
        <Route path='/EditingVacancy' element={<EditingVacancy />} />
        <Route path='/lkEmployer' element={<LK_employer />} />
      </Routes>
    </>
  )
}

export default App

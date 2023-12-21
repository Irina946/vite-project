import './App.css'
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/ui-element/Navbar/Navbar';
import { LK } from './components/LK/LK';


function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/lk' element={<LK />} />
        <Route path='/vacancy' element={<></>} /> {/* мои вакансии*/}
        <Route path='/project' element={<></>} /> {/*О проекте */}
      </Routes>
    </>
  )
}

export default App

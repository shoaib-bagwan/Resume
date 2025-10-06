import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Resume from './Components/Resume';
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Resume/>}></Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App

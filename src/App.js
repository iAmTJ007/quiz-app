import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import Main from "./components.js/Main"
import Quiz from './pages/Quiz';
import Result from './pages/Result';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login/>}/>
        <Route path='/Quiz' element={<Quiz/>}/>
        <Route path='/Result' element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  );
}
function Login(){
  const Navigate=useNavigate();
  return(
      <>   
    // i just chaned hisis
          <div className="box-button">
              <button className="btn">Create Quiz</button>
              <button className="btn" onClick={()=>Navigate('./Quiz')}>Join Quiz</button>
          </div>
          {/* <button onClick={()=>Navigate('./Quiz')}>click to start quiz</button> */}
      </>
  )
}

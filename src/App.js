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
  return (
    <div className="main">
        <div className="header">
            <div className="first">
                <p>Good luck 🥹</p>
                <img 
                    src="https://i.pinimg.com/originals/d9/fc/f4/d9fcf4f4995e18ae4fb9c81fe55832dc.gif" 
                    alt="Good luck gif" 
                    className="img1" 
                />
                <p>Made with love 🥰</p>
            </div>
            <div className="box-button">
                <button className="btn">Create Quiz</button>
                <button 
                    className="btn" 
                    onClick={() => Navigate('/Quiz')} // Updated for React Router
                >
                    Join Quiz
                </button>
            </div>
        </div>
    </div>
);
}

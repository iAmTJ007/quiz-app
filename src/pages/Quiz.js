import { useNavigate } from "react-router-dom"
import '../App.css'
import { useState } from "react";
export default function Quiz(){
    const [currId,setCurrId]=useState(1);

    const Navigate=useNavigate();

    return(
        <div className="quiz-screen-body">
            <QuestionTitle currId={currId}/>
            <Options/>   
        </div>
    )
}

  
function QuestionTitle({currId}){
    const currQuestion=quizData.find((question)=>
        question.id===currId
    )
    return(
        <div className="question-text">
            <h1>{currQuestion.question}</h1>
        </div>
    )
}

function Options(){
    return(
        <h1>df</h1>
    )
}
const quizData = 
      [
        {
          "id": 1,
          "question": "What is the capital of France?",
          "options": [
            "Berlin",
            "Madrid",
            "Paris",
            "Rome"
          ],
          "answer": "Paris"
        },
        {
          "id": 2,
          "question": "Which planet is known as the Red Planet?",
          "options": [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
          ],
          "answer": "Mars"
        },
        {
          "id": 3,
          "question": "Who wrote 'To Kill a Mockingbird'?",
          "options": [
            "Harper Lee",
            "Mark Twain",
            "Ernest Hemingway",
            "F. Scott Fitzgerald"
          ],
          "answer": "Harper Lee"
        },
        {
          "id": 4,
          "question": "What is the largest ocean on Earth?",
          "options": [
            "Atlantic Ocean",
            "Indian Ocean",
            "Arctic Ocean",
            "Pacific Ocean"
          ],
          "answer": "Pacific Ocean"
        },
        {
          "id": 5,
          "question": "What is the smallest prime number?",
          "options": [
            "0",
            "1",
            "2",
            "3"
          ],
          "answer": "2"
        }
      ];
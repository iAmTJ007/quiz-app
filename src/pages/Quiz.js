import { useNavigate } from "react-router-dom"
import '../App.css'
import { useState } from "react";
export default function Quiz(){
    const [currId,setCurrId]=useState(1); //id of question on display
    const Navigate=useNavigate();
    function onNext(qid){
      if(qid!==quizData.length){
        setCurrId(qid+1);
      }
    }
    function onPrevious(qid){
      if(qid!==1){
        setCurrId(qid-1);
      }
    }

    return(
        <div className="quiz-screen-body">
            <QuestionTitle currId={currId}/>
            <Options currId={currId}/>
            <QuestionLinks qid={currId} onNext={onNext} onPrevious={onPrevious}/>   
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

function Options({currId}){
  const [selectedOption,setSelectedOption]=useState(0);
  const question=quizData.find((question)=>{
      return question.id===currId;
  })
  function changeSelectedOption(optionNumber){
    if(selectedOption!==optionNumber){
      setSelectedOption(optionNumber);
      console.log(optionNumber);
    }
  }
    return(
      <div className="option-container">
        {question.options.map((option,index)=>{
           return <Option optionText={option} optionNumber={index+1} changeSelectedOption={changeSelectedOption}/>
        })}
      </div>
        
    )
}

function Option({optionText,optionNumber,changeSelectedOption}){
  return(
    <div className={`option-${optionNumber}`} onClick={()=>changeSelectedOption(optionNumber)}>
        <h1>{optionText}</h1>
    </div>
  )
}

function QuestionLinks({qid,onNext,onPrevious}){
  return(
    <div className="link-buttons">
      <button className="btn" onClick={()=>onPrevious(qid)}>Previous</button>
      <button className="btn" onClick={()=>onNext(qid)}>Next</button>
    </div>
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
 import React from "react";


 import './index.css';


//fgfgfg
const questions = [
  {
    title: 'Какое из приводимых понятий соответствует “Psyche” у древних греков:',
    variants: [
      'Психика',
      'Суперэго',
      'Сознание',
    'Нервная система', 
     'Душа'],
      correct: 4,
  },
  {
    title:  ' Кто из греческих философов полагал, что разум зависит от природы огня в душе: ',

     variants: [ 
' Гален ',
' Сократ ',
'Гераклит ',
'Пифагор',
      ],

    correct: 2,
  },
  {
    title: ' Личность, которая по Гиппократу характеризуется как флегматик, по Айзенку характеризуется как:',
    variants: [
      ' Нормальный интроверт',
      ' Интроверт-невротик',
      ' Нормальный экстраверт',
      ' Экстраверт-невротик'
    ],
    correct: 3,
  },
];

function Result( {correct}  ) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Правильных {correct} ответа из {questions.length}</h2>
      
    <a  href = "/"> 

      <button>Попробовать снова</button>
    
</a>

    </div>
  );
}







function Game( {step,  question, onClickVariant} ) {
  
 const percentage = Math.round(step/questions.length*100); 

console.log(percentage);

  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress"></div>
      </div>
      <h1>  {question.title}  </h1>
      <ul>
        
        {

        question.variants.map( (text, index ) => (


         <li  onClick={ () =>   onClickVariant(index)}  key={text}> {text} </li>)  


        )


      };
         
      </ul>        
       </>
  );
}

function App() {


  const [step, setStep] = React.useState(0); 
  const [correct, setCorrect] = React.  useState(0);
  const question = questions [step];




  // создаём функцию, которая показывает, что произошёл клик на один 
  // из вариантов 


  const onClickVariant = (index) => {

  console.log (step, index);

  setStep (step+1); 

  if (index == question.correct)


{

setCorrect(correct+1); 

}




  };


  





 


   


  return (
    <div className="App">

   {

    step != questions.length ?

    (

     <Game  step={setStep}  question={question} onClickVariant={onClickVariant}   />

    ):(

       <Result  correct= {correct}   />
  
       )}

           </div>
  );
}

export default App;

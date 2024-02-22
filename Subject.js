import React, { useState } from 'react'
import Question from './Question'
import handleOnChange from './handleOnChange'


export function Java() {
  
  const javaQuestions=[
    {
      qnum:'1',
      ques:'Memory occupied by int variable',
      opA:'1 byte',
      opB:'8 byte',
      opC:'2 byte',
      opD:'4 byte',
      ans:'D'

    },
    {
      qnum:'2',
      ques:'Memory occupied by char variable',
      opA:'1 byte',
      opB:'8 byte',
      opC:'2 byte',
      opD:'4 byte',
      ans:'c'


    },
    {
      qnum:'3',
      ques:'Memory occupied by byte variable',
      opA:'1 byte',
      opB:'8 byte',
      opC:'2 byte',
      opD:'4 byte',
      ans:'a'

    },
    {
      qnum:'4',
      ques:'Memory occupied by short variable',
      opA:'1 byte',
      opB:'8 byte',
      opC:'2 byte',
      opD:'4 byte',
      ans:'c'
    }
  ]
  const [answers, setAnswers]=useState({})
  const handleSubmit=(event)=>{

  }


  return (
    <div>
    <h1>Java assement</h1>
    <form onSubmit={handleSubmit}>
      {
        javaQuestions.map(
          (question) =>(
            <Question 
            qnum={question.qnum}
            ques= {question.ques}
            opA={question.opA}
            opB={question.opB}
            opC={question.opC}
            opD={question.opD}
            ans={question.ans}
            onChange={handleOnChange}
            />
            
          )
        )
      }
      
    <br></br><br></br>
    <button type='submit'>Submit Question</button>
    </form>  
    </div>
  )
}

export function Sql() {
  
  const sqlQuestions=[
    {
  
          qnum:'1',
          ques:'how to select a table',
          opA:'select * from tablename',
          opB:'select * from rowname',
          opC:'select * from columnname',
          opD:'select * from table',
          ans:'a'
    },
    {
          qnum:'2',
          ques:'select one dql command',
          opA:'select',
          opB:'truncate',
          opC:'dalete',
          opD:'drop',
          ans:'a'

    },
    {
      qnum:'3',
      ques:'which sql command is used to add new rows of data to a table',
      opA:'add',
      opB:'insert',
      opC:'update',
      opD:'append',
      ans:'c'

    },
    {
      qnum:'4',
      ques:'which keyword is used to retrive data from a database',
      opA:'fetch',
      opB:'get',
      opC:'select',
      opD:'retrive',
      ans:'c'
    }
  ]

  return (
    <div>
    <h1>Sql assement</h1>
    <form>
      {
        sqlQuestions.map(
          (question) =>(
            <Question 
            qnum={question.qnum}
            ques= {question.ques}
            opA={question.opA}
            opB={question.opB}
            opC={question.opC}
            opD={question.opD}
            ans={question.ans}
            onChange={handleOnChange}
            />
            
          )
        )
      }
      
    <br></br><br></br>
    <button type='submit'>Submit Question</button>
    </form>  
    </div>
  )
}

export function Html() {
  
  const htmlQuestions=[
    {
  
                qnum:'1',
                ques:'html stands for',
                opA:'hyper mark language',
                opB:'markup language',
                opC:'hyper text markup language',
                opD:'hyper text language',
                ans:'c'
                
    },
    {
      
            
                qnum:'2',
                ques:'what is the starting and ending tag',
                opA:'<> </>',
                opB:'<> <>',
                opC:'</> <>',
                opD:'</> </>',
                ans:'a'


    },
    {
      qnum:'3',
      ques:'which html tag is used to define unordered function',
      opA:'<ul>',
      opB:'<ol>',
      opC:'<li>',
      opD:'<list>',
      ans:'a'

    },
    { qnum:'4',
    ques:'which tag is used to create a horizantal line in html',
    opA:'<line>',
    opB:'<hr>',
    opC:'<break>',
    opD:'<hline>',
    ans:'c'
  }
]

return (
  <div>
  <h1>Html assement</h1>
  <form>
    {
      htmlQuestions.map(
        (question) =>(
          <Question 
          qnum={question.qnum}
          ques= {question.ques}
          opA={question.opA}
          opB={question.opB}
          opC={question.opC}
          opD={question.opD}
          ans={question.ans}
          onChange={handleOnChange}
          />
          
        )
      )
    }
    
  <br></br><br></br>
  <button type='submit'>Submit Question</button>
  </form>  
  </div>
)
}

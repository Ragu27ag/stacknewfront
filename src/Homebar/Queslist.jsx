import React from 'react'
import Ques from './Ques'

const Queslist = ({questionlist}) => {
  
  return (
    <>
    
    {questionlist.map((ques) =>(

        <Ques ques = {ques} key={ques._id}/>
    ))}
    </>
  )
}

export default Queslist;
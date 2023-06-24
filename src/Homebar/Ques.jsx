import React from 'react'
import { Link } from 'react-router-dom';
import './Homemainbar.css'
import moment from 'moment';

const Ques = ({ques}) => {
  console.log(ques)
  return (
    <div className='dis-ans-container'>
        <div className='dis-votes-ans'>
            <p>{ques.upvote.length-ques.downvote.length}</p>
            <p>votes</p>
        </div>
        <div className='dis-votes-ans'>
            <p>{ques.answers.length}</p>
            <p>Answers</p>
        </div>
        <div className='dis-ques-details'>
           <Link style={{textDecoration:'none'}} to ={`/Questions/${ques._id}`} className='ques-title-link'>{ques.quesTitle}</Link>
        </div>
        <div>
        <p style={{fontSize:'12px',textAlign:'end'}}>
         asked {moment(ques.posteddate).fromNow()} 
         </p>
         <p style={{textAlign:'end',fontSize:'12px'}}>
         {ques.author}
         </p>
        </div>
        
    </div>

  )
}

export default Ques;
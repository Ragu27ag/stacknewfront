import moment from 'moment'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAnswer } from '../Actions/question';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';

const DisplayAnswer = ({ ques }) => {
  //console.log(ques)
  const User = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch()
  const { id } = useParams()
  const handleDelete = (answerId,noofanswer) =>{
    dispatch(deleteAnswer(id,answerId,noofanswer-1))
  }
  return (
    <div>
      {
        ques.answers.map((ans) => (
          
          <>
            <div className='display-ans' key={ans._id}>
              <p>{ans.answerBody}</p>
              <p>user : {ans.userAnswered}</p>
              <p>{moment(ans.answeredon).fromNow()}</p>
              {
                User?.result?._id === ans?.userId &&
                (<Button variant="text" onClick={() => handleDelete(ans._id,ques.noofanswer)}>Delete</Button>)
              }
            </div>

          </>

        ))
      }

    </div>

  )
}

export default DisplayAnswer
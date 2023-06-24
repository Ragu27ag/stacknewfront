import React, { useState } from 'react'
import './Askques.css'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { askquestion } from '../Actions/question';

const Askques = () => {
  const [quesTitle,setquesTitle] = useState('');
  const [quesBody,setquesBody] = useState('');
  const [quesTags,setquesTags] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=> (state.currentUserReducer))



  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(askquestion({quesTitle,quesBody,quesTags,author:user.result.name,userId:user?.result?._id},navigate))
      console.log({quesTitle,quesBody,quesTags})
  }

  const handleEnter = (e) => {
   if(e.key === 'Enter'){
    setquesBody(quesBody+'/n')
   }
    
}
  return (
    <div className='div-ask-ques'>
        <div className='div-ask-container'>
            <h1>Ask a Public Question</h1>
            <form onSubmit={handleSubmit}>
                <div className='div-form'>
                    <label htmlFor='title'>
            <h4>Tilte</h4>
            <input type='text' id='title' name='title' onChange={(e) => {setquesTitle(e.target.value)}}/>
                    </label>
                    <label htmlFor='body'>
                    <h4>Body</h4>
           <textarea rows="10" cols="30" id='body' name='body' onChange={(e) => {setquesBody(e.target.value)}} onKeyDown={handleEnter}></textarea>
                    </label>
                    <label htmlFor='tag'>
                    <h4>Tag</h4>
            <input type='text' id='tag' name='tag'onChange={(e) => {setquesTags(e.target.value.split(' '))}}/>
                    </label>
                </div>
                <input type='submit' className = 'btn' value={'Review Your Question'} />
                </form>
            
        </div>
      
      
        
        </div>
   
  )
}

export default Askques
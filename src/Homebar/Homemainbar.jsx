import React from 'react'
import './Homemainbar.css'
import {  useLocation , useNavigate} from 'react-router-dom'
import Queslist from './Queslist'
import { useSelector } from 'react-redux'

const Homemainbar = () => {
    var user  = useSelector((state) => state.currentUserReducer);
    const navigate = useNavigate();

    const check = () => {

        if(user === null){
            alert('login or sign up')
            navigate('/Auth')

        }
        else{
            navigate('/AskQues')
        }

    }

var questionlist = useSelector((state)=> state.questionReducer);

// console.log(questionlist);


    // var questionlist = [{ id: 1, votes: 1 , title:'tit'}, { id: 2, votes: 2 }]

    const loc = useLocation()
    return (
        <div className='mainbar'>
            <div className='mainbar-header'>
                {
                    loc.pathname === '/' ? <h1>Top Questions</h1> : <h1>'All Questions'</h1>
                }
                <button onClick={check} className='ask-btn'>Ask Question</button>

            </div>
            <div className='mainbar-body'>

                {

                    questionlist === null ? (<h1>Loading.....</h1>) : (
                        <>
                            <p>No of Questions : {questionlist.data.length}</p>
                            <Queslist questionlist={questionlist.data} />
                        </>)



                }
            </div>
        </div>

    )
}

export default Homemainbar
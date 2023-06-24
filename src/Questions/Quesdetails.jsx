import React, { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import './Questions.css'
import './DisplayAnswer'
import DisplayAnswer from './DisplayAnswer'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import { deleteQuestion, postAnswer, voteQuestion } from '../Actions/question'
import moment from 'moment'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import copy from 'copy-to-clipboard'



const Quesdetails = () => {
    const User = useSelector((state) => state.currentUserReducer);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams()
    // console.log(typeof id)
    const questionlist = useSelector((state)=> state.questionReducer);
    console.log(questionlist);
    const [answerr,setAnswer] = useState('')
    const loc = useLocation();
    const url = 'https://stacknewback.onrender.com'
    const handlePostAns =(e,answerLength) => {
        e.preventDefault();
        if (User === null) {
            alert("Login or Signup to answer a question");
            navigate("/Auth");
          } else {
            if (answerr === null) {
                console.log('laert');
              alert("Enter an answer before submitting");
            } else {
                console.log(answerr);
              dispatch(
                postAnswer({
                  id,
                  noOfAnswers: answerLength + 1,
                  answerBody: answerr,
                  userAnswered: User.result.name,
                  userId : User.result._id
                })
              );
              //setAnswer("");
            }
          }

    }
    const handleShare = () => {
            copy(url+loc.pathname)
            alert('Copied to clipboard : '+url+loc.pathname);
    }

    const handleDelete = () =>{
        dispatch(deleteQuestion(id,navigate))
    }

    const handleUpvote = () => {
        dispatch(voteQuestion(id,'upvote' , User.result._id))
    }
    const handleDownvote = () => {
        dispatch(voteQuestion(id,'downvote' , User.result._id))
    }
    // var questionlist = [{ id: '1', votes: 1, title: 'tit', questitle: 'java', upvote: 1, downvote: 2, questionTags: [], answer: [{ answerbody: 'answerr' }] }, { id: '2', votes: 2, title: 'tit2', questitle: 'js', upvote: 1 }]
    return (
        <div className='details-container'>
            {
                questionlist.data === null ? (<h1>Loading...</h1>) : (
                    <>
                        {
                            questionlist.data.filter((ques) => ques._id === id).map((ques) => (
                                <div key={ques._id}>
                                    <section className='question-details-container'>
                                        <h1>{ques.quesTitle}</h1>
                                        <div className='question-details-container-2'>
                                            <div className='question-votes'>
                                                <button onClick = {handleUpvote} style={{background:'none',border:'none'}}><KeyboardArrowUpIcon/></button>
                                                <p style={{textAlign:'start',paddingLeft:'10px'}}>{ques.upvote.length - ques.downvote.length}</p>
                                                <button onClick = {handleDownvote} style={{background:'none',border:'none'}}><KeyboardArrowDownIcon/></button>
                                            </div>
                                            <div style={{ width: '100%' }}>
                                           
                                                <h6 className='question-body'>{ques.quesBody}</h6>
                                            </div>
                                            <div className='qusetoin-action-user'>
                                                <div>
                                                <Button variant="text" onClick={handleShare}>Share</Button>
                                                {
                                                    User?.result?._id === ques?.userId &&
                                                    (<Button variant="text" onClick={handleDelete}>Delete</Button>)
                                                }
                                                
                                                </div>
                                                <div>
                                                    <p>asked  {moment(ques.posteddate).fromNow()}</p>
                                                </div>
                                                {/* <div>
                                                    <p>asked on {ques.userPosted}</p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </section>
                                    {
                                        ques.noofanswers !== 0 && (
                                            <section>
                                                <h3>{ques.answers.length} answers</h3>
                                                <DisplayAnswer key={ques._id} ques={ques}  />
                                            </section>
                                        )
                                    }
                                    <section className="post-ans-container">
                                        <h3>Your Answer</h3>
                                        <form
                                        onSubmit={(e) => {
                                          handlePostAns(e, ques.answers.length);
                                        }}
                                        >
                                            <textarea
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="10"
                                            //    value={answerr}
                                              onChange={(e) => setAnswer(e.target.value)}
                                            ></textarea>
                                            <br />
                                            <input
                                                type="submit"
                                                className="post-ans-btn"
                                                value="Post Your Answer"
                                            />
                                        </form>
                                        <p>
                                            Browse other Question tagged
                                            {ques.quesTags.map((tag) => (
                                                <Link to="/Tags" key={tag} className="ans-tags">
                                                    {/* {" "}
                        {tag}{" "} */}
                                                </Link>
                                            ))}{" "}
                                            or
                                            <Link
                                                to="/AskQuestion"
                                                style={{ textDecoration: "none", color: "#009dff" }}
                                            >
                                                {/* {" "} */}
                                                ask your own question.
                                            </Link>
                                        </p>
                                    </section>
                                </div>
                            ))
                        }
                    </>
                )
            }

        </div>
    )
}

export default Quesdetails
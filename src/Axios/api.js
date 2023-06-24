import axios from "axios";

const api = axios.create({baseURL:'http://localhost:5000'});

api.interceptors.request.use((req) =>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }

    return req
})


export const login = (authData ) => api.post('/user/login',authData);
export const signup = (authData ) => api.post('/user/signup',authData);
export const postQuestion = (quesData ) => api.post('/questions/Ask',quesData);
export const getAllQuestion = ( ) => api.get('/questions/get');
export const deleteQuestion = ( id) => api.delete(`/questions/delete/${id}`);




export const postAnswer = (id,noOfAnswers,answerBody,userAnswered,userId) => api.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId});
export const deleteAnswer = ( id,answerId,noOfAnswers) => api.patch(`/answer/delete/${id}`,{answerId,noOfAnswers});
export const voteQuestion = ( id,value,userId) => api.patch(`/questions/vote/${id}`,{value,userId});

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Auth from './Auth/Auth'
import Questions from './Questions/Questions'
import Askques from './AskQues/Askques'
import DisplayQuestions from './Questions/DisplayQuestions'
import Tags from './Tags/Tags'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path = '/' element = {<Home/>}/>
        <Route path = '/Auth' element = {<Auth/>}/>
        <Route path = '/Questions' element = {<Questions/>}/>
        <Route path = '/AskQues' element = {<Askques/>}/>
        <Route path = '/Questions/:id' element = {<DisplayQuestions/>}/>
        <Route path = '/Tags' element = {<Tags/>}/>
    </Routes>
  )
}

export default AllRoutes
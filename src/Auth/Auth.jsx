import React, { useState } from 'react'
import './Auth.css'
import {login,signup} from '../Actions/auth.js'
import { useDispatch } from 'react-redux';
import { useNavigate  } from 'react-router-dom';

const Auth = () => {

  const[name,setname] = useState('');
  const[email,setemail] = useState('');
  const[password,setpassword] = useState('');
  const dispatch = useDispatch();
  const navigate =useNavigate ();

  const [issignup, setissignup] = useState(false)
  const handleswitch = () => {
    setissignup(!issignup)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!email || !password){
      alert('Enter email and password to continue')
    }
    if(issignup ){
      if(!name){
        alert('Enter name  to continue')
      }
      dispatch(signup({name,email,password},navigate))
    }
    else{
      dispatch(login({name,email,password},navigate))
      
    }
    console.log({name,email,password})
    
  }

  return (
    <section className='auth-section'>
      <div className='auth-container'>
        
        <form onSubmit={handleSubmit}>
          {issignup && <label htmlFor='name'><h4>Display name</h4><input type='text' name='name' id='name' onChange={(e) =>{setname(e.target.value)} } /></label>}
          <label htmlFor='email'>
            <h4>Email</h4>
            <input type='email' name='email' id='email' onChange={(e) =>{setemail (e.target.value)}} />
          </label>
          <label htmlFor='pass'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h4>Password</h4>
              {!issignup && <p style={{ fontSize: '13px', color: '#007ac6' }}> forgot password</p>}
            </div>
            <input type='password' name='pass' id='pass' onChange={(e) =>{setpassword(e.target.value)}}/>
            {issignup && <p style={{ fontSize: '13px' }}>Passwords must contain at least eight <br /> characters, including at least 1 letter and 1 number.</p>}
            {issignup && <><p style={{ fontSize: '13px' }}>Opt-in to receive occasional product <br /> updates, user research invitations, company announcements, and digests.</p></>}
            <button className = 'auth-btn' type='submit'>{issignup ? 'signup' : 'login'}</button>
          </label>

        </form>
        <p>
          {issignup ? 'Already have an account?' : 'Dont have an account?'}
          <button style = {{marginLeft:'5px'}}className = 'auth-btn-1' onClick={handleswitch}>{issignup ? 'login' : 'signup'}</button>
        </p>

      </div>
    </section>

  )
}

export default Auth
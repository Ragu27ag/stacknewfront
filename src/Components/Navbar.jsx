import React, { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Screeshot from '../images/Screenshot.png'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setcurrentuser } from "../Actions/currentuser";
import jwtDecode from "jwt-decode";


const Navbar = () => {

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
    dispatch(setcurrentuser(null))
  }


  const dispatch = useDispatch();
  const navigate = useNavigate()
  var user = useSelector((state) => state.currentUserReducer);


  

  useEffect(() => {
    const token = user?.token;
    if(token){
      const decodedtoken = jwtDecode(token);
      if(decodedtoken.exp * 1000 < new Date().getTime()){
          // handleLogout()
      }
    }
    dispatch(setcurrentuser(JSON.parse(localStorage.getItem('Profile'))))
  }, [user?.token,dispatch])

  // console.log('adfasdfasd'+'user')

  


  const handleLogin = () => {
    
    navigate('/Auth')
   
  }


  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar >
        <Toolbar sx={{ boxShadow: '0px 1px 5px #00000033', borderTop: 'solid 3px #ef8236', backgroundColor: '#f8f9f9' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Link to='/'>
            <img src={Screeshot} alt='logo' type='png' style={{ heigth: '50', width: '100px', paddingRight: '15px' }} />
          </Link>
          <Link style={{ paddingRight: '30px', textDecoration: 'none' }} to='/'>About</Link>
          <Link style={{ paddingRight: '30px',textDecoration: 'none' }} to='/'>Products</Link>
          <Link style={{ paddingRight: '30px' ,textDecoration: 'none'}} to='/'>For Teams</Link>
          <form >
            <input style={{ paddingRight: '30px' }} type='text' placeholder="search..." />

          </form>
          <div style={{ position:'absolute',
            right:'20px',
            top:'10px'}}> 
            
            {user === null ? <Button color="primary" onClick={handleLogin}>LoGIN</Button>
            : <Button color="primary" onClick={handleLogout}>LOGOUT</Button>}</div>
         


        </Toolbar>
      </AppBar>
    </Box>
  )
}


export default Navbar
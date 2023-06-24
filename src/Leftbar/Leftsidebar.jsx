import React from 'react'
import './Leftsidebar.css'
import { NavLink } from 'react-router-dom'

const Leftsidebar = () => {
  return (
    <div className='left-side-bar'>
      <nav className='side-nav'>
      <NavLink to = '/' className='side-nav-link' >
        <p>Home</p>
      </NavLink>
      <div className='side-nav-div'>
        <div><p>PUBLIC</p></div>
        <NavLink to ='/' className='side-nav-link'  >
          <p style={{paddingLeft:'10px'}}>Questions</p>
        </NavLink>
        <NavLink to = '/Tags' style={{paddingLeft:'40px'}} className='side-nav-link' >
          <p>Tags</p>
        </NavLink>
        <NavLink to = '/Tags' style={{paddingLeft:'40px'}} className='side-nav-link' >
          <p>Users</p>
        </NavLink>
      </div>
      </nav>

    </div>
  )
}

export default Leftsidebar
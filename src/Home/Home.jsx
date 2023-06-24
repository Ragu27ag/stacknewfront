import React from 'react'
import '../App.css'
import Leftsidebar from '../Leftbar/Leftsidebar'
import Homemainbar from '../Homebar/Homemainbar'


const Home = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar/>
      <div className='home-container-2'>
      <Homemainbar/>
      {/* <Rightsidebar/> */}

     
      </div>
    </div>
  )
}

export default Home
import React from 'react'

import { useLocation } from 'react-router-dom'

const Questions = () => {

  
    const loc = useLocation()
  return (
    <div className='mainbar'>
        <div className='mainbar-header'>
            {
                loc.pathname === '/' ? <h1>Top Questions</h1> : <h1>'All Questions'</h1>
            }
   
        </div>
       
    </div>
  )
}

export default Questions
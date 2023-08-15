import React from 'react'
import '../components/Header.css'

const Header = () => {
     
   const handle  = (e) => {
     window.location.reload();
     e.preventDefault()
   }
 
  return (
    <div className='auth'>
       <h1 className='me' onClick={handle}>The PassCard</h1>
       
    </div>
   
       
  )
}

export default Header
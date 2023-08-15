import React from 'react'
import '../components/Body.css'

const Body = () => {
  return (
     <div className='box'>
       <div className="container">
    <div className="dropdown">
      <h2 className="year">2020</h2>
      <div className="dropdown-content">
        <a href='https://drive.google.com/file/d/1Xp0Cr201zmX3-DLzlMte6tZ6Q02zZRkw/view?usp=sharing' target='blank' rel='noopener noreferrer'><p>BEE</p></a>
        <p>PIC</p>
        <p>PHY</p>
        <p>ENG</p>
        <p>MATHS</p>
      </div>
    </div>
    <div className="dropdown">
      <h2 className="year">2021</h2>
      <div className="dropdown-content">
        <p>BEE</p>
        <p>PIC</p>
        <p>PHY</p>
        <p>ENG</p>
        <p>MATHS</p>
      </div>
    </div>
    <div className="dropdown">
      <h2 className="year">2022</h2>
      <div className="dropdown-content">
        <p>BEE</p>
        <p>PIC</p>
        <p>PHY</p>
        <p>ENG</p>
        <p>MATHS</p>
        <p>MATHS 2</p>
        <p>DSC</p>
        <p>PHY 2</p>
        <p>BE</p>
        <p>ES</p>
      </div>
    </div>
  </div>
     </div>
  )
}

export default Body
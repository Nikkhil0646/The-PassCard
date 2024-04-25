import React from 'react'
import '../components/Body.css'


const Body = () => {
  return (
     <div className='box'>
       <div className="container">
    <div className="dropdown">
      <h2 className="year">2020</h2>
      <div className="dropdown-content">
        <p>BEE</p>
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
        <a href='https://drive.google.com/file/d/17kMBYYJ4G8py8UiOXH1fmNeOH2Cqtqic/view?usp=sharing'target='blank' rel='noopener noreferrer'><p>BEE</p></a>
        <a href='https://drive.google.com/file/d/1sYt_Ty_ETjH6NL2NpdRob07drj-gG8y-/view?usp=sharing'target='blank' rel='noopener noreferrer'><p>BE</p></a>
        <a href='https://drive.google.com/file/d/10RysNDcNooPPYb-1h58dOYdJ5uQKqB5I/view?usp=sharing'target='blank' rel='noopener noreferrer'> <p>PHY-2</p></a>
        <a href='https://drive.google.com/file/d/19Z5gcQrd7LwIfYeyVnWt57aWNvZtLEI3/view?usp=sharing'target='blank' rel='noopener noreferrer'><p>PHY-1</p></a>
        <a href='https://drive.google.com/file/d/1sJIz0CSFgo5kxdlU70YHZTOrm94xoSSR/view?usp=sharing'target='blank' rel='noopener noreferrer'><p>PIC</p></a>
        <a href='https://drive.google.com/file/d/195s1hxlz_IQ7Iusb3muGjGjS8meyJVr3/view?usp=sharing'target='blank' rel='noopener noreferrer'><p>MATHS-1</p></a>
        <a href='https://drive.google.com/file/d/13TBtEbSEeJzISgpmy9MrBVKXroYEgqya/view?usp=sharing'target='blank' rel='noopener noreferrer'> <p>ENG</p></a>
      </div>
    </div>
  </div>
     </div>
  )
}

export default Body
import React from 'react'
import '../Links/Link.css'
import LanguageIcon from '@mui/icons-material/Language';
import AndroidIcon from '@mui/icons-material/Android';
const Link = () => {
  return (
    <div id="app">
         <div className='parent'>
    <div className='boxxx'>
      <h2><LanguageIcon /></h2>
      <ul className='club-list'>
        <li>Frontend</li>
        <li>Backend</li>
        <li>APIs</li>
        <li>UI-UX</li>
      </ul>
    </div>
    <div className='boxxx'>
     <h2><AndroidIcon /></h2> 
      <ul className='club-list'>
        <li>Kotlin</li>
        <li>Stdio</li>
        <li>APIs</li>
        <li>UI-UX</li>
      </ul>
    </div>
    <div className='boxxx'>
    <h2>Machine Learing</h2>
      <ul className='club-list'>
        <li>Kotlin</li>
        <li>Stdio</li>
        <li>APIs</li>
        <li>UI-UX</li>
      </ul>
    </div>
    </div>
    </div>
   
  )
}

export default Link


 
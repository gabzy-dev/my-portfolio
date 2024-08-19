
import React from 'react'
import "./Navbar.css"
import Toggle from "../Toggle/Toggle"

const Navbar = () => {
  return (
    <div className='n-wrapper'>
       
<div className='n-left'>
        <div className='n-name'>George
        <Toggle/>
        </div>
 </div> 
      
<div className='n-right'>
    <div className='n-list'>
        <ul style={{listStyleType: "none"}}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <button className='button n-button'> Contact us</button>
        </ul>
    </div>
    
</div>

    </div>
  )
}

export default Navbar

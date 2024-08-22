
import React from 'react'
import "./Navbar.css"
import Toggle from "../Toggle/Toggle"
import {Link} from "react-scroll"
import Services from '../Services/Services'
import Portfolio from '../Portfolio/Portfolio'
import Experience from '../Experience/Experience'

const Navbar = () => {
  const activeClass = "activeClass";
  return (
    <div className='n-wrapper' id='Navbar'>
       
<div className='n-left'>
        <div className='n-name'>George
        <Toggle/>
        </div>
 </div> 
      
<div className='n-right'>
    <div className='n-list'>
        <ul style={{listStyleType: "none"}}>
         <Link spy={true} to="Navbar" activeClass={activeClass}>
            <li>Home</li>
         </Link> 
           <Link spy={true} to={Services} >
           <li>Services</li>
           </Link> 
           <Link spy={true} to={Experience} >
           <li>Experience</li>
           </Link>
         <Link spy={true} to={Portfolio}>
         <li>Portfolio</li>
         </Link>   
            <button className='button n-button'> Contact us</button>
        </ul>
    </div>
    
</div>

    </div>
  )
}

export default Navbar

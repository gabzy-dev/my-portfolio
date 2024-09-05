
import React from 'react'
import "./Navbar.css"
import Toggle from "../Toggle/Toggle"
import {Link} from "react-scroll"

const Navbar = () => {
  const activeClass = "active";
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
           <Link spy={true} to="Services" >
           <li>Services</li>
           </Link> 
           <Link spy={true} to="Experience" >
           <li>Experience</li>
           </Link>
         <Link spy={true} to="Portfolio">
         <li>Portfolio</li>
         </Link>   
          <Link spy={true} to='Contact'>  <button className='button n-button'> Contact us</button> </Link> 
        </ul>
    </div>
    
</div>

    </div>
  )
}

export default Navbar

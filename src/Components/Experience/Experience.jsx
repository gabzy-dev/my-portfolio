import React from 'react'
import "./Experience.css"
import { themeContext } from '../Context'
import { useContext } from 'react'

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    
  return (
   <div className='experience'>
    <div className='achievement'>
        <div className='circle'>
           <span style={{color: darkMode? "orange" : " "}}>2+</span>
            <div className='content'>        
            <span>years</span>
            <span>Experience</span>
            </div>
            
        </div>
    </div>
    <div className='achievement'>
        <div className='circle'>
            <span style={{color: darkMode? "orange" : " "}}>+20</span>
            <div className='content'>
            <span>completed</span>
            <span>Projects</span>
            </div>
           
        </div>
    </div>
   </div>
  )
}

export default Experience

import React,{useState} from 'react'
import "./Toggle.css"
import Sun from "@iconscout/react-unicons/icons/uil-sun"
import Moon from "@iconscout/react-unicons/icons/uil-moon"
import { themeContext } from '../Context'
import { useContext } from 'react'

const Toggle = () => {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

   function handleClick (){
    theme.dispatch({type: "toggle"})
   }

  return (
    <div className='toggle'>
      <Moon/>
      <Sun/>
      <div className='t-button'
      style={darkMode ? {left: "2px"} : {right: "2px"}}
      onClick={handleClick}>
      
      </div>
    </div>
  )
}

export default Toggle

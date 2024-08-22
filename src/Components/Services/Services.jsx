import React from 'react';
import "./Services.css";
import heartEmoji from "../../img/heartemoji.png";
import Card from "../../Components/Card/Card"
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import resume from "../Services/EGABOR GEORGE latest.pdf"
import { themeContext } from '../Context';
import { useContext } from 'react';
import {motion} from "framer-motion";
const Services = () => {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
   const designType= {duration: 1,type: "spring"};
  return (
    <div className='services' id='Services'>

        {/* left side*/}
       <div className='awesome'>
        <span style={{color : darkMode ? "white" : ""}}>My Awesome</span> 
        <span>services</span>
        <span  style={{color : darkMode ? "white" : ""}}>
            developing and maintaining user interface.
            <br/>
            creating tools that improve site interaction
            <br/>
            implementing designs
        </span>

        <a href={resume} download>
        <button className='button s-button'>Download CV</button>
        </a>

   <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>

        </div>


       {/*right side*/}

        <div className='cards'>
           <motion.div 
           whileInView={{left:"0rem"}}
           initial={{left: "10rem"}}
           transition={designType}
           style={{left: "4rem"}}>
            <Card emoji = {heartEmoji}
            heading = {"Design"}
            details ={"Css,Bootstrap"}/>

           </motion.div>
           <motion.div 
           initial={{left:"-15rem"}}
           whileInView={{left:"-13rem"}}
           transition={{designType}}
           style={{top: '15rem',left: "-13rem"}}>
              <Card
              emoji ={glasses}
              heading={"Frontend Languages"}
              details={"Html,Javacript,React"}
              />
           </motion.div>

           <motion.div 
            whileInView={{left:"2rem"}}
            initial={{left: "10rem"}}
            transition={{designType}}
           style={{top: '19rem', left:"3rem" }}>
              <Card
              emoji ={humble}
              heading={"Backend Languages"}
              details={"Node,Express,MongoDb"}
              />
           </motion.div>

           <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services

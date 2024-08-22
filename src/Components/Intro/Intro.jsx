 import React from 'react'
 import "./Intro.css";
 import github from "../../img/github.png";
 import instagram from "../../img/instagram.png";
 import linkedIn from "../../img/linkedin.png"
 import boy from "../../img/boy.png"
 import vector1 from "../../img/Vector1.png"
 import vector2 from "../../img/Vector2.png"
 import thumbup from "../../img/thumbup.png"
 import crown from "../../img/crown.png"
 import glassesImoji from "../../img/glassesimoji.png"
 import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { useContext } from 'react';
import { themeContext } from '../Context';
import {motion} from "framer-motion";

 const Intro = () => {
   const designType= {duration: 4,type: "spring"};
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
   return (
     <div className='intro'>
  <div className='i-left'>
            <div className='i-name'>
                <span style={{color : darkMode ?  "white": " "}}>hi! i am </span>
              <span>George Egabor</span>
               <span>
                Frontend Developer with high level of experience 
                in web designing and development.
               </span>
            </div>
            <button className='button i-button'>Hire me</button>
            <div className='i-icon'>
               <a href='https://www.instagram.com/egabzy?igsh=Ymo4a3JrMnc2c2l2&utm_source=qr'> <img  src={instagram} alt='#'/> </a>  
                <a href='https://github.com/gabzy-dev'> <img src={github} alt='#'/> </a>
               <a href='https://www.linkedin.com/in/egabor-george-a39a47222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <img src={linkedIn} alt='#'/> </a> 
            </div>

        </div>

        <div className='i-right'> 
            <img src={vector1} alt='#'/>
            <img src={vector2} alt='#'/>
            <img src={boy} alt='#'/>
            <motion.img
            initial = {{left: "-50%"}}
            whileInView = {{left: "-24%"}}
            transition = {designType}
            src={glassesImoji} alt='#'/>

       <motion.div 
       initial={{left:"40rem"}}
       whileInView={{left:"28rem"}}
       transition={designType}
       style={{left:'25rem',zIndex: "-1"}}>
          <FloatingDiv image ={crown} text1 ="web" text2="developer"/>
       </motion.div>

       {/* <motion.div

        initial={{right: "-20rem"}}
        whileInView={{right:"0rem"}}
        transition={designType}
        style={{top:"50rem",left: "-5rem",position:"absolute"}}>
           <FloatingDiv image={thumbup} text1 = "Best Design" text2= "Award"/>
       </motion.div> */}

       <div className='blur' style={{background: "rgb(238 210 255)"}}>

       </div>
       <div className='blur' style={{
         background: "#c1f5ff",
         top: "17rem",
         width: "21rem",
         height: "11rem",
         left: "-9rem"
       }}>

       </div>
        </div>
     </div>
        
   )
 };
 
 export default Intro
 
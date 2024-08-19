import React from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef,useState } from 'react';
import { themeContext } from '../Context'
import { useContext } from 'react'
import {motion} from "framer-motionm"

const Contact = () => {
    const form = useRef();
    const [done,setDone] = useState(false);
    
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode
    
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rnlow8k', 'template_r6mhnhd', form.current,'eo2MjzBBhVQl_Y6Y2')
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },(error) => {
          console.log(error.text);
        });
      
  };

  return (
    <div className='contact-form'>
      <div className='w-left'>
        <div className='awesome'>
             <span style={{color: darkMode ? "white" :"" }}>Get in touch</span>
             <span>Contact me</span>
             <div className='blur s-blur1'
             style={{background: "#ABF1FF94"}}>
             </div>
        </div>
      </div>
      <div className='c-right'>
         <form ref={form} onSubmit={sendEmail}>
         <div className='blur c-blur1' style={{background: "var(--purple)"}}></div>
            <input type='text' name='user_name' className='user' placeholder='Name'/>
            <input type='email' name='user_email' className='user' placeholder='Email'/>
            <textarea name="message" className='user1' placeholder='messsage'></textarea>
            <input type="submit" value="send" className='button' />
            <span>{done && "Thank you for contacting me."}</span>
         </form>
      </div>
    </div>
  )
}

export default Contact

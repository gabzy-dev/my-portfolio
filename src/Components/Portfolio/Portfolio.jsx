import React from 'react';
import "./Portfolio.css";
import { Swiper, SwiperSlide, } from 'swiper/react';
import gymLogo from "../../img/gym.png";
import realEstateLogo from "../../img/my real estate.png";
import foodApp  from"../../img/food order app.png";
import 'swiper/css';
import { themeContext } from '../Context'
import { useContext } from 'react'

const Portfolio = () => {
  const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode
    
  return (
    <div className='portfolio' id='Portfolio'> 
      {/*heading*/}
      <span style={{color: darkMode ? "white" : " "}}>Recent Projects</span>
        <span>Portfolio</span>

        {/*slider*/}
      
      <Swiper spaceBetween={30}
      slidesPerView={2}
      grabCursor={true}
      className='swiper-container'>
            <SwiperSlide>
          <img src={gymLogo} alt='#' /> 
            </SwiperSlide>
            <SwiperSlide>
                <img src={realEstateLogo} alt='#'/>
            </SwiperSlide>
            <SwiperSlide>
                 <img src={foodApp} alt='#'/>
            </SwiperSlide>
        </Swiper>
<div className='portfolio-div'>
<ul className='portfolio-links'>
              <a href='https://food-order-app-q4kb.vercel.app/'> Gym app</a>
              <a href='https://realestsate-master.vercel.app/'>Real estate site</a>
              <a href='https://food-order-app-q4kb.vercel.app/'>Food order site</a>
          </ul>
</div>
         
       
    </div>
  )
}

export default Portfolio

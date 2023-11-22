
import { useState } from 'react';
import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { NavLink } from 'react-router-dom';
import mtn from '../Images/mtn.png';
import glo from '../Images/glo.png';
import smartass from '../Images/smartass.png';
import bet from '../Images/bet.png'

function About() {


    const [showWork, setShowWork] = useState(false);
    let loadWorks = () => {
      setShowWork(!showWork)
    }
  

  return (
    <div className='flex flex-col items-start justify-center p-0'>
      <Header />
      <div className='flex flex-col mt-3 lg:mt-0 items-center justify-center md:flex-row h-[200vh] w-[100vw] md:h-[100vh] md:gap-20 box-border md:p-20'>
        <div class=" bg-lightblue about-me mx-auto w-[100vw] h-[100vh] flex items-center justify-center md:w-[50%] md:h-[80vh] box-border">
          <h1 class="w-screen flex items-center justify-center text-4xl font-extrabold text-white  animate__animated animate__pulse animate__delay-5s animate__infinite md:w-[100%]"> About Me</h1>
        </div>
        <div class="flex-1 description mx-auto  md:p-0 flex flex-col items-center justify-center md-w-[50%] md:h-[100vh] box-border">
            <p class="px-10 mx-auto text-justify md:p-0 md-w-[100%] text-white"> I help businesses create stunning visuals and user-friendly websites that convert visitors into customers.
                I understand that in today's digital world, it's more important than ever for businesses to have a strong online presence. <break-word>
                I can help you create a website that is both visually appealing and user-friendly. I'll work with you to understand your business goals and target audience, and I'll create a website that is tailored to your specific needs.
                I also understand that your website is more than just a digital brochure. It's a valuable marketing tool that can help you generate leads, increase sales, and grow your business. That's why I focus on creating websites that are conversion-optimized.  I'll work with you to identify your conversion goals and to develop strategies to achieve them.
                If you're ready to take your business to the next level, contact me today for a free consultation. I'll help you create a digital presence that will help you achieve your goals.
                </break-word>  
            </p>
            <div class="view mx-auto flex flex-col mt-10 items-center justify-center gap-5 lg:flex-row">
                <NavLink href="#" onClick={loadWorks} class=" btn bg-lightblue w-48 flex  items-center justify-center  h-10 border border-orange-600  outline-0 rounded-lg  font-bold font-sans text-orange-600 shadow-lg hover:bg-orange-600 text-white hover:text-lightblue hover:border-2 hover:border-skyblue">View My Works</NavLink>
                <NavLink href="#" class=" btn bg-lightblue w-48 flex  items-center justify-center  h-10 border border-orange-600 border-solid  outline-0 rounded-lg  font-bold font-sans text-orange-600 shadow-lg hover:bg-orange-600 text-white hover:text-lightblue hover:border-2 hover:border-skyblue">View My CV</NavLink>
            </div>

            { showWork &&
            <div className='carou absolute w-[100vw] h-[100vh] ml-0  place-self-c'>
              <div className="carousel w-[100vw]">
                <div id="item1" className="carousel-item w-[100vw]">
                  <img src={mtn} alt="mtn project" className="w-[100vw]" />
                </div> 
                <div id="item2" className="carousel-item w-100vw">
                  <img src={glo} alt="glo project" className="w-100vw" />
                </div> 
                <div id="item3" className="carousel-item w-[100vw]">
                  <img src={smartass} alt="smartass project project" className="w-[100vw]" />
                </div> 
                <div id="item4" className="carousel-item w-100vw">
                  <img src={bet} alt="bet-project" className="w-100vw" />
                </div>
              </div> 
              <div className="flex flex-col justify-center absolute top-48 right-10 py-2 gap-2 ">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item4" onClick={()=>setShowWork(false)} className="btn btn-xs hover:bg-orange">x</a>
              </div>
            </div>

            }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
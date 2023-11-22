import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import picture from '../Images/profile-pix.png'
import one from '../Images/one.jpg'
import three from '../Images/three (2).jpg'
import four from '../Images/four.jpg'
import five from '../Images/012.jpg'

function Home() {

  const [showImg, setShowImg] = useState(false);
  let loadPictures = () => {
    setShowImg(!showImg)
  }

  return (
    <>
      <Header />
      <div className=' bg-white flex flex-col mt-3 md:mt-0 items-center justify-center'>
        <section className='flex flex-col items-center justify-center min-h-[100vh] lg:flex-row container mx-auto px-10'>
          <div className='h-screen flex flex-col gap-10 items-center justify-center mx-auto'>
            <h1 class="text-5xl text-darkblue font text-center md:text-lg lg:text-5xl">Hi, I'm Prince</h1>
            <h5 class="project text-center text-4xl font-extrabold text-darkblue ">Frontend Web Developer and Graphic Designer</h5>
            <button onClick={loadPictures} className='btn px-20 bg-orange outline-none border-none font-bold text-2xl text-white'>View Gallery </button>
          </div>
          <div  className=" w-screen flex flex-col items-center  justify-center relative ">
            <div className='spin bg-skyblue w-80 h-80 rounded-full absolute top-10'></div>
            <img src={picture} alt="dp" className='z-20'/>
          </div>
        </section>

        { showImg && 
          <div className='fixed  w-screen overflow-scroll h-screen flex flex-col justify-center items-center bg-black text-white top-0 z-20'>
            <div className='mx-auto h-screen w-screen flex flex-wrap md:w-full md:h-[80vh] relative'>
              <div onClick={() => setShowImg(false)} className='flex flex-col md:flex-row justify-center items-center absolute top-1 right-3 w-10 h-10 rounded-full bg-darkblue text-white font-bold cursor-pointer hover:bg-orange '> X </div>
              <div className='flex justify-center items-center w-screen h-screen md:flex-1 md:h-[80vh]'> <img src={one} alt="pix-1" className='w-screen h-[100%]' /> </div>
              <div className='flex justify-center items-center w-screen h-screen md:h-[80vh] md:flex-1'> <img src={three} alt="pix-3" className='h-[100%] w-screen' /> </div>
              <div className='flex justify-center items-center w-screen h-screen md:h-[80vh] md:flex-1'> <img src={four} alt="pix-4" className='h-[100%] w-screen' /> </div>
              <div className='flex justify-center items-center w-screen h-screen md:h-[80vh] md:flex-1  bg-orange'> <img src={five} alt="pix-5" className='h-[100%] w-screen' /> </div>
            </div> 
            <div className='flex justify-center items-center h-[20vh]'>Prince Akachukwu David</div>
          </div>
        }
      </div>
      <Footer />
    </>
  )
}

export default Home
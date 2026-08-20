import React from 'react'
import BlurText from "./BlurText";

const HeroSection = () => {
  return (
    <section className='flex h-150 w-full  border'>
        <div className=' flex flex-col w-1/2  p-10 mt-25 gap-5 relative left-15'>
           <BlurText
         text="Build. Stand Out. Get Hired."
        delay={200}
        animateBy="words"
       direction="top"
       className="text-7xl elsie-black"
   />
           <BlurText
         text="Create a professional, standout resume in minutes with easy-to-use templates designed to showcase your skills, experience, and achievements."
        delay={200}
        animateBy="words"
       direction="top"
       className="text-[18px] font-serif  max-w-xl text-black/60 "
   />
 <div className='flex gap-7'>
   <button className='bg-black text-white p-4 w-50 rounded-xl'>Create My Resume </button> 
   <button className='border-2 p-4 w-50 rounded-2xl'>View Template</button>  
   </div>
        </div>

        <div className='w-1/2 flex justify-center'>
          <img src="src/assets/resume.png" alt="" className='rotate-8 w-100 h-auto shadow-2xl scale-85 relative float'/>
          <img src="src/assets/resume2.png" alt="" className='-rotate-8 w-100 h-auto shadow-2xl scale-85 absolute left-200 float'/>
        </div>
 
      </section>  
  )
}

export default HeroSection
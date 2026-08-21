import React from 'react'
import BlurText from "./BlurText";
import { motion } from 'framer-motion'
import resume3 from '../assets/resume3.png'
import resume2 from '../assets/resume2.png'
import resume4 from '../assets/resume4.png'
import Beams from './Beams';

const HeroSection = () => {
 
  return (
    <section className='flex h-150 w-full min-h-screen  bg-black'>



<div style={{ width: '100%', height: '600px', position: 'absolute' }}>
  <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
</div>




        <div className=' flex flex-col w-1/2  p-10 mt-25 gap-5 relative left-15'>
           <BlurText
         text="Build. Stand Out. Get Hired."
        delay={200}
        animateBy="words"
       direction="top"
       className="text-7xl elsie-black text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]"
   />
           <BlurText
         text="Build a professional resume that puts your skills front and center. "
        delay={200}
        animateBy="words"
       direction="top"
       className="text-[18px]  font-serif max-w-xl text-white/70 "
   />
 <div className='flex gap-7 mt-3'>
   <button className='bg-black text-white border rounded-2xl p-4'>Create My Resume </button> 
   <button className='border p-3.5 w-50 rounded-2xl bg-white hover:bg-white/90'>View Template</button>  
   </div>
  <div className='flex text-lg mt-3 text-blue-400 elsie-regular gap-3'>
   <p>Free to start </p>
   <p>Professional resumes </p>
   <p>Made simple </p>
   </div>
        </div>

       <div className="relative left-160 h-full scale-85">

      {/* Resume 2 - back */}
      <motion.div
        className="absolute right-10 top-10 w-[420px]"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <motion.img
          src={resume4}
          alt="Resume template"
          className="w-full rotate-6 border-yellow-400/20
       shadow-[0_25px_60px_rgba(0,0,0,0.7)]
       drop-shadow-[0_0_30px_rgba(250,204,21,0.08)]
       transition-all duration-500 ease-out
       hover:-translate-y-2
       hover:border-white/90
       hover:drop-shadow-[0_0_35px_rgba(250,204,21,0.15)]"
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Resume 1 - front */}
      <motion.div
        className="absolute right-40 top-0 w-[420px]"
        initial={{ y: 500, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          ease: "easeOut",
        }}
      >
        <motion.img
          src={resume3}
          alt="Resume template"
          className="w-full -rotate-6 border border-white/20
       shadow-[0_25px_60px_rgba(0,0,0,0.7)]
       drop-shadow-[0_0_30px_rgba(250,204,21,0.08)]
       transition-all duration-500 ease-out
       hover:-translate-y-2
       hover:border-white/50
       hover:drop-shadow-[0_0_35px_rgba(250,204,21,0.15)]"
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

    </div>
 
      </section>  
  )
}

export default HeroSection





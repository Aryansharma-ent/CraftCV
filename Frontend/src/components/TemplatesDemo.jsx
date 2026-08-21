import React from 'react'
import CircularGallery from './CircularGallery'
import BlurText from "./BlurText";
const TemplatesDemo = () => {
  return (
    <>
    <div className='pt-30 bg-amber-100 min-h-screen'>
  <div className="flex flex-col justify-center items-center elsie-black text-5xl">
 <p>
<BlurText
         text="Explore Templates Made for You "
        delay={200}
        animateBy="words"
       direction="top"
       className="text-6xl elsie-black text-black drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]"
   />


  </p>
  <span className="text-lg mt-4 text-black/60">
    {/* */}
      <BlurText
         text="Find the right design to showcase your skills and experience. "
        delay={200}
        animateBy="words"
       direction="top"
       className="text-lg elsie-black text-black/60 drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]"
   />
  </span>
</div>
   <div style={{ height: '700px', position: 'relative' }} className=' ' >
  <CircularGallery
    bend={1}
    textColor="#000000"
    borderRadius={0.05}
    scrollEase={0.05}
    // Optionally load a custom font for the labels.
    // Accepts a stylesheet URL (e.g. Google Fonts) or a direct font file.
    fontUrl=""
    font="bold 30px Orbitron"
    scrollSpeed={2}
/>
</div>
</div>
</>
  )
}

export default TemplatesDemo
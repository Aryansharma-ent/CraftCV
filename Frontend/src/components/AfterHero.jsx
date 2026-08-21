import LogoLoop from './LogoLoop';
import {   FaUserDoctor,
  FaUserTie,
  FaUserGraduate,
  FaCode,
  FaFlask,
  FaChalkboardUser,
  FaPalette,
  FaGavel,
  FaBriefcase,
  FaChartLine,
  FaCamera,
  FaPenNib,
  FaStethoscope,
  FaLaptopCode } from 'react-icons/fa6';
  import BlurText from './BlurText';

const techLogos = [
  { node: <FaUserDoctor />, title: "React", href: "https://react.dev" },
  { node: <FaUserTie/>, title: "Next.js", href: "https://nextjs.org" },
  { node: <FaCode />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <FaFlask />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaBriefcase />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaUserGraduate />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaChalkboardUser />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaPalette />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaGavel />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaChartLine />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaCamera />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaPenNib />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <FaLaptopCode />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];



function AfterHero() {
  return (
    <>
    <div className='text-white bg-black pt-15 min-h-screen'>
    <div className='flex flex-col justify-center items-center elsie-black mb-20 gap-4 '>
      {/* <p className='text-6xl'>Create a Resume For Any Career </p> */}
       <BlurText
         text="Create a Resume For Any Career"
        delay={200}
        animateBy="words"
       direction="top"
       className="text-6xl elsie-black text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]"
   />
       <BlurText
         text="Professional templates designed to fit your skills, experience, and ambitions."
        delay={200}
        animateBy="words"
       direction="top"
       className="text-lg elsie-black text-white"
   />
      {/* <p className='text-lg'>Professional templates designed to fit your skills, experience, and ambitions. </p> */}
    </div>
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} className='mt-40'>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={110}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Technology partners"
      />

    </div>

    </div>
    </>
  );
}

export default AfterHero
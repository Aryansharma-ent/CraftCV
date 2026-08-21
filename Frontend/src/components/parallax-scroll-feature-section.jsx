import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from "lucide-react"

export const Component = () => {
    const sections = [
        {
            id: 1,
            title: "Pick a Template That Fits.",
            description: "Choose from a curated collection of professionally designed resume templates — crafted to look sharp in the eyes of hiring managers and pass ATS filters without compromise.",
            imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
            reverse: false
        },
        {
            id: 2,
            title: "Built for Every Career Path.",
            description: "Whether you're an engineer, designer, product manager, or recent graduate — CraftCV gives you layouts and sections tailored to your field. No generic, one-size-fits-all approach.",
            imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
            reverse: true
        },
        {
            id: 3,
            title: "Export and Apply, Instantly.",
            description: "When you're ready, download your resume as a clean, print-ready PDF. Share it directly with recruiters or attach it to any job application — formatted perfectly every time.",
            imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80',
            reverse: false
        }
    ]

    const sectionRefs = sections.map(() => useRef(null));

    const scrollYProgress = sections.map((_, index) => {
        return useScroll({
            target: sectionRefs[index],
            offset: ["start end", "center start"]
        }).scrollYProgress;
    });

    const opacityContents = scrollYProgress.map(progress =>
        useTransform(progress, [0, 0.7], [0, 1]));

    const clipProgresses = scrollYProgress.map(progress =>
        useTransform(progress, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]));

    const translateContents = scrollYProgress.map(progress =>
        useTransform(progress, [0, 1], [-50, 0]));

    return (
        <div className="bg-black">
            <div className='min-h-screen text-white w-full bg-black flex flex-col items-center justify-center'>
                <h1 className='text-8xl max-w-4xl text-center elsie-black'>Everything You Need to Land the Job.</h1>
                <p className='mt-6 flex items-center gap-1.5 text-sm text-white/50'>Scroll to explore &nbsp;<ArrowDown size={14} /></p>
            </div>

            <div className="flex flex-col md:px-0 px-10">
                {sections.map((section, index) => (
                    <div
                        key={section.id}
                        ref={sectionRefs[index]}
                        className={`h-screen flex items-center justify-center md:gap-40 gap-20 ${section.reverse ? 'flex-row-reverse' : ''}`}>
                        <motion.div style={{ y: translateContents[index] }}>
                            <div className="text-6xl max-w-sm elsie-black text-white">{section.title}</div>
                            <motion.p
                                style={{ y: translateContents[index] }}
                                className="text-white/70 max-w-sm mt-10">
                                {section.description}
                            </motion.p>
                        </motion.div>
                        <motion.div
                            style={{
                                opacity: opacityContents[index],
                                clipPath: clipProgresses[index],
                            }}
                            className="relative">
                            <img
                                src={section.imageUrl}
                                className="size-80 object-cover"
                                alt={`Section ${section.id}`} />
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className='min-h-screen w-full bg-black flex flex-col items-center justify-center gap-6 text-white'>
                <h1 className='text-8xl elsie-black text-center max-w-3xl'>Your Next Role Starts Here.</h1>
                <p className='text-white/50 text-lg max-w-xl text-center'>Join thousands of professionals who built their resume with CraftCV and moved forward in their careers.</p>
                <button className='mt-4 border border-white/30 text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition-all duration-300'>Build My Resume — It's Free</button>
            </div>
        </div>
    );
};

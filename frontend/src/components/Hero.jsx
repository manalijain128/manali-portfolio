import React ,{useState,useEffect}from 'react'
import { motion ,AnimatePresence} from 'framer-motion'
import { FaGithub, FaLinkedinIn, FaCode, FaReact, FaJsSquare, FaFigma } from "react-icons/fa"
import { SiTailwindcss, SiTypescript } from "react-icons/si"
// import DotsOverlay from './DotsOverlay' // Ensure this is imported correctly

const Hero = () => {
    // Animation Variants
    const titles = ["Responsive Interfaces", "Interactive Experiences", "Modern Architectures"];
   const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <section id="home" className="relative overflow-hidden mt-[3rem] lg:mt-0 bg-[#050505] min-h-screen flex items-center">
            
            {/* --- NEW: UNIQUE ROTATING BACKGROUND --- */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Primary Rotating Gradient */}
                <motion.div 
                    animate={{ 
                        rotate: [0, 360],
                    }}
                    transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="absolute -top-[20%] -left-[10%] w-[140%] h-[140%] opacity-20"
                    style={{
                        background: "conic-gradient(from 0deg, transparent, #2563eb, transparent, #0891b2, transparent)"
                    }}
                />
                
                {/* Secondary Counter-Rotating Blur */}
                <motion.div 
                    animate={{ 
                        rotate: [360, 0],
                    }}
                    transition={{ 
                        duration: 30, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full"
                />

                {/* Optional: Your DotsOverlay could go here */}
                {/* <div className="absolute inset-0 opacity-30"><DotsOverlay /></div> */}
            </div>

          <motion.div 
                className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24 w-full relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* --- LEFT CONTENT (Col Span 7) --- */}
                    <div className="lg:col-span-7 text-center lg:text-left order-1">
                        <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                            <span className="h-[1px] w-8 bg-blue-500 hidden lg:block"></span>
                            <span className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase">Frontend Architect</span>
                        </motion.div>

                        <motion.h1 
                            variants={itemVariants}
                            className="text-4xl sm:text-6xl lg:text-[5.5rem]  leading-[1.05] text-white tracking-tighter"
                        >
                            Building <br />
                            <div className="h-[60px] sm:h-[80px] lg:h-[110px]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={titles[index]}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 inline-block"
                                    >
                                        {titles[index]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="mt-[3rem] lg:mt-[7rem] text-gray-400 max-w-xl mx-auto lg:mx-0 text-lg font-semibold leading-relaxed">
                            I'm <strong className="text-white font-bold">Manali Jain</strong>. I specialize in turning complex designs into 
                            <span className="text-blue-400"> high-performance React applications </span> 
                            with a focus on user-centric motion and accessibility.
                        </motion.p>

                        {/* --- TECH STACK PILLS --- */}
                        <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8 opacity-60">
                             <div className="flex items-center gap-2 text-sm font-mono text-gray-300"><FaReact className="text-cyan-400"/> React</div>
                             <div className="flex items-center gap-2 text-sm font-mono text-gray-300"><SiTypescript className="text-blue-500"/> TS</div>
                             <div className="flex items-center gap-2 text-sm font-mono text-gray-300"><SiTailwindcss className="text-cyan-400"/> Tailwind</div>
                             <div className="flex items-center gap-2 text-sm font-mono text-gray-300"><FaFigma className="text-pink-400"/> Figma</div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <motion.a 
                            href="#contact"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative w-full sm:w-auto overflow-hidden bg-blue-600 text-white px-10 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                            >
                                <span className="relative z-10">Get In Touch</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </motion.a>
                            
                            <div className="flex gap-4">
                                {[ {Icon: FaGithub, link: 'https://github.com/manalijain128'}, {Icon: FaLinkedinIn, link: 'https://www.linkedin.com/in/manali-jain-02bba6238/'} ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        whileHover={{ y: -3, color: "#60a5fa" }}
                                        className="text-gray-500 transition-colors"
                                        href={social.link}
                                    >
                                        <social.Icon size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* --- RIGHT CONTENT: THE REACT HOOK WINDOW (Col Span 5) --- */}
                    <motion.div 
                        variants={itemVariants}
                        className="lg:col-span-5 flex justify-center lg:justify-end order-2"
                    >
                        <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden"
                        >
                            <div className="flex items-center justify-between px-5 py-4 bg-white/5 border-b border-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-red-500/50 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500/50 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500/50 rounded-full"></div>
                                </div>
                                <span className="text-[10px] font-mono text-gray-500 tracking-widest">useProfile.jsx</span>
                            </div>

                            <div className="p-8 text-[13px] font-mono leading-relaxed">
                                <p><span className="text-purple-400 text-xs tracking-tighter italic">// Custom hook for Dev data</span></p>
                                <p><span className="text-pink-500">export const</span> <span className="text-blue-300">useDeveloper</span> = () =&gt; {'{'}</p>
                                <p className="ml-4"><span className="text-pink-500">const</span> [skills] = <span className="text-yellow-200">useState</span>([</p>
                                <p className="ml-8"><span className="text-emerald-400">'UI/UX'</span>, <span className="text-emerald-400">'Animation'</span>,</p>
                                <p className="ml-8"><span className="text-emerald-400">'Performance'</span></p>
                                <p className="ml-4">]);</p>
                                <p className="mt-2 ml-4"><span className="text-pink-500">return</span> {'{'} name: <span className="text-emerald-400">'Manali'</span>, skills {'}'};</p>
                                <p>{'}'};</p>
                                
                                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-600">
                                    <span>Lines: 12</span>
                                    <span className="text-blue-500/50">UTF-8</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}

export default Hero
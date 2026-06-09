import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaDownload, FaCode } from "react-icons/fa";
import image from "../assets/image.jpg";

const About = () => {
    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="about" className="relative text-white px-6 xl:px-0 pt-16 md:pt-32 pb-20 overflow-hidden">
            
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="text-center mb-16"
                >
                    <h3 className="text-blue-500 text-sm font-black uppercase tracking-[0.4em] mb-4">
                        Insight
                    </h3>
                    <h2 className="text-2xl lg:text-6xl font-black text-white leading-tight">
                        Designing with Purpose,<br />
                        Building with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Precision</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* --- LEFT SIDE: BIO & CARDS --- */}
                    <div className="flex-1 order-2 lg:order-1">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="relative group bg-white/5 border border-white/10 p-8 rounded-3xl mb-8 backdrop-blur-md overflow-hidden"
                        >
                            {/* Accent Glow */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all" />
                            
                            <div className="flex gap-6">
                                <div className="hidden sm:flex w-12 h-12 rounded-2xl bg-blue-500/20 items-center justify-center text-blue-400 shrink-0">
                                    <FaCode size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                                        The Mission <span className="text-blue-500 text-xs font-mono tracking-tighter">[01]</span>
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                                       I am passionate about creating user-friendly, responsive, and
visually appealing websites that provide exceptional user
experiences. I aim is to become a highly skilled and innovative web
developer, specializing in front-end and back-end development
and continuously expand my knowledge of web technologies and
programming languages.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats/Info Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { 
                                    icon: <FaGraduationCap />, 
                                    title: "Education", 
                                    desc: "Govt. Mahila Engineering College, Ajmer", 
                                    date: "2019 - 2023" 
                                },
                                { 
                                    icon: <FaBriefcase />, 
                                    title: "Experience", 
                                    desc: "Frontend Developer (MERN)", 
                                    date: "Oct 2024 - Present" 
                                }
                            ].map((card, i) => (
                                <motion.div 
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: { opacity: 1, x: 0, transition: { delay: i * 0.2 } }
                                    }}
                                    className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors backdrop-blur-sm"
                                >
                                    <div className="text-blue-500 mb-4 text-2xl">{card.icon}</div>
                                    <h4 className="font-bold text-white mb-1">{card.title}</h4>
                                    <p className="text-sm text-gray-400 mb-2 leading-snug">{card.desc}</p>
                                    <span className="text-[15px] font-mono text-blue-400/60 uppercase tracking-widest font-bold">
                                        {card.date}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* --- RIGHT SIDE: PROFILE CARD --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/3 flex justify-center order-1 lg:order-2"
                    >
                        <div className="relative group">
                            {/* Rotating Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                            
                            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 text-center w-80 shadow-2xl overflow-hidden">
                                <div className="relative inline-block mb-6">
                                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse" />
                                    <img
                                        src={image}
                                        alt="profile"
                                        className="relative w-40 h-40 rounded-3xl mx-auto object-cover border-b-4 border-r-4 border-blue-500  transition-all duration-500"
                                    />
                                </div>
                                
                                <h3 className="text-2xl font-black mb-1">Manali Jain</h3>
                                <p className="text-sm font-mono text-blue-400 mb-6 uppercase tracking-wider">
                                    Frontend Developer
                                </p>

                                <motion.button 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-blue-900/20"
                                >
                                    <FaDownload size={14} /> Resume
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
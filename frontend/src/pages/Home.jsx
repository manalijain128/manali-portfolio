import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="relative bg-[#050505] text-gray-100 min-h-screen overflow-x-hidden">
      
      {/* --- GLOBAL FIXED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Main Rotating Nebula */}
        <motion.div 
            animate={{ 
                rotate: [0, 360],
            }}
            transition={{ 
                duration: 50, // Slower for the whole page to avoid distraction
                repeat: Infinity, 
                ease: "linear" 
            }}
            className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] opacity-[0.15]"
            style={{
                background: "conic-gradient(from 0deg, transparent, #1e40af, transparent, #0891b2, transparent, #1e40af)"
            }}
        />

        {/* Static Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#050505]" />
        
        {/* Floating Light Blobs (Parallax feel) */}
        <motion.div 
            animate={{ 
                y: [0, 100, 0],
                x: [0, 50, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"
        />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="relative z-10">
        <Navbar />
        
        {/* We wrap Hero in a min-h-screen to ensure it takes the first fold */}
        <Hero />
        
        {/* Add vertical spacing and reveal animations to sections */}
        <main className="space-y-20 pb-20">
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  )
}

export default Home
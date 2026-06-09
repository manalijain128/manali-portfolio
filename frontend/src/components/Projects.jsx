import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"

const projects = [
  {
    image:image1,
    title: 'Secure Authentication & Authorization System',
    desc: 'Full-stack authentication system featuring secure registration, JWT-based protected routes, role-based access control (RBAC), and Two-Factor Authentication (2FA) with OTP verification.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT', 'bcrypt']
  },
  {
    image:image2,
    title: 'AI-Powered Job Portal',
    desc: 'Scalable microservices-based platform featuring recruiter dashboards, job workflows, event-driven communication, and AI tools like a Resume Analyzer and Career Guidance.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'TypeScript']
  },
  {
    image:image3,
    title: 'Banking System',
    desc: 'Banking System Using Html,Css,Js',
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  
]

const ProjectCard = ({ p }) => (
  <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-black/50 to-black/40 border border-gray-800 p-6 shadow-xl h-full mx-2 md:mx-0 flex flex-col justify-between">
    <div>
      <div className="h-44 rounded-md mb-4" >
        <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
      </div>

      <h4 className="text-xl font-bold text-white">{p.title}</h4>
      <p className="text-gray-400 mt-2 text-sm leading-relaxed">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map(t => <span key={t} className="text-xs bg-gray-800/60 text-gray-200 px-2 py-1 rounded">{t}</span>)}
      </div>
    </div>
   
  </div>
);

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // react-slick may export a default under a `.default` property depending on bundler interop.
  // Normalize to a callable component and provide a safe fallback if it's not available.
  const Slick = Slider && Slider.default ? Slider.default : Slider;

  return (
    <section id="projects" className="py-0 xl:py-14 ">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-center text-sm text-blue-400 uppercase tracking-wider">Portfolio</h3>
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-white my-6">Featured <span className="text-blue-500">Creations</span></h2>

        {/* Mobile View Slider */}
        <div className="mt-6 block md:hidden pb-10">
          {Slick && (typeof Slick === 'function' || typeof Slick === 'object') ? (
            <Slick {...sliderSettings}>
              {projects.map((p) => (
                <ProjectCard key={p.title} p={p} />
              ))}
            </Slick>
          ) : (
            // Fallback: render cards stacked vertically if Slick isn't a valid component
            <div className="flex flex-col gap-4">
              {projects.map((p) => (
                <ProjectCard key={p.title} p={p} />
              ))}
            </div>
          )}
        </div>

        {/* Desktop View Grid */}
        <div className="mt-10 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
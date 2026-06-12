import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"

const projects = [
  {
    image: image1,
    title: 'Secure Authentication & Authorization System',
    desc: 'Full-stack authentication system featuring secure registration, JWT-based protected routes, role-based access control (RBAC), and Two-Factor Authentication (2FA) with OTP verification.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT', 'bcrypt'],
    github: "https://github.com/manalijain128/mernstackauthentication-withredis",
    demo: "https://drive.google.com/file/d/1VdGAkcR4SeNgpGYs6MvyXeGsxTHzVvTC/view?usp=drivesdk",
  },
  {
    image: image2,
    title: 'AI-Powered Job Portal',
    desc: 'Scalable microservices-based platform featuring recruiter dashboards, job workflows, event-driven communication, and AI tools like a Resume Analyzer and Career Guidance.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'Kafka', 'Docker', 'TypeScript'],
    github: "https://github.com/manalijain128/JobPortal",
    demo: "https://drive.google.com/file/d/1wYwFLjeW8qO0EVw36OvUaOB4bXCQ82v1/view?usp=drivesdk",
  },
  {
    image: image3,
    title: 'Banking System',
    desc: 'Banking System Using Html,Css,Js',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: "https://github.com/manalijain128/Banking-System",
    demo: "https://drive.google.com/file/d/1J6kRQxeyZvYlfpp-_R7jopcPFItRJkV8/view?usp=drivesdk",
  },
  {
    image: image4,
    title: 'Stationary Website',
    desc: 'Statinary Website Using Html, Css, Bootstrap',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: "https://github.com/manalijain128/Stationary Website",
    demo: "https://drive.google.com/file/d/14ytIn3bXG9SH56SzXtNE3XAOTO8vyYeU/view?usp=drivesdk",
  },
  {
    image: image5,
    title: 'Quiz App',
    desc: 'Built a responsive Quiz Application using React, JavaScript, HTML, CSS, and Bootstrap with dynamic questions, real-time scoring.',
    tags: ['HTML', 'CSS', 'JavaScript','Bootstrap','Reactjs'],
    github: "https://github.com/manalijain128/Quiz-App",
    demo: "https://drive.google.com/file/d/1Q7G4aXB7H52PhYwoPEoW0SLIdMe2f9NP/view?usp=drivesdk",
  },
]

const ProjectCard = ({ p }) => (
  <div className="rounded-2xl overflow-hidden bg-gradient-to-b from-black/50 to-black/40 border border-gray-800 p-6 shadow-xl h-full mx-2 md:mx-0 flex flex-col justify-between">
    <div>
      <div className="h-44 rounded-md mb-4 overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="text-xl font-bold text-white">{p.title}</h4>
      <p className="text-gray-400 mt-2 text-sm leading-relaxed">
        {p.desc}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-800/60 text-gray-200 px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    {/* Buttons */}
    <div className="mt-6 flex gap-3">
      <a
        href={p.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition"
      >
        Source Code
      </a>

      <a
        href={p.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
      >
        Live Demo
      </a>
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
    adaptiveHeight: false, // Prevents slider tracking from shrinking to single slide length
  };

  const Slick = Slider && Slider.default ? Slider.default : Slider;

  return (
    <section id="projects" className="pt-7 xl:py-14">
      {/* This small global style element injects style targeting slick internal structures 
        to force equal height layout loops within mobile views.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .slick-track {
          display: flex !important;
        }
        .slick-slide {
          height: auto !important;
        }
        .slick-slide > div {
          height: 100% !important;
        }
      `}} />

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

export default Projects;
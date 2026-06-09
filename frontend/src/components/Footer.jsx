import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 py-12">
      <div className="max-w-6xl mx-auto">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4"><img src={logo} className="w-[30%]"/></h2>
            <p className="text-sm leading-relaxed">
              Professional Frontend Developer dedicated to crafting immersive,
              high-performance User experiences with cutting-edge technology.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#experience" className="hover:text-white">Experience</a></li>
              <li><a href="#skills" className="hover:text-white">Skills</a></li>
              <li><a href="#projects" className="hover:text-white">Projects</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <p className="text-sm">manalijain@gmail.com</p>
            <p className="text-sm mb-4">+91 9521499688</p>

            <div className="flex gap-3">
              <a className="p-2 bg-white/10 rounded-md hover:bg-white/20">
                <FaGithub />
              </a>
              <a className="p-2 bg-white/10 rounded-md hover:bg-white/20">
                <FaLinkedin />
              </a>
             
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-center items-center text-sm gap-3 text-center sm:text-left">
          <p>© 2026 Manali Jain. All rights reserved.</p>
         
        </div>

      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please fill out all fields');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:4000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success('Message sent — thank you!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error(data.error || 'Failed to send message');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to send message — check console');
    } finally {
      setLoading(false);
    }
  };
  return (
    <section id="contact" className="py-0 xl:py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <h3 className="text-center text-sm text-blue-400 uppercase tracking-wider">
          Communication
        </h3>
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold text-white my-6">
          Let's <span className="text-blue-500">Connect</span>
        </h2>

        <p className="text-center text-gray-400 max-w-xl mx-auto mb-12">
          Have a project in mind or just want to say hi? I'm always open to
          discussing new opportunities and creative ideas.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT FORM */}
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl">
            <h4 className="text-xl text-white font-bold mb-2">
              Send a Message
            </h4>
            <p className="text-gray-400 mb-6 text-sm">
              I'll get back to you within 24 hours.
            </p>

            {/* Name */}
            <label className="block text-xs text-gray-300 mb-2">
              Your Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="w-full mb-4 p-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
              required
            />

            {/* Email */}
            <label className="block text-xs text-gray-300 mb-2">
              Your Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="email"
              className="w-full mb-4 p-3 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
              required
            />

            {/* Message */}
            <label className="block text-xs text-gray-300 mb-2">
              Your Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="w-full mb-6 p-3 rounded-md bg-white/5 border border-white/10 text-white h-40 focus:outline-none focus:border-blue-500"
              placeholder="Tell me about your project..."
              required
            />

            {/* Button */}
            <button type="submit" disabled={loading} className="w-full py-3 rounded-full border border-blue-500 text-white font-semibold hover:bg-blue-600 transition-all duration-300">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            <ToastContainer />
          </form>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-6">

            {/* Direct Contact */}
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
              <h5 className="text-white font-semibold mb-4">
                Direct Contact
              </h5>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <FiMail className="text-blue-500 text-lg" />
                  <span className="text-gray-200">
                    manalijain99688.com
                  </span>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <FiPhone className="text-blue-500 text-lg" />
                  <span className="text-gray-200">
                    +91 9521499688
                  </span>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <FiMapPin className="text-blue-500 text-lg" />
                  <span className="text-gray-200">
                    Bhilwara, Rajasthan
                  </span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
              <h5 className="text-white font-semibold mb-4">
                Social Presence
              </h5>

              <div className="flex gap-3">
                <a className="w-10 h-10 rounded-md flex items-center justify-center bg-white/5 border border-white/10 hover:bg-blue-600 transition">
                  <FaGithub />
                </a>

                <a className="w-10 h-10 rounded-md flex items-center justify-center bg-white/5 border text-[#0077b5] border-white/10 hover:bg-blue-600 transition">
                  <FaLinkedinIn />
                </a>

              

              
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
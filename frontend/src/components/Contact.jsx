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
      <div className="max-w-2xl mx-auto px-6">

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
        <div className="grid grid-cols-1 gap-10">

          {/* LEFT FORM */}

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
                <a href="https://github.com/manalijain128/" target="_blank" className="w-10 h-10 rounded-md flex items-center justify-center bg-white/5 border border-white/10 hover:bg-blue-600 transition">
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/manali-jain-02bba6238/" className="w-10 h-10 rounded-md flex items-center justify-center bg-white/5 border text-[#0077b5] border-white/10 hover:bg-black transition">
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
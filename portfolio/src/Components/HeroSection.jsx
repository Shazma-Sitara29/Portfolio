// src/components/Hero.js
import React, { useEffect, useState, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Triggers when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`h-screen bg-gradient-to-r from-slate-700 to-black flex items-center justify-center text-white font-serif transition-all duration-500 ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Side - Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm Shazma Sitara
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-slate-950">
              {/* Typewriter Effect */}
              {isVisible && (
                <Typewriter
                  words={['Frontend Developer', 'MERN Stack Developer', 'Full Stack Developer']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </span>
          </h2>
          <p className="text-xl mb-8">
            I specialize in building modern web applications using the latest technologies.
            Let's create something amazing together!
          </p>
          <a href="#contact" className="bg-slate-400 text-black px-6 py-3 rounded-2xl text-2xl font-bold hover:bg-slate-900 hover:text-slate-50 transition duration-300">
            Contact Me
          </a>
        </div>
        
        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src="https://via.placeholder.com/300" alt="Profile Pic" className="rounded-full w-80 h-80 object-cover border-4 border-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', percent: 90 },
  { name: 'CSS', percent: 90 },
  { name: 'JavaScript', percent: 60 },
  { name: 'React', percent: 70 },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Use IntersectionObserver to trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation when section comes into view
          } else {
            setIsVisible(false); // Reset animation when section goes out of view
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
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
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-600 to-gray-900"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left Side - Skills */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-5xl font-bold mb-12 text-center md:text-left text-white">
            My Skills
          </h2>

          {skillsData.map((skill, index) => (
            <div key={index} className="mb-8">
              <h4 className="text-3xl mb-2 text-white">{skill.name}</h4>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <motion.div
                  className="bg-gradient-to-r from-black to-gray-700 h-3 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: isVisible ? `${skill.percent}%` : '0%' }} // Animate only when section is visible
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                />
              </div>
              <p className="text-white mt-2">{skill.percent}%</p>
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <motion.img
            src="https://via.placeholder.com/300"
            alt="Profile Pic"
            className="rounded-lg w-80 h-80 object-cover border-4 border-gray-300"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isVisible ? 1 : 0.8, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React, { useEffect, useState, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className="bg-gray-50 text-white py-20 font-serif"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          About Me
        </h2>

        {/* Cards Grid */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
          {/* Education Card (first) */}
          <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${isVisible ? 'animate-slideLeft' : ''}`}>
            <h3 className="text-2xl font-bold mb-4">
              {isVisible && (
                <Typewriter
                  words={['Education']}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </h3>
            <p className="text-xl leading-relaxed">
              I'm currently pursuing a BS in Computer Science (BSCS), where I’ve developed a strong foundation in algorithms, data structures, and software development.
            </p>
          </div>

          {/* Frontend Developer Card */}
          <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${isVisible ? 'animate-slideRight' : ''}`}>
            <h3 className="text-2xl font-bold mb-4">
              {isVisible && (
                <Typewriter
                  words={['Frontend Developer']}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </h3>
            <p className="text-xl leading-relaxed">
              I specialize in creating interactive, responsive, and modern user interfaces with a focus on React.js and Tailwind CSS.
            </p>
          </div>

          {/* MERN Stack Developer Card */}
          <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${isVisible ? 'animate-slideLeft' : ''}`}>
            <h3 className="text-2xl font-bold mb-4">
              {isVisible && (
                <Typewriter
                  words={['MERN Stack Developer']}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </h3>
            <p className="text-xl leading-relaxed">
              With expertise in MongoDB, Express.js, React, and Node.js, I build full-stack applications, handling both frontend and backend with ease.
            </p>
          </div>

          {/* Full Stack Developer Card */}
          <div className={`bg-gray-800 p-6 rounded-lg shadow-lg ${isVisible ? 'animate-slideRight' : ''}`}>
            <h3 className="text-2xl font-bold mb-4">
              {isVisible && (
                <Typewriter
                  words={['Full Stack Developer']}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              )}
            </h3>
            <p className="text-xl leading-relaxed">
              As a Full Stack Developer, I manage both the frontend and backend of applications, ensuring smooth functionality across the stack.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

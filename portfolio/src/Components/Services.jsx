// import React, { useState } from 'react';
// import { Typewriter } from 'react-simple-typewriter';

// const servicesData = [
//   {
//     title: 'Frontend Development',
//     services: 'HTML, CSS, JavaScript',
//     description: 'Crafting beautiful user interfaces for a seamless user experience.',
//   },
//   {
//     title: 'MERN Stack Development',
//     services: 'MongoDB, Express.js, React.js, Node.js',
//     description: 'Building robust full-stack applications with a focus on performance and scalability.',
//   },
//   {
//     title: 'Full Stack Development',
//     services: 'MERN Stack (MongoDB, Express, React, Node.js)',
//     description: 'I develop both frontend and backend functionalities, ensuring a seamless user experience and robust server-side performance.',
//   },
// ];

// const Services = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <section id="services" className="min-h-screen flex items-center justify-center">
//       <div className="container mx-auto px-6 md:px-12">
//         <h2 className="text-5xl font-bold text-center mb-12">
//           My Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {servicesData.map((service, index) => (
//             <div
//               key={index}
//               className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
//                 hoveredIndex === index ? 'bg-gray-600' : 'bg-gray-800'
//               } transform ${hoveredIndex === index ? 'scale-105' : ''}`}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               style={{ 
//                 animation: `slideIn ${0.5 + index * 0.2}s ease-out forwards`,
//                 opacity: 0,
//               }}
//             >
//               <h3 className="text-3xl text-center text-white mb-2">{service.title}</h3>
//               <p className="text-white mb-4 text-2xl">{service.description}</p>
//               <p className={`text-gray-400 ${hoveredIndex === index ? 'block' : 'hidden'}`}>
//                 {service.services}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React, { useState, useEffect, useRef } from 'react';

const servicesData = [
  {
    title: 'Frontend Development',
    services: 'HTML, CSS, JavaScript',
    description: 'Crafting beautiful user interfaces for a seamless user experience.',
  },
  {
    title: 'MERN Stack Development',
    services: 'MongoDB, Express.js, React.js, Node.js',
    description: 'Building robust full-stack applications with a focus on performance and scalability.',
  },
  {
    title: 'Full Stack Development',
    services: 'MERN Stack (MongoDB, Express, React, Node.js)',
    description: 'I develop both frontend and backend functionalities, ensuring a seamless user experience and robust server-side performance.',
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
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
      id="services"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-6 md:px-12 font-serif ">
        <h2 className="text-5xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg bg-gray-800 text-center transition-all duration-500 transform ${
                isVisible && index === 0
                  ? 'animate-slideLeft'
                  : isVisible && index === 2
                  ? 'animate-slideRight'
                  : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3
                className={`text-3xl text-center text-white mb-2 transition-opacity duration-500 ${
                  isVisible ? 'animate-titleFadeIn' : ''
                }`}
              >
                {service.title}
              </h3>
              <p className="text-white mb-4 text-lg">{service.description}</p>
              <p
                className={`text-gray-400 transition-all duration-300 ${
                  hoveredIndex === index ? 'block text-white' : 'hidden'
                }`}
              >
                {service.services}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

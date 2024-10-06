import React, { useEffect, useState, useRef } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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

  const projectsData = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio showcasing my skills, projects, and experience. Built using React.js, Tailwind CSS, and modern web technologies.',
      techStack: 'React | Tailwind CSS | JavaScript',
    },
    {
      title: 'Plant Palace',
      description:
        'A full-featured e-commerce platform with user authentication, product management, and payment integration. Built using the MERN stack.',
      techStack: 'HTML | CSS| React ',
    },
    {
      title: 'Blog Platform',
      description:
        'A blog platform where users can create, edit, and share blog posts. Features include user authentication, rich text editing, and comment management.',
      techStack: 'Node.js | Express.js | React | MongoDB',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-white text-black py-20 font-serif"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
          My Projects
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`p-8 h-[300px] md:h-[350px] rounded-lg shadow-lg bg-gray-800 transition-all duration-500 transform ${
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
                className={`text-3xl font-bold text-center text-white mb-4 transition-opacity duration-500 ${
                  isVisible ? 'animate-titleFadeIn' : ''
                }`}
              >
                {project.title}
              </h3>
              <p className="text-lg text-white mb-4 text-center leading-relaxed">
                {project.description}
              </p>
              <p
                className={`text-gray-400 transition-all text-center duration-300 ${
                  hoveredIndex === index ? 'block text-white' : 'hidden'
                }`}
              >
                {project.techStack}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



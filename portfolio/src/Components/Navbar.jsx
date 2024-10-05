// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gradient-to-r from-black to-gray-700 text-white fixed w-full z-10 font-serif">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         <div className="text-2xl font-bold">
//           My Portfolio
//         </div>
//         {/* Desktop Menu */}
//         <ul className="hidden md:flex gap-8 text-2xl">
//           <li><a href="#home" className="hover:text-gray-900 transition duration-300">Home</a></li>
//           <li><a href="#about" className="hover:text-gray-900 transition duration-300">About</a></li>
//           <li><a href="#skills" className="hover:text-gray-900 transition duration-300">Skills</a></li>
//           <li><a href="#projects" className="hover:text-gray-900 transition duration-300">Projects</a></li>
//           <li><a href="#services" className="hover:text-gray-900 transition duration-300">Services</a></li>
//           <li><a href="#contact" className="hover:text-gray-900 transition duration-300">Contact</a></li>
//         </ul>
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
      
//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden flex flex-col items-center gap-6 py-4 bg-gray-600 text-white text-xl">
//           <li><a href="#home" className="hover:text-gray-900 transition duration-300" onClick={toggleMenu}>Home</a></li>
//           <li><a href="#about" className="hover:text-gray-900 transition duration-300" onClick={toggleMenu}>About</a></li>
//           <li><a href="#skills" className="hover:text-gray-900 transition duration-300" onClick={toggleMenu}>Skills</a></li>
//           <li><a href="#projects" className="hover:text-gray-900 transition duration-300" onClick={toggleMenu}>Projects</a></li>
//           <li><a href="#services" className="hover:text-gray-900 transition duration-300" onClick={toggleMenu}>Services</a></li>
//           <li><a href="#contact" className="hover:text-gray-900 transition duration-300" onClick={toggleMenu}>Contact </a></li>
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




          import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-black to-gray-700 text-white fixed w-full z-10 font-serif">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          My Portfolio
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-2xl">
          <li>
            <Link
              to="/"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              spy={true} // Ensures active link highlights
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              spy={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              spy={true}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              spy={true}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              spy={true}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-4 bg-gray-600 text-white text-xl">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-gray-900 transition duration-300 cursor-pointer"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
   
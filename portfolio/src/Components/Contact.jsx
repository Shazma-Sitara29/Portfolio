import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let nameError = '';
    let emailError = '';

    // Name validation (no numbers or special characters)
    if (!/^[a-zA-Z ]+$/.test(formData.name)) {
      nameError = 'Please enter a valid name.';
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      emailError = 'Please enter a valid email address.';
    }

    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
      return false;
    }

    setErrors({ name: '', email: '' });
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, you can submit it or handle the data as needed
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <section id="contact" className="bg-gray-800 text-white py-20 font-serif">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-4 rounded-lg text-black"
              />
              {errors.name && <p className="text-gray-100 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 rounded-lg text-black"
              />
              {errors.email && <p className="text-gray-100 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-4 rounded-lg text-black"
                rows="4"
              />
            </div>
            <button
  type="submit"
  className="bg-white text-gray-800 py-3 px-6 rounded-lg w-full hover:bg-gray-400 hover:text-white transition-colors">
  Send Message
</button> 
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="mt-12">
          <ul className="flex justify-center space-x-8">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
                <i className="fab fa-facebook text-white"></i>
              </a>
            </li>
            <li>
        <a href="https://github.com/Shazma-Sitara29" target="_blank" rel="noopener noreferrer" className="text-2xl">
      <i className="fab fa-github text-white"></i>
       </a>
      </li>
            <li>
              <a href="https://www.linkedin.com/in/shazma-sitara-51b2912ba/" target="_blank" rel="noopener noreferrer" className="text-2xl">
                <i className="fab fa-linkedin text-white"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl">
                <i className="fab fa-instagram text-white"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

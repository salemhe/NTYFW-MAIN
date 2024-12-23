import React from 'react';
import PersonImage from '../assets/teensvoiceaward.jpg';

const Credentials = () => {
  return (
    <section className="py-16 px-6 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-center mb-8 leading-snug">
         About This Course
        </h2>

        {/* Flex Container for Image and Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={PersonImage}
              alt="Wealth Oladele Olaitan"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-gray-700">
            <p className="text-lg leading-relaxed mb-4">
              <strong>Teens Voice</strong>, is a social enterprise dedicated to raising a new breed of young leaders, adequately prepared for an impactful and successful adult life. We achieve this through our '7 Star Education' program, mentorship, internship, and experiential learning experiences.

            </p>
            <p className="text-lg leading-relaxed mb-4">
              <strong>
                Our 'Not Too Young for Wealth' Course focuses on financial literacy, entrepreneurship, business, and career development. Designed to bridge the much required knowledge gap not typically addressed in traditional school curricula.
              </strong>
            </p>
            <p className="text-lg leading-relaxed mb-4 italic">
            In 2024, we received two Merit Awards from the Lagos State Ministry of Education, recognizing our contributions to education in the state. We have also received numerous testimonials from students and parents, acknowledging the impact of our  programs and initiatives; a testament to an incredible learning experience that awaits you.
            </p>
            {/* <p className="text-lg leading-relaxed mb-6">
              Trusted by leading organizations across Lagos, Teens Voice continues to gain support from companies committed to shaping the future of our youth.
            </p> */}

            <a 
                href="https://selar.co/m/teensvoiceacademy"
                className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-600 transition w-full sm:w-auto justify-center" 
            >           
            Let's Get Started !
           </a>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Credentials;
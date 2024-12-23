import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.png';
import HeroVideo from '../assets/pwealth-main_compressed.mp4';

const HeroSection = () => {
  return (
    <>
      <header
        className='relative bg-blue-900 text-gray-100 py-8 flex flex-col items-center justify-center rounded-b-[120px] md:h-[850px]'
        style={{ height: "650px" }}
      >
        {/* Dark overlay */}
        {/* <div className='absolute inset-0 bg-blue-900 opacity-90 z-0'></div> */}

        {/* Logo Section */}
        <nav className='absolute top-6 w-full z-10'>
          <motion.div
            className='flex justify-center mb-10 lg:mb-32'
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src={Logo}
              alt='Logo'
              className='h-40 sm:h-52 lg:h-60'
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </nav>

        {/* Content */}
        <motion.div
          className='relative z-10 text-center px-4 sm:px-8 py-6 sm:py-10'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Tag-Like Label */}
          <motion.div
            className='inline-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-medium px-3 py-2 rounded-full text-sm sm:text-base shadow-md mt-6 mb-2'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Join Thousands of Learners!
          </motion.div>

          <h1 className='text-4xl sm:text-6xl font-bold mb-4 sm:mb-6'>
            {/* Master Financial Intelligence in Just 5 Days — Anytime, Anywhere */}
            Master Wealth Creation & Buisness Ideation with our Finacial Education Course.
          </h1>
          <p className="text-base sm:text-xl my-4 sm:my-6 w-[90%] lg:w-[70%] mx-auto text-center">
            Unlock financial intelligence, Entrepreneurial skills & business development with this money back guarantee course. Your journey to wealth creation & financial freedom begins here.
            {/* Learn step-by-step how to build wealth and secure your future */}
          </p>

          {/* Registration Button */}
          <motion.a
            href='/'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button className='bg-yellow-500  text-darkBlue mt-6 px-6 py-3 rounded-lg text-lg font-semibold z-10 relative'>
              Join The Course Now
            </button>
          </motion.a>
        </motion.div>
      </header>

      {/* Video Section */}
      <motion.section
        className='relative -mt-16 sm:-mt-20 lg:-mt-12 z-20 w-full flex justify-center'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.5 }}
      >
        <motion.div
          className='w-[90%] max-w-[700px] lg:max-w-[600px] rounded-lg overflow-hidden shadow-2xl'
          whileHover={{ scale: 1.02 }}
        >
          <video
            autoPlay
            loop
            controls
            className='w-full h-[250px] lg:h-[300px] object-cover'
          >
            <source src={HeroVideo} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.section>
    </>
  );
};

export default HeroSection;
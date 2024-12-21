import React from 'react';
import { AiOutlineBulb, AiOutlineSetting, AiOutlineBarChart, AiOutlineDollarCircle, AiOutlineRocket } from 'react-icons/ai';

const CourseBreakdown = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">
          What You'll Get Inside the Course
        </h2>

         {/* Course Introduction */}
         <div className="bg-blue-50 rounded-lg p-6 mt-12 mb-12 shadow-md text-left">
          <h3 className="text-2xl font-semibold mb-2">Course Introduction</h3>
          <p className="text-lg leading-relaxed text-gray-700">
            Discover the secrets to building wealth and achieving financial freedom with{' '}
            <span className="font-bold">Not Too Young For Wealth</span>. This course equips you with 
            actionable strategies to develop a wealth-building mindset, launch your business, and 
            secure your financial future — all at your own pace.
          </p>
        </div>

        {/* Course Modules */}
        <div className="space-y-8">
          {/* Module 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineBulb className="text-blue-600 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 1: Mastering the Foundations of Wealth</h3>
              <p className="text-gray-600 mt-2">
                Understand what true wealth is and learn how to start building it with confidence.
              </p>
            </div>
          </div>

          {/* Module 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineSetting className="text-yellow-500 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 2: Developing a Winning Mindset</h3>
              <p className="text-gray-600 mt-2">
                Detox your mindset and unlock the confidence you need to achieve your financial goals.
              </p>
            </div>
          </div>

          {/* Module 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineBarChart className="text-green-500 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 3: Business Strategy & Marketing Secrets</h3>
              <p className="text-gray-600 mt-2">
                Discover proven strategies to build, scale, and market successful businesses.
              </p>
            </div>
          </div>

          {/* Module 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineDollarCircle className="text-red-500 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 4: Financial Literacy & Smart Investments</h3>
              <p className="text-gray-600 mt-2">
                Learn practical tools to manage money, grow investments, and secure your future.
              </p>
            </div>
          </div>

          {/* Module 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex items-start gap-6">
            <AiOutlineRocket className="text-purple-500 text-5xl" />
            <div className="text-left">
              <h3 className="text-2xl font-semibold">Module 5: Turning Knowledge Into Action</h3>
              <p className="text-gray-600 mt-2">
                Create your personalized wealth-building plan and start taking action immediately.
              </p>
            </div>
          </div>
        </div>


        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300"
            onClick={() => window.location.href = "https://selar.co/m/teensvoiceacademy"}
          >
            🚀 Get the blueprint to build wealth — step-by-step and stress-free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseBreakdown;

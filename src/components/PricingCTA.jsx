// import React from "react";
// import { FaCheckCircle, FaGift, FaRocket, FaDollarSign, FaRegArrowAltCircleRight } from "react-icons/fa"; 
// import courseimage from '../assets/Course-teensvoice.png'

// const PricingSection = () => {
//   const courseContent = [
//     "Financial Intelligence Test",
//     "Poverty and Wealth: What Is It?",
//     "Intrapreneurship & Entrepreneurship",
//     "Roadmap to Financial Freedom",
//     "Where Do You Find Money?",
//     "Design Thinking & Business Ideation",
//     "10 Facts About Wealth Creation",
//     "Industry Mapping & Finding Your Niche",
//     "Channels of Wealth Creation",
//     "Currencies Beyond Fiat Value",
//     "Income Types & Streams",
//     "Competitor Analysis",
//     "Client Quadrant",
//     "Strategic Partnerships & Friendships",
//     "Legals and Financial Management",
//   ];

//   const bonuses = [
//     {
//       id: 1,
//       title: "Access to PDF Resources From the Program (Lifetime Access)",
//     },
//     {
//       id: 2,
//       title: "Access to the 'Not Too Young for Wealth' Private Community (Priceless)",
//     },
//   ];

//   return (
//     <section className="py-12 px-6 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <h2 className="text-3xl font-bold text-black mb-8 text-center">
//           The "Not Too Young for Wealth" Course Toolkit
//         </h2>

//         {/* Combined Image & What You'll Get */}
//         <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {/* Image Placeholder */}
//             <div className="flex items-center justify-center">
//               <img
//                 src={courseimage}
//                 alt="Course Image"
//                 className="w-full h-64 rounded-lg shadow-inner object-cover"
              
//               />
//             </div>
//             {/* Course Content */}
//             <div>
//               <h3 className="text-2xl font-semibold text-black mb-6">
//                 What You'll Learn <FaRocket className="inline text-blue-500 text-xl" />
//               </h3>
//               <ul>
//                 {courseContent.map((item, index) => (
//                   <li
//                     key={index}
//                     className="flex items-center space-x-3 mb-2 text-gray-700"
//                   >
//                     <FaCheckCircle className="text-blue-500 text-lg" /> {/* Check Circle Icon */}
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Bonuses */}
//         <div className="mt-8 lg:w-[600px] mx-auto"> {/* Centered and fixed width for large screens */}
//           <h4 className="text-xl font-semibold text-blue-600 mb-4">
//             🎁 Bonus Benefits:
//           </h4>
//           <ul className="space-y-4">
//             {bonuses.map((bonus, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center p-3 bg-yellow-100 rounded-md border hover:shadow"
//               >
//                 <div className="flex items-center space-x-3">
//                   <FaGift className="text-yellow-500" /> {/* Gift Icon */}
//                   <span className="text-gray-700 font-medium">{bonus.title}</span>
//                 </div>
//                 <span className="text-blue-600 font-semibold">
//                   <FaDollarSign className="inline text-blue-600" /> {/* Dollar Sign Icon */}
//                   {/* Add the price or benefit value here */}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Pricing and CTA */}
//         <div className="text-center mt-8">
//           <h3 className="text-3xl font-bold text-black mb-4">
//             Your Investment in Financial Freedom <FaRocket className="inline text-blue-500" />
//           </h3>
//           <p className="text-lg text-gray-600 mb-6">
//             Gain lifetime access to the full course and resources for just{" "}
//             <span className="text-red-500 font-semibold text-2xl">₦15,000</span>
//           </p>
//           <button 
//             className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-md text-lg font-semibold transition transform hover:scale-105 shadow-lg"
//             onClick={() => window.location.href = "https://selar.co/m/teensvoiceacademy"}
//             >
//             Your Jounrey to Wealth Creation - Start NOW <FaRegArrowAltCircleRight className="inline text-white" />
//           </button>
//           <p className="mt-4 text-red-500 font-medium">
//             🔥 Limited Access – Secure Your Spot Today!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;






import React from "react";
import { FaCheckCircle, FaGift, FaRocket, FaDollarSign, FaRegArrowAltCircleRight } from "react-icons/fa";
import courseimage from "../assets/Course-teensvoice.png";

const PricingSection = () => {
  const courseContent = [
    { title: "Financial Intelligence Test", price: "₦10,000" },
    { title: "Poverty and Wealth: What Is It?", price: "₦10,000" },
    { title: "Intrapreneurship & Entrepreneurship", price: "₦10,000" },
    { title: "Roadmap to Financial Freedom", price: "₦10,000" },
    { title: "Where Do You Find Money?", price: "₦10,000" },
    { title: "Design Thinking & Business Ideation", price: "₦10,000" },
    { title: "10 Facts About Wealth Creation", price: "₦10,000" },
    { title: "Industry Mapping & Finding Your Niche", price: "₦10,000" },
    { title: "Channels of Wealth Creation", price: "₦10,000" },
    { title: "Currencies Beyond Fiat Value", price: "₦5,000" },
    { title: "Income Types & Streams", price: "₦5,000" },
    { title: "Competitor Analysis", price: "₦10,000" },
    { title: "Client Quadrant", price: "₦10,000" },
    { title: "Strategic Partnerships & Friendships", price: "₦10,000" },
    { title: "Legals and Financial Management", price: "₦10,000" },
  ];

  const bonuses = [
    { id: 1, title: "Access to PDF Resources From the Program (Lifetime Access)" },
    { id: 2, title: "Access to the 'Not Too Young for Wealth' Private Community (Priceless)" },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          The "Not Too Young for Wealth" Course Toolkit
        </h2>

        {/* Combined What You'll Learn and Image */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            What You'll Learn <FaRocket className="inline text-blue-500 text-xl" />
          </h3>

          {/* Image */}
          <div className="flex items-center justify-center mb-6">
            <img
              src={courseimage}
              alt="Course Image"
              className="w-full h-64 lg:h-96 rounded-lg shadow-inner object-cover"
            />
          </div>

          {/* Course Content */}
          <ul>
            {courseContent.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between space-x-3 mb-2 text-gray-700"
              >
                <div className="flex items-center">
                  <FaCheckCircle className="text-blue-500 text-lg mr-2" />
                  <span>{item.title}</span>
                </div>
                <span className="text-gray-500 font-medium">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bonuses */}
        <div className="mt-8 lg:w-[600px] mx-auto">
          <h4 className="text-xl font-semibold text-blue-600 mb-4">
            🎁 Bonus Benefits:
          </h4>
          <ul className="space-y-4">
            {bonuses.map((bonus, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 bg-yellow-100 rounded-md border hover:shadow"
              >
                <div className="flex items-center space-x-3">
                  <FaGift className="text-yellow-500" />
                  <span className="text-gray-700 font-medium">{bonus.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing and CTA */}
        <div className="text-center mt-8">
          <h3 className="text-3xl font-bold text-black mb-4">
            Your Roadmap to Finacial Freedom <FaRocket className="inline text-blue-500" />
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Actual Investment{" "}
            <span className="line-through text-gray-500 font-semibold">₦150,000</span> 
            {" "}if you take action now you pay{" "}
            <span className="text-red-500 font-semibold text-2xl">₦16,500 ONLY !</span>
          </p>
          <button 
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-md text-lg font-semibold transition transform hover:scale-105 shadow-lg"
            onClick={() => window.location.href = "https://selar.co/m/teensvoiceacademy"}
          >
            Start your journey to Wealth Creation <FaRegArrowAltCircleRight className="inline text-white" />
          </button>
          <p className="mt-4 text-red-500 font-medium">
            🔥 Limited OFFER – Secure Your Spot Today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;


// const Footer = () => {
//     return (
//         <footer className="bg-[#07154a] text-white py-6 px-4 text-center">
//          <div className="flex justify-center space-x-6 mb-4">
//             <a href="https://www.instagram.com/theofficialteensvoice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-yellow-500">Instagram</a>
//             <a href="https://youtube.com/@theofficialteensvoice?si=kahc5i6GoNAoM4Zc" className="text-yellow-500">YouTube</a>
//             <a href="https://www.kingsch.at/p/c1dZM2h" className="text-yellow-500">KingsChat</a>
//          </div>

//         <div className="text-sm space-x-4">
//           <a href="https://www.teensvoice.org/privacypolicy">Privacy Policy</a>
//           <a href="#">Terms of Service</a>
//           <a href="https://wa.me/2348024941683">Contact Us</a>
//         </div>
//       </footer>
//     )
// }

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6 px-4 text-center">
              <div className="flex justify-center space-x-6 mb-4">
                 <a href="https://www.instagram.com/theofficialteensvoice?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-yellow-500">Instagram</a>
                 <a href="https://youtube.com/@theofficialteensvoice?si=kahc5i6GoNAoM4Zc" className="text-yellow-500">YouTube</a>
                 <a href="https://www.kingsch.at/p/c1dZM2h" className="text-yellow-500">KingsChat</a>
              </div>
    
             <div className="text-sm space-x-4">
               <a href="https://www.teensvoice.org/privacypolicy">Privacy Policy</a>
               <a href="https://www.teensvoice.org/privacypolicy">Terms of Service</a>
               <a href="https://wa.me/2348024941683">Contact Us</a>
            </div>
          </footer>
  )
}

export default Footer
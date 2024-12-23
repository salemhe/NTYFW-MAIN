import React from "react";

const testimonials = [
  {
    name: "Jane Akasili",
    role: "Project Manager & Social Impact Leader",
    quote:
      "Attending the Not too Young for Wealth training program was one of the most transformative experiences of my life. As a young person striving to navigate the complexities of finances, career, and purpose, the training provided me with the tools I needed to take charge of my future. The sessions were incredibly insightful and practical where  complex financial concepts were broken down into simple,actionable steps that completely shifted my perspective on money teaching me the true definition  of wealth and how to manage my finances effectively and helping me gain independence as a young person. Beyond finances, Not Young for Wealth helped me find clarity in my purpose by  inspiring me to dig deep and discover what truly drives me which has led me to establish my social impact organization that is  growing into a fast-rising platform, impacting lives and creating opportunities for others. The program also had a profound impact on my career development as  I’ve had the opportunity to manage multiple events and projects as a project manager each one building my  portfolio and opening doors to more opportunities. Additionally, I’ve taken up significant leadership roles as a student ,serving as part of my department’s student association, where I continue to apply the skills I learned during the training. In essence, Not Too Young for Wealth gave  me the confidence to manage wealth, build a thriving career, and step into impactful leadership roles. It’s not just a program; it’s a life-changing experience that equips young people to step into their potential and take control of their lives."
  },
  {
    name: "David Ehijie",
    role: "CEO, Creative Cloud",
    quote:
      "Not too young for wealth is one of the very few platforms that truly embodies the meaning of its name. I was able to attend the maiden edition as a teenager, which went on to serve as part of my foundation for the success I’ve built so far in my career. It truly gave me the understanding that wealth and riches aren’t respecters of age and can come to you at anytime, once you put in the work From the impact it had in my life, I’ve gone on to host empowerment programs as an undergraduate, in Ambrose Alli University, Ekpoma, Edo State, that has helped students begin their careers. That, is my most proud achievement"
  },
  {
    name: "Sharon Enuebuka",
    role: "Project Manager & Content Writer",
    quote:
      "The Not Too Young For Wealth program is an oasis of pertinent knowledge for young people in interested in wealth creation. I have been a beneficiary of this impactful program, as a result, I am currently excelling in my career, making giant strides in my journey of greatness."
  },
  {
    name: "Salem Hamis",
    role: "Full-Stack Developer",
    quote:
      "Not Too Young For Wealth has been a game-changer for me. It gave me the perfect foundation to truly understand wealth creation, managing finances, and multiplying resources effectively. Through the program’s impact, I had the honor of chairing the 3rd edition of NTYFW—a huge milestone for me! Beyond that, the training gave me the tools and confidence to dive into tech. Today, I’m a Developer handling international projects and building my portfolio. The crazy part? I’m doing all of this while still a student. NTYFW didn’t just teach me about wealth; it set me up for success in ways I couldn’t have imagined."
  }
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
          Hear from Our Alumni  
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          See how <span className="text-blue-600 font-semibold">Not Too Young For Wealth</span> is shaping futures and empowering youth.
        </p>

        {/* Testimonial Grid */}
        <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left hover:shadow-xl transition-shadow"
            >
              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-4 italic border-l-4 border-blue-500 pl-4">
                "{testimonial.quote}"
              </p>

              {/* Name and Role */}
              <div className="mt-4">
                <h4 className="text-gray-800 font-semibold text-lg">
                  {testimonial.name}
                </h4>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
         <div className="mt-16">
           <button 
            className="flex items-center bg-blue-500 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-600 transition w-full sm:w-auto justify-center"
            onClick={() => window.location.href = "https://selar.co/m/teensvoiceacademy"}
          >
             🚀 Your journey to wealth creation is a click away
           </button>
         </div>
      </div>
    </section>
  );
};

export default Testimonials;
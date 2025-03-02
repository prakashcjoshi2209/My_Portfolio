// "use client";
// import { FaBriefcase } from "react-icons/fa";

// const experiences = [
//   {
//     role: "Full-Stack Developer Intern",
//     company: "MangoOranges Services Pvt. Ltd.",
//     duration: "Sept 2024 – Present",
//     tech: "Next.js, TypeScript, Tailwind CSS, MongoDB",
//     description:
//       "Working on the Learnify project, developing responsive course webpages for an optimal user experience across all devices.",
//   },
// ];

// const page = () => {
//   return (
//     <section className="bg-gray-100 min-h-screen p-10">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Experience</h2>
//         <div className="grid grid-cols-1 gap-8">
//           {experiences.map((experience, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
//               <div className="flex items-center space-x-4">
//                 <FaBriefcase className="text-purple-600 text-3xl" />
//                 <div>
//                   <h3 className="text-2xl font-semibold text-gray-900">{experience.role}</h3>
//                   <p className="text-gray-600">{experience.company}</p>
//                   <p className="text-gray-500 text-sm">{experience.duration}</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 mt-4">{experience.description}</p>
//               <p className="text-gray-500 mt-2">Tech Stack: {experience.tech}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default page;


"use client";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "MangoOranges Services Pvt. Ltd.",
    duration: "Sept 2024 – Present",
    tech: "Next.js, TypeScript, Tailwind CSS, MongoDB",
    description:
      "Working on the Learnify project, developing responsive course webpages for an optimal user experience across all devices.",
  },
];

const page = () => {
  return (
    <section className="bg-gray-100 min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">
          Experience
        </h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-purple-600"
            >
              <div className="flex items-start space-x-4">
                <FaBriefcase className="text-purple-600 text-3xl mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {experience.role}
                  </h3>
                  <p className="text-gray-600 font-medium">{experience.company}</p>
                  <p className="text-gray-500 text-sm">{experience.duration}</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">{experience.description}</p>
              <p className="text-gray-500 mt-2">
                <span className="font-medium text-gray-800">Tech Stack:</span> {experience.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;

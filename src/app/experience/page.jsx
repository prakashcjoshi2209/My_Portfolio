"use client";
import { FaBriefcase } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "MangoOranges Services Pvt. Ltd.",
    duration: "Sept 2024 – Present",
    tech: "Next.js, TypeScript, Tailwind CSS, MongoDB, Node.js",
    certificateLink: "https://drive.google.com/file/d/1kPWBhNSmwZtT318w3QWHusbCpYZcyZFG/view?usp=drivesdk",
    description: [
      "Worked on Learnify, a real-world EdTech platform designed to enhance online learning experiences.",
      "Completed a 6-7month hands-on internship, gaining practical experience in full-stack web development.",
      "Developed and optimized responsive, high-performance course webpages, ensuring a seamless user experience across all devices.",
      "Implemented efficient API integrations, improving data retrieval speed and reducing load times.",
      "Built scalable and reusable components with Next.js and TypeScript, enhancing code maintainability and project scalability.",
      "Utilized MongoDB for dynamic data storage, ensuring smooth CRUD operations and real-time updates.",
      "Enhanced UI/UX with Tailwind CSS, making the platform visually appealing, accessible, and fully responsive.",
      "Integrated authentication and user management features to improve security and access control.",
      "Optimized website performance, reducing load time and improving overall responsiveness.",
      "Collaborated with cross-functional teams, including designers and backend developers, to refine features and enhance product quality.",
      "Earned a completion certificate for the internship, validating technical expertise in full-stack development.",
    ],
  },
];

const Page = () => {
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
                  <p className="text-gray-600 font-medium">
                    {experience.company}
                  </p>
                  <p className="text-gray-500 text-sm">{experience.duration}</p>
                  {experience.certificateLink && (
                <a
                  href={experience.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full transition"
                >
                  View Certificate
                  <FaExternalLinkAlt className="ml-2" />
                </a>
              )}

                </div>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                {experience.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <p className="text-gray-500 mt-2">
                <span className="font-medium text-gray-800">Tech Stack:</span>{" "}
                {experience.tech}
              </p>

            
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;

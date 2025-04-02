"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Learnify",
    tech: "Next.js, TypeScript, Tailwind CSS, MongoDB",
    description:
      "Learnify is a dynamic e-learning platform built with Next.js and TypeScript, designed for seamless course browsing and an intuitive user experience.",
    link: "#",
    github: "https://github.com/prakashcjoshi2209/Learnify",
  },
  {
    title: "GoHelper",
    tech: "React.js, Tailwind CSS, JavaScript, MongoDB",
    description:
      "A digital platform connecting clients with skilled laborers. Designed a scalable architecture for a growing user base and diverse service categories.",
    link: "#",
    github: "https://github.com/prakashcjoshi2209/GoHelper",
  },

  {
    title: "Pizza Wizza",
    tech: "Next.js, Tailwind CSS, JavaScript, MongoDB ",
    description:
     "Designed and developed a responsive website for Pizza Wizza,Implemented an interactive menu, seamless ordering system, and optimized performance for a smooth user experience.",
    link: "#",
    github: "https://github.com/prakashcjoshi2209/pizza_wizza",
  },

  {
    title: "E-Commerce Store",
    tech: "HTML5, CSS, Bootstrap5, JavaScript",
    description:
      "Created a user-friendly shopping interface and implemented a dynamic cart update system for real-time feedback.",
    link: "#",
    github: "https://github.com/prakashcjoshi2209/ecommerce-",
  },
  
];

const page = () => {
  return (
    <section className="bg-gray-100 min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold text-purple-600">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{project.tech}</p>
              <p className="text-gray-700 mt-4">{project.description}</p>
              <div className="mt-4 flex items-center space-x-4">
                <Link
                  href={project.link}
                  className="text-purple-600 hover:underline"
                >
                  View Project →
                </Link>
                <Link
                  href={project.github}
                  className="text-gray-600 hover:text-gray-900 flex items-center space-x-1"
                >
                  <FaGithub /> <span>GitHub</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;

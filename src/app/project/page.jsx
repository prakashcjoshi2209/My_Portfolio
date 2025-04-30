"use client";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaCalendarAlt } from "react-icons/fa";

const projects = [
  {
    title: "Learnify",
    tech: "Next.js, TypeScript, Tailwind CSS, MongoDB",
    duration: "Sept 2024 – Mar 2025",
    description:
      "Learnify is a dynamic e-learning platform built with Next.js and TypeScript, designed for seamless course browsing and an intuitive user experience.",
    link: "https://learnify-pcj.netlify.app/",
    github: "https://github.com/prakashcjoshi2209/Learnify",
  },

  {
    title: "CodeWarZone",
    tech: "React.js, Tailwind CSS",
    duration: "Apr 2025",
    description:
      "A responsive C programming quiz competition app featuring question palette, timers, and image-based MCQs for immersive experience.",
    link: "https://codewarzone-pcj.netlify.app/",
    github: "https://github.com/prakashcjoshi2209/codewarzone",
  },

  {
    title: "BookStore",
    tech: "React.js, Tailwind CSS, JavaScript",
    duration: "Feb 2024 – Mar 2024",
    description:
      "A modern bookstore web app with dark/light theme toggle, mobile navigation, and intuitive browsing experience.",
    link: "https://book-store-nu-puce.vercel.app/",
    github: "https://github.com/prakashcjoshi2209/bookStore",
  },

  {
    title: "GoHelper",
    tech: "React.js, Tailwind CSS, JavaScript, MongoDB",
    duration: "Dec 2023 – Feb 2024",
    description:
      "A digital platform connecting clients with skilled laborers. Designed a scalable architecture for a growing user base and diverse service categories.",
    link: "https://go-helper.vercel.app/",
    github: "https://github.com/prakashcjoshi2209/GoHelper",
  },


  {
    title: "Pizza Wizza",
    tech: "Next.js, Tailwind CSS, JavaScript, MongoDB",
    duration: "Jan 2024 – Feb 2024",
    description:
      "Designed and developed a responsive website for Pizza Wizza. Implemented an interactive menu, seamless ordering system, and optimized performance.",
    link: "https://pizza-wizza.netlify.app/",
    github: "https://github.com/prakashcjoshi2209/pizza_wizza",
  },

 
  
  {
    title: "E-Commerce Store",
    tech: "HTML5, CSS, Bootstrap5, JavaScript",
    duration: "Jul 2023 – Aug 2023",
    description:
      "Developed a user-friendly e-commerce UI with live cart updates and interactive product listings.",
    link: "https://pcj-store.vercel.app/",
    github: "https://github.com/prakashcjoshi2209/pcjStore",
  },
];

const Page = () => {
  return (
    <section className="bg-gray-100 min-h-screen px-4 py-16 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-2xl font-semibold text-purple-600">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mt-1 sm:mt-0">
                    <FaCalendarAlt className="mr-1" />
                    {project.duration}
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-1">{project.tech}</p>
                <p className="text-gray-700 mt-4">{project.description}</p>
              </div>

              <div className="mt-6 space-y-2">
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center text-gray-700 hover:text-black space-x-2"
                >
                  <FaGithub className="text-xl" />
                  <span>GitHub</span>
                </Link>

                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center text-purple-600 hover:text-purple-800 space-x-2"
                >
                  <FaExternalLinkAlt className="text-lg" />
                  <span>Live Demo</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;

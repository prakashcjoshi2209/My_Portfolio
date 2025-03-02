
"use client";

import Link from "next/link";
import React from "react";
import { FaBrain, FaBolt, FaUsers, FaBug } from "react-icons/fa";

const About = () => {
  return (
    <section className="bg-gray-100 min-h-screen py-12 px-6 pt-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-10">
          About Me
        </h1>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Education
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg font-medium">
              Master of Computer Applications (MCA)
            </p>
            <p className="text-gray-600">
              AKTU University, Ghaziabad, UP (2023-2025)
            </p>
          </div>
        </div>

        {/* View Resume Button */}
        <div className="text-center my-6">
          <Link
            href="/prakashCJ.pdf"
            target="_blank"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            View Resume
          </Link>
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Technical Skills
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p>
              <span className="font-medium">Programming Languages:</span> C,
              C++, Java, JavaScript
            </p>

            <p className="text-lg font-medium mt-4">Frameworks & Libraries:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p>
                <span className="font-medium">Frontend:</span> React.js,
                Next.js, Tailwind CSS
              </p>
              <p>
                <span className="font-medium">Backend:</span> Node.js,
                Express.js
              </p>
            </div>

            <p className="mt-4">
              <span className="font-medium">Databases:</span> MongoDB, MySQL
            </p>
            <p>
              <span className="font-medium">Version Control:</span> Git, GitHub
            </p>
          </div>
        </div>

        {/* Strengths */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Strengths
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <FaBrain className="text-purple-600 text-2xl" /> Problem-Solving
                & Logical Thinking
              </li>
              <li className="flex items-center gap-3">
                <FaBolt className="text-yellow-500 text-2xl" /> Quick Learner &
                Adaptability
              </li>
              <li className="flex items-center gap-3">
                <FaUsers className="text-blue-500 text-2xl" /> Strong Team
                Collaboration
              </li>
              <li className="flex items-center gap-3">
                <FaBug className="text-red-500 text-2xl" /> Efficient Debugging
                Skills
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="text-center mt-8">
        <p className="text-gray-600">
          🚀 Always eager to learn new technologies and contribute to meaningful
          projects.
        </p>
        <p className="text-gray-600">
          📧 Reach out to me:{" "}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prakashchandrajoshi2209@gmail.com"
            className="text-purple-600 underline"
          >
            prakashchandrajoshi2209@gmail.com
          </Link>
        </p>
      </div>
    </section>
  );
};

export default About;

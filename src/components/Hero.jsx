"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-6 pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Hi, I'm <span className="text-purple-600">Prakash Chandra Joshi</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-2">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Passionate about building scalable web applications and creating seamless user experiences.
            I love solving complex problems with elegant and efficient code.
          </p>

          {/* Image (Only in Mobile View) */}
          <div className="flex justify-center my-4 md:hidden">
            <Image
              src="/profile.png"
              alt="Profile"
              width={250}
              height={250}
              className="rounded-lg shadow-lg w-48 h-auto"
            />
          </div>

          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={() => router.push("/contact")}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-purple-700 transition"
            >
              Hire Me
            </button>
            <button
              onClick={() => router.push("/project")}
              className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition"
            >
              See Projects
            </button>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <Link href="https://www.linkedin.com/in/pcjurl/" target="_blank" className="text-purple-600 text-2xl hover:text-purple-800 transition">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/prakashcjoshi2209" target="_blank" className="text-purple-600 text-2xl hover:text-purple-800 transition">
              <FaGithub />
            </Link>
          </div>
        </div>

        {/* Right Image (Only in Desktop View) */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/profile.png"
            alt="Profile"
            width={350}
            height={350}
            className="rounded-lg shadow-lg w-64 md:w-80 h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

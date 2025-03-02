// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { FaInstagram, FaGoogle, FaLinkedin } from "react-icons/fa";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const page = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);

//     // Toast notification
//     toast.success("Message Submitted Successfully!", {
//       position: "top-right",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });

//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="bg-gray-100">
//       <ToastContainer /> {/* Toast notification container */}

//       <div >
//         <h1 className="text-purple-600 text-4xl font-bold text-center mt-20 mb-10">Get In Touch</h1>
//       </div>

//       <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-100 text-gray-800">
//         {/* Left Section */}
//         <div className="w-full md:w-1/2 mb-6 md:mb-0">
//           <h2 className="text-2xl font-semibold">Contact Us</h2>
//           <p className="mt-2">Our mailing address is:</p>
//           <p className="text-sm text-gray-600">
//             937E Gaur Global Village,<br />
//             Crossing Republik<br />
//             Phone: 9005868968
//           </p>

//           {/* Clickable Email */}
//           <Link
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=prakashchandrajoshi2209@gmail.com" target="_blank" rel="noopener noreferrer"
//             className="text-sm text-blue-600 underline block mt-2"
//           >
//             prakashchandrajoshi2209@gmail.com
//           </Link>

//           {/* Clickable Social Icons */}
//           <div className="flex gap-4 mt-4 justify-center md:justify-start">
//             <Link href="https://www.instagram.com/invites/contact/?igsh=j4dqvjejohzi&utm_content=e755weg" target="_blank" rel="noopener noreferrer">
//               <FaInstagram className="text-gray-600 text-xl cursor-pointer hover:text-gray-900" />
//             </Link>
//             <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=prakashchandrajoshi2209@gmail.com" target="_blank" rel="noopener noreferrer">
//               <FaGoogle className="text-gray-600 text-xl cursor-pointer hover:text-gray-900" />
//             </Link>
//             <Link href="https://www.linkedin.com/in/pcjurl/" >
//               <FaLinkedin className="text-gray-600 text-xl cursor-pointer hover:text-gray-900" />
//             </Link>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
//           <p className="text-gray-600 text-sm">
//             Great vision without great people is irrelevant. Let’s work together.
//           </p>
//           <form onSubmit={handleSubmit} className="mt-4 space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter a valid email address"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
//               required
//             />
//             <textarea
//               name="message"
//               placeholder="Enter your message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
//               required
//             ></textarea>
//             <button type="submit" className="bg-gray-700 text-white py-2 px-6 rounded hover:bg-gray-900 transition">
//               Submit
//             </button>
//           </form>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default page;



"use client";

import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaGoogle, FaLinkedin } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const page = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Message Submitted Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100">
      <ToastContainer />

      <div>
        <h1 className="text-purple-600 text-4xl font-bold text-center mt-20 mb-10">Get In Touch</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-gray-100 text-gray-800">
        {/* Left Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-2">Our mailing address is:</p>
          <p className="text-sm text-gray-600">
            937E Gaur Global Village,<br />
            Crossing Republik<br />
            Phone: 9005868968
          </p>

          {/* Clickable Email */}
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=prakashchandrajoshi2209@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 underline block mt-2"
          >
            prakashchandrajoshi2209@gmail.com
          </Link>

          {/* Clickable Social Icons */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            <Link href="https://www.instagram.com/invites/contact/?igsh=j4dqvjejohzi&utm_content=e755weg" target="_blank">
              <FaInstagram className="text-gray-600 text-xl cursor-pointer hover:text-gray-900" />
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=prakashchandrajoshi2209@gmail.com" target="_blank">
              <FaGoogle className="text-gray-600 text-xl cursor-pointer hover:text-gray-900" />
            </Link>
            <Link href="https://www.linkedin.com/in/pcjurl/" target="_blank">
              <FaLinkedin className="text-gray-600 text-xl cursor-pointer hover:text-gray-900" />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 text-sm">
            Great vision without great people is irrelevant. Let’s work together.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gray-700 text-white py-2 px-6 rounded hover:bg-gray-900 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

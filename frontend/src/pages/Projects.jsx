import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import BuyMore from "../assets/projects/buymore.png";
import ECOMMERCE from "../assets/projects/ECOMMERCE.png";
import Blog from "../assets/projects/Blog.png";
import Zyvo from "../assets/projects/zyvo.png";
import EcommerceStore from "../assets/projects/Ecommerce-store.png";
import ecommerce2 from "../assets/projects/ecommerce2.png";
import bluewood from "../assets/projects/bluewood.png";
import Bookify from "../assets/projects/Bookify.png";
import HobbSprings from "../assets/projects/HobbSprings.png";

const projects = [
  {
    id: 1,
    title: "BuyMore E-Commerce",
    image: BuyMore,
    description:
      "A modern full-stack MERN e-commerce application featuring secure authentication, shopping cart, Stripe payment integration, admin dashboard, order management, and responsive UI.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
      "Stripe"
    ],
    github: "https://github.com/kashifali88/buy-more-ecommerce",
    live: "https://buy-more-ecommerce-1.onrender.com",
  },

  {
    id: 2,
    title: "MERN Blog Application",
    image: Blog,
    description:
      "A full-stack blogging platform with authentication, CRUD operations, comments, search functionality, filtering, and a modern responsive interface.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/kashifali88/KASHIF_BLOG_MERN",
    live: "https://kashif-blog-mern.onrender.com",
  },

  {
    id: 3,
    title: "E-Commerce Web App",
    image: ECOMMERCE,
    description:
      "Complete MERN e-commerce project with user authentication, product management, admin dashboard, shopping cart, and order processing.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/kashifali88/ecommerce-1",
    live: "https://ecommerce-n9p5.onrender.com/",
  },
  {
    id: 4,
    title: "Zyvo mern estate Web App",
    image: Zyvo,
    description:
      "Full stack MERN estate fully functional and responsive project.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/kashifali88/zyvo-mern-estate",
    live: "https://zyvo-mern-estate.onrender.com",
  },
  {
    id: 5,
    title: "Ecommerce Store",
    image: EcommerceStore,
    description:
      "Ecommerce-Store is a full-stack e-commerce web application built using the MERN stack. It provides a modern online shopping experience with secure authentication, product management, shopping cart functionality, order management, and Stripe payment integration.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/kashifali88/ecommerce-store",
    live: "https://ecommerce-store-1-ir1b.onrender.com/",
  },
  {
    id: 6,
    title: "Ecommerce Store",
    image: ecommerce2,
    description:
      "Full Stack Ecommerce MERN application built with React, Redux Toolkit, Node.js, Express, and MongoDB. Includes authentication (JWT, forgot/reset password), product management, filtering/search, cart system, Stripe payment integration, and admin dashboard features. Fully responsive and production-ready.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/kashifali88/ecommerce-2",
    live: "https://ecommerce-shopping-3wjr.onrender.com",
  },
  {
    id: 7,
    title: "bluewood estate",
    image: bluewood,
    description:
      "A full-stack E-Commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to browse products, add items to cart, and securely manage their shopping experience.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/kashifali88/bluewood-mern-estate",
    live: "https://bluewood-ecommerce-app.onrender.com/",
  },
  {
    id: 8,
    title: "Bookify",
    image: Bookify,
    description:
      "Bookify is a full-stack web application for booking hotels online. It allows users to search for hotels, view details, make reservations, and manage bookings, all from an intuitive, responsive interface. The project is built using modern web technologies for both frontend and backend.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/kashifali88/bookify-booking-mern",
    live: "https://bookify-booking-estate.onrender.com/",
  },
  {
    id: 9,
    title: "Hobb-springs",
    image: HobbSprings,
    description:
      "A full-featured MERN ecommerce application with authentication, product filtering, search, cart management, and Stripe payments — built with React, Redux, Tailwind CSS, Node.js, and MongoDB.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS"
    ],
    github: "https://github.com/kashifali88/hobb-springs",
    live: "https://hobb-springs-ecommerce.onrender.com/",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center">
          My Projects
        </h1>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Here are some of the projects I've built using the MERN Stack and modern web technologies.
        </p>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
  key={project.id}
  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
>
  <img
    src={project.image}
    alt={project.title}
    className="w-full h-52 object-cover"
  />

  <div className="p-6 flex flex-col flex-1">

    <h2 className="text-2xl font-bold mb-3">
      {project.title}
    </h2>

    <p className="text-gray-600 leading-7 mb-5 flex-1">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mb-6">
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Buttons */}
    <div className="flex gap-3 mt-auto">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-lg hover:bg-black transition"
      >
        <FaGithub />
        GitHub
      </a>

      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
      >
        <FaExternalLinkAlt />
        Live Demo
      </a>
    </div>

  </div>
</div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;
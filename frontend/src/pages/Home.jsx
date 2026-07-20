import React from "react";
import TypeWriter from "typewriter-effect";
import Resume from "../assets/docs/resume.txt";
import { FaGithub, FaLinkedin, FaCode, FaDownload, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      className="
      min-h-screen
      py-16
      px-6
      bg-gradient-to-br
      from-gray-950
      via-gray-900
      to-blue-950
      "
    >

      <div
        className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        items-center
        "
      >


        {/* Profile Image */}
        <div
          className="
          flex
          justify-center
          order-1
          lg:order-2
          "
        >

          <div
            className="
            w-56
            h-56
            sm:w-72
            sm:h-72
            lg:w-96
            lg:h-96
            rounded-full
            overflow-hidden
            border-4
            border-blue-500
            shadow-2xl
            "
          >

            <img
              src="/profile.jpg"
              alt="Kashif Ali"
              className="
              w-full
              h-full
              object-cover
              "
            />

          </div>

        </div>



        {/* Left Content */}
        <div
          className="
          order-2
          lg:order-1
          "
        >

          <p
            className="
            text-blue-400
            text-lg
            font-semibold
            "
          >
            Welcome to my portfolio
          </p>



          <h1
            className="
            mt-4
            text-3xl
            sm:text-4xl
            lg:text-6xl
            font-bold
            text-white
            "
          >
            Hi, I'm{" "}
            <span className="text-blue-500">
              Kashif Ali
            </span>
          </h1>



          <h2
            className="
            mt-5
            text-2xl
            lg:text-3xl
            text-yellow-500
            font-semibold
            "
          >

            <TypeWriter
              options={{
                strings:[
                  "MERN Stack Developer",
                  "Full Stack Developer",
                  "React Developer",
                  "Frontend Developer"
                ],
                autoStart:true,
                loop:true
              }}
            />

          </h2>




          <p
            className="
            mt-6
            text-gray-300
            text-lg
            leading-8
            max-w-xl
            "
          >
            I build modern, responsive and scalable web applications
            using React, Redux, Node.js, Express, MongoDB, Strapi and MySQL.
            Passionate about clean UI, backend development and solving
            real-world problems.
          </p>




          {/* Buttons */}

          <div
            className="
            flex
            flex-col
            sm:flex-row
            gap-4
            mt-8
            "
          >

            <Link to='/contact'>
            <button
              className="
              flex
              items-center
              justify-center
              gap-3
              bg-yellow-600
              text-white
              px-6
              py-3
              rounded-xl
              hover:bg-yellow-700
              transition
              "
            >
              Hire Me
            </button>
            </Link>



            <a
              href={Resume}
              download="Kashif-Ali-Resume.txt"
            >

              <button
                className="
                w-full
                sm:w-auto
                flex
                items-center
                justify-center
                gap-3
                bg-blue-600
                text-white
                px-6
                py-3
                rounded-xl
                hover:bg-blue-700
                transition
                "
              >

                <FaDownload />

                Download Resume

              </button>

            </a>


          </div>





          {/* Social Icons */}

          <div
            className="
            flex
            gap-6
            mt-8
            text-white
            text-3xl
            "
          >

            <a
              href="https://github.com/kashifali88"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="
                hover:text-blue-400
                cursor-pointer
                transition
                "
              />
            </a>



            <a
              href="https://linkedin.com/in/kashif-ali-887b0b328"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaLinkedin
                className="
                hover:text-blue-400
                cursor-pointer
                transition
                "
              />

            </a>



            <FaCode
              className="
              hover:text-blue-400
              cursor-pointer
              transition
              "
            />


          </div>


        </div>


      </div>





      {/* WhatsApp Floating Button */}

      <a
        href="https://wa.me/923195378220"
        target="_blank"
        rel="noopener noreferrer"
        className="
        fixed
        bottom-6
        right-6
        w-14
        h-14
        sm:w-16
        sm:h-16
        rounded-full
        bg-green-500
        flex
        items-center
        justify-center
        text-white
        text-3xl
        sm:text-4xl
        shadow-2xl
        hover:bg-green-600
        hover:scale-110
        transition-all
        duration-300
        z-50
        "
      >

        <FaWhatsapp />

      </a>


    </section>
  );
};


export default Home;
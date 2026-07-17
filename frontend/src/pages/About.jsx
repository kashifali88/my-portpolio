import React from "react";
import { FaDownload, FaCode, FaLaptopCode } from "react-icons/fa";
import Resume from "../assets/docs/resume.txt"

const About = () => {
  return (
    <section className="min-h-screen flex items-center px-6 lg:px-16 py-10">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Image */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-20" />

            <img
              src="/profile.jpg"
              alt="Kashif Ali"
              className="
                relative
                w-72
                h-80
                lg:w-96
                lg:h-[450px]
                object-cover
                rounded-2xl
                shadow-2xl
                border-4
                border-white
              "
            />

          </div>

        </div>


        {/* Right Content */}
        <div>

          <p className="text-blue-600 font-semibold text-lg">
            About Me
          </p>

          <h1 className="
            text-4xl 
            lg:text-5xl 
            font-bold 
            mt-3
            text-gray-900
          ">
            MERN Stack Developer
          </h1>


          <p className="
            mt-6
            text-gray-600
            leading-8
            text-lg
          ">
            I am Kashif Ali, a passionate Full Stack Developer specializing
            in building modern and scalable web applications using MongoDB,
            Express.js, React.js, and Node.js.
          </p>


          <p className="
            mt-4
            text-gray-600
            leading-8
            text-lg
          ">
            I enjoy creating clean user interfaces, solving complex problems,
            and transforming ideas into real-world digital products.
            My goal is to build fast, responsive, and user-friendly
            applications that provide great experiences.
          </p>


          {/* Skills Cards */}
           <div className="grid sm:grid-cols-2 gap-5 mt-8">

  <div className="
    flex items-center gap-4 p-4 rounded-xl bg-white shadow-md
  ">
    <FaCode className="text-blue-600 text-3xl"/>

    <div>
      <h3 className="font-bold">
        Frontend Development
      </h3>
      <p className="text-gray-500 text-sm">
        React, Redux Toolkit, Tailwind CSS, Bootstrap, SCSS
      </p>
    </div>

  </div>


  <div className="
    flex items-center gap-4 p-4 rounded-xl bg-white shadow-md
  ">
    <FaLaptopCode className="text-blue-600 text-3xl"/>

    <div>
      <h3 className="font-bold">
        Full Stack Development
      </h3>
      <p className="text-gray-500 text-sm">
        Node.js, Express.js, MongoDB, REST APIs
      </p>
    </div>

  </div>

</div>


          {/* Button */}
          <a href={Resume} download="Kashif-Ali-Resume.txt">
          <button
            className="
              mt-8
              flex
              items-center
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

      </div>

    </section>
  );
};

export default About;
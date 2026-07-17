import React from "react";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const Experience = () => {

  const journey = [
    {
      year: "2024",
      title: "Started Web Development Journey",
      icon: <FaCode />,
      description:
        "Started learning web development fundamentals including HTML, CSS, JavaScript, and responsive web design. Built a strong foundation for modern frontend development."
    },
    {
      year: "2025",
      title: "MERN Stack Development",
      icon: <FaLaptopCode />,
      description:
        "Focused on full-stack development with React.js, Redux Toolkit, Node.js, Express.js, and MongoDB. Built dynamic applications with authentication, APIs, and database integration."
    },
    {
      year: "2026",
      title: "Building Professional Projects",
      icon: <FaRocket />,
      description:
        "Continuing to improve as a developer by creating scalable applications, improving UI/UX skills, learning modern tools, and following industry best practices."
    }
  ];


  return (
    <section className="min-h-screen px-6 lg:px-16 py-12">

      <div className="max-w-5xl mx-auto">

        <h1 className="
          text-4xl
          lg:text-5xl
          font-bold
          text-gray-900
        ">
          Developer Journey
        </h1>

        <p className="
          mt-4
          text-gray-600
          text-lg
          leading-8
        ">
          My journey of learning, building, and growing as a Full Stack
          Developer.
        </p>


        <div className="mt-12 relative">


          {/* Timeline Line */}
          <div className="
            absolute
            left-6
            top-0
            h-full
            w-1
            bg-blue-600
          "></div>



          <div className="space-y-10">


            {journey.map((item,index)=>(

              <div
                key={index}
                className="
                  relative
                  flex
                  gap-8
                "
              >


                {/* Icon */}
                <div className="
                  z-10
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-full
                  bg-blue-600
                  text-white
                  text-xl
                ">
                  {item.icon}
                </div>



                {/* Content */}
                <div className="
                  bg-white
                  shadow-lg
                  rounded-xl
                  p-6
                  flex-1
                  hover:shadow-xl
                  transition
                ">

                  <div className="
                    flex
                    justify-between
                    flex-wrap
                    gap-2
                  ">

                    <h2 className="
                      text-xl
                      font-bold
                    ">
                      {item.title}
                    </h2>


                    <span className="
                      text-blue-600
                      font-semibold
                    ">
                      {item.year}
                    </span>

                  </div>


                  <p className="
                    mt-3
                    text-gray-600
                    leading-7
                  ">
                    {item.description}
                  </p>


                </div>


              </div>

            ))}


          </div>


        </div>


      </div>


    </section>
  );
};


export default Experience;
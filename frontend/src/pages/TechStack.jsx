import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiBootstrap,
  SiSass,
  SiVite,
  SiStrapi,
  SiMysql,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "React.js", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "SCSS", icon: <SiSass /> },
      { name: "Redux Toolkit", icon: <SiRedux /> },
    ],
  },

{
  category: "Backend",
  technologies: [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "Strapi CMS", icon: <SiStrapi /> },
  ],
},

  {
    category: "Database",
    technologies: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },

  {
    category: "Tools & Others",
    technologies: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "Vite", icon: <SiVite /> },
    ],
  },
];


const TechStack = () => {
  return (
    <section className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-center mb-10">
        My Tech Stack
      </h1>


      <div className="grid md:grid-cols-2 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6"
          >

            <h2 className="text-xl font-bold mb-5">
              {skill.category}
            </h2>


            <div className="grid grid-cols-2 gap-4">

              {skill.technologies.map((tech, i) => (
                <div
                  key={i}
                  className="
                  flex items-center gap-3
                  p-3
                  rounded-lg
                  bg-gray-100
                  hover:bg-blue-600
                  hover:text-white
                  transition
                  "
                >

                  <span className="text-2xl">
                    {tech.icon}
                  </span>

                  <span className="font-medium">
                    {tech.name}
                  </span>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default TechStack;
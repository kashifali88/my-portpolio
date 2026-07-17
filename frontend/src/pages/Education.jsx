import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institute: "Virtual University of Pakistan",
    location: "Peshawar, Pakistan",
    duration: "Aug 2023 - Present",
    description:
      "Currently pursuing a Bachelor's degree in Computer Science while strengthening my skills in full-stack web development, software engineering, and modern programming technologies.",
  },
  {
    degree: "FSc (Pre-Medical)",
    institute: "Board of Intermediate & Secondary Education, Saidu Sharif Swat",
    location: "Buner, Pakistan",
    duration: "Jul 2020 - Feb 2023",
    description:
      "Completed Higher Secondary School education with a Pre-Medical background, developing analytical thinking and problem-solving skills.",
  },
  {
    degree: "Matriculation",
    institute: "Board of Intermediate & Secondary Education, Saidu Sharif Swat",
    location: "Buner, Pakistan",
    duration: "Jul 2018 - Jul 2020",
    description:
      "Completed Secondary School education with a strong academic foundation and interest in technology.",
  },
];

const Education = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          Education
        </h1>

        <p className="text-center text-gray-600 mb-12">
          My academic journey and educational background.
        </p>

        <div className="space-y-8">

          {education.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-600 hover:shadow-xl transition"
            >
              <div className="flex items-start gap-5">

                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaGraduationCap size={24} />
                </div>

                <div className="flex-1">

                  <h2 className="text-2xl font-bold">
                    {item.degree}
                  </h2>

                  <p className="text-blue-600 font-semibold mt-1">
                    {item.institute}
                  </p>

                  <p className="text-gray-500 text-sm mt-1">
                    {item.location}
                  </p>

                  <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {item.duration}
                  </span>

                  <p className="text-gray-700 mt-4 leading-7">
                    {item.description}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;
import { FaWhatsapp, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {

  const contacts = [
    {
      title: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/923195378220",
      color: "text-green-500"
    },
    {
      title: "Email",
      icon: <FaEnvelope />,
      link:
"mailto:kashifzan28406@gmail.com?subject=Hiring%20Opportunity&body=Hi%20Kashif,%20I%20would%20like%20to%20discuss%20a%20project.",
      color: "text-red-500"
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/kashifali88",
      color: "text-gray-800"
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/kashif-ali-887b0b328",
      color: "text-blue-600"
    }
  ];


  return (
    <section className="min-h-screen p-8 bg-gray-100">

      <h1 className="text-3xl font-bold text-center mb-10">
        Contact Me
      </h1>


      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

        {contacts.map((item,index)=>(
          
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
            bg-white
            shadow-lg
            rounded-xl
            p-6
            flex
            items-center
            gap-5
            hover:scale-105
            transition
            "
          >

            <span className={`text-4xl ${item.color}`}>
              {item.icon}
            </span>

            <h2 className="text-xl font-semibold">
              {item.title}
            </h2>

          </a>

        ))}

      </div>

    </section>
  );
};

export default Contact;
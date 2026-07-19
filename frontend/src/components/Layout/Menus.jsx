import React, { useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import {
  FcHome,
  FcAbout,
  FcBiotech,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
  FcBusinessContact,
  FcPortraitMode,
} from "react-icons/fc";
import {
  House,
  User,
  Briefcase,
  CodeXml,
  GraduationCap,
  FolderKanban,
  MessageSquareQuote,
  Mail,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    id: 1,
    title: "Home",
    icon: <House size={22} />,
    path:"/"
  },
  {
    id: 2,
    title: "About",
    icon: <User size={22} />,
    path: "/about"
  },
  {
    id: 3,
    title: "Experience",
    icon: <Briefcase size={22} />,
    path: "/experience"
  },
  {
    id: 4,
    title: "Tech Stack",
    icon: <CodeXml size={22} />,
    path: "/tech-stack"
  },
  {
    id: 5,
    title: "Education",
    icon: <GraduationCap size={22} />,
    path: "/education"
  },
  {
    id: 6,
    title: "Projects",
    icon: <FolderKanban size={22} />,
    path: "/projects"
  },

  {
    id: 8,
    title: "Contact",
    icon: <Mail size={22} />,
    path: "/contact"
  },
];


const Menus = ({ toggle, setToggle }) => {
  const [profile, setProfile] = useState(localStorage.getItem("profile") || "/profile.jpg");
  const [error, setError] = useState("");
  const fileRef = useRef();
  
 const location = useLocation();
   useEffect(() => {
    setToggle(false);
  }, [location.pathname]);


  // profile update
 const handleImageUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const data = new FormData();
  data.append("file", file);
  data.append(
    "upload_preset",
    import.meta.env.VITE_CLOUDINARY_PROFILE_PRESET
  );

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();

    if (!res.ok) {
      setError(result.error?.message || "Upload failed");
      return;
    }

    setProfile(result.secure_url);
    localStorage.setItem("profile", result.secure_url)
  } catch (err) {
    setError(err.message || "Something went wrong");
  }
};


  return (
    <div className="flex flex-col h-full">

      {/* ================= Profile ================= */}

      <div className="flex flex-col items-center border-b border-gray-700 pb-6">
       
        <div className="relative">
      <input hidden type="file" ref={fileRef} accept="image/*"
     onChange={handleImageUpload} />

      <img src={profile} alt="Profile"
     className={`rounded-full object-cover border-white shadow-lg transition-all duration-300 ${
    toggle
      ? "w-24 h-24 border-4"
      : "w-14 h-14 border-2 mt-4"
  }`}
/>
    <button
  type="button"
  onClick={() => fileRef.current.click()}
  className={`flex items-center justify-center absolute -bottom-1 right-3 bg-indigo-600 p-2 rounded-full shadow-lg hover:bg-indigo-700 ${!toggle && "p-0 w-6 h-6"}`}
>
  <FaCamera className="text-white text-xs" />
</button>
</div>
{ error && <p className="text-sm text-red-500">{error}</p>}
        {toggle && (
          <>
            <h2 className="mt-4 text-xl font-bold">
              Kashif Ali
            </h2>

            <p className="text-gray-400 text-sm">
              MERN Stack Developer
            </p>
          </>
        )}

      </div>

      {/* ================= Menu ================= */}

      <div className="flex-1 mt-2 overflow-y-auto">

        {menuItems.map((item) => (
            
          <div
            key={item.id}
            className={`
                text-sm
              mx-3
              rounded-xl
              cursor-pointer
              transition-all
              duration-300
              hover:bg-blue-600
              hover:shadow-lg
              hover:translate-x-1
            `}
          >

            <Link to={item.path}
              className={`flex items-center
              ${
                toggle
                  ? "gap-4 px-4 py-4"
                  : "justify-center py-4"
              }`}
            >

              {item.icon}

              {toggle && (
                <span className="font-medium text-white">
                  {item.title}
                </span>
              )}

            </Link>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Menus;






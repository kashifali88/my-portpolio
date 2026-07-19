import React from "react";
import {
  Award,
  ExternalLink,
  Download,
} from "lucide-react";

import frontend from "../assets/docs/frontend_certificate.pdf";
import backend from "../assets/docs/backend_certificate.pdf";

const certificates = [
  {
    id: 1,
    title: "React Certificate",
    issuer: "Coursera",
    file: frontend,
  },
  {
    id: 2,
    title: "Node.js Certificate",
    issuer: "Coursera",
    file: backend,
  },
];

const Certification = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          Certifications
        </h1>

        <p className="text-gray-400 text-center mb-12">
          Professional certificates that demonstrate my skills and continuous learning.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition"
            >

              <div className="flex items-center gap-3 mb-5">
                <Award className="text-yellow-400" size={30} />

                <div>
                  <h2 className="text-xl font-semibold">
                    {certificate.title}
                  </h2>

                  <p className="text-gray-400">
                    {certificate.issuer}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition"
                >
                  <ExternalLink size={18} />
                  View
                </a>

                <a
                  href={certificate.file}
                  download
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg transition"
                >
                  <Download size={18} />
                  Download
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certification;
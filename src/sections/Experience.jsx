import React from "react";
import { motion } from "framer-motion";

const experienceList = [
  {
    company: "Internet Think Tank, Inc.",
    position: "Lead Software Developer & CyberSecurity Researcher",
    duration: "2024 - Present",
    description:
      "Working on Teserex - a post-quantum crypto-safe blockchain designed for satellites. " +
      "Leading development and security research to build future-proof blockchain solutions.",
    logos: ["./images/inttk.png"], // Add your logo URL here if available
    highlights: [
      "Post-quantum cryptography research",
      "Satellite blockchain architecture design",
      "Leading a cross-disciplinary software team",
    ],
  },
  {
    company: "HSBC Software Development India Pvt. Ltd.",
    position: "Senior Software Engineer",
    duration: "Dec 2022 - Jul 2023",
    description:
      "Focused on AWS, Cybersecurity, Java, and Spring Boot within a dynamic financial services environment.",
    logos: ["./images/hsbc_logo.png"],
    highlights: ["DSP - SecureAccess", "DSP Expat", "Originations - ASD Loans (ETB and NTB)"],
  },
  {
    company: "Falvey Library - Villanova University",
    position: "Technical Assistant",
    duration: "During Master's",
    description:
      "Supported planning, development, and maintenance of hardware and software systems. Assisted library departments with digital content production and documentation.",
    logos: ["./images/villanova_logo.jpg"],
    highlights: [
      "Troubleshot Windows and Mac applications",
      "Enhanced technology-based library services",
      "Generated statistical reports for stakeholders",
    ],
  },
  {
    company: "Government of Andhra Pradesh · Internship",
    position: "Blockchain Intern",
    duration: "May - June 2017",
    description:
      "Completed a 4-week FinTech Valley Startup Workshop focused on Blockchain. Participated in Blockchain Hackathon Series and International Blockchain Business Conference.",
    logos: ["./images/APITA_logo.png"],
    highlights: [
      "Developed Android blockchain app",
      "Immersed in cutting-edge blockchain technology",
    ],
  },
  {
    company: "Tata Consultancy Services (TCS) - Remote Internship",
    position: "Intern",
    duration: "Dec 2017 - Mar 2018",
    description:
      "Developed DevOps CI/CD pipelines for .Net applications and web apps with database integration using Microsoft Team Foundation Server (TFS).",
    logos: ["./images/tcs_logo.png"],
    highlights: [
      "Established CI/CD pipeline",
      "Managed DevOps processes with TFS",
      "Enhanced software development skills",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
};

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-10 text-center">Experience</h2>
      <p className="mb-12 text-center text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        I've had the opportunity to collaborate with teams and partners from around the world.
        This global exposure has enriched my understanding of diverse cultures and perspectives,
        which I believe is crucial in today's interconnected world.
      </p>

      <div className="space-y-10">
        {experienceList.map(
          ({ company, position, duration, description, logos, highlights }, i) => (
            <motion.div
              key={company + i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 cursor-pointer"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className="flex items-center space-x-4 mb-4">
                {logos.length > 0 &&
                  logos.map((logo, idx) => (
                    <img
                      key={idx}
                      src={logo}
                      alt={`${company} logo`}
                      className="w-16 h-16 object-contain rounded-md"
                    />
                  ))}
                <div>
                  <h3 className="text-xl font-semibold">{company}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{position}</p>
                  <p className="text-xs text-gray-400">{duration}</p>
                </div>
              </div>
              <motion.p
                className="text-gray-700 dark:text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {description}
              </motion.p>
              <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
                {highlights.map((item, idx) => (
                  <li key={idx} className="hover:text-indigo-500 transition-colors duration-300 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        )}
      </div>

     
    </section>
  );
}

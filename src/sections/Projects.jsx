import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Biometric Authentication API",
    description:
      "A secure API for Android/iOS supporting fingerprint and facial recognition.",
  },
  {
    title: "Study Group Finder",
    description:
      "Connect students via Outlook & Microsoft Teams for academic collaborations.",
  },
  {
    title: "CRM using Power Platform",
    description:
      "Built a contact management system with Dynamics 365 + Power Automate.",
  },
  {
    title: "Lending Platform Development",
    description: [
      "Developed and supported Java Spring Boot and Mulesoft APIs for HSBC's lending platforms, serving five of the bank's largest markets.",
      "Played a pivotal role in designing the backend infrastructure using MongoDB and integrated it with Spring Boot microservices, ensuring robust performance and scalability.",
    ],
  },
  {
    title: "Legacy System Migration to AWS",
    description: [
      "Led a team of seven members in the migration of a legacy SaaS system, Digital Secure Platform (DSP), from on-premises PCF to the AWS cloud.",
      "Supported the DevOps team in establishing efficient CI/CD operations to enhance agility and scalability.",
    ],
  },
  {
    title: "API Development and Security",
    description: [
      "Designed and developed RAML contracts for APIs, enabling RESTful communication while maintaining readability and scalability.",
      "Developed an integration model for cyber vulnerability assessment and formulated security rules for API risk remediation within the bank.",
    ],
  },
  {
    title: "Spring Boot Migration",
    description: [
      "Successfully migrated jobs from Spring Boot 1.7 to version 2.7.0, improving performance and reducing vulnerabilities, which is crucial for ensuring the security and efficiency of applications.",
    ],
  },
];

export default function Projects() {
  return (
    <section className="px-6 py-12 md:py-24 bg-white dark:bg-gray-800 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, type: "spring", stiffness: 50 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
            className="p-6 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 cursor-pointer transition-shadow duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              {project.title}
            </h3>
            {Array.isArray(project.description) ? (
              <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-300">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-800 dark:text-gray-300">{project.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

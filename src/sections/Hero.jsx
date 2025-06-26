import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm Padmasree 👩‍💻
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-xl md:text-2xl w-full"
      >
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Full Stack Developer | Cybersecurity Researcher | Problem Solver")
              .start();
          }}
          options={{
            cursor: "",
            delay: 40,
          }}
        />
      </motion.div>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-6 max-w-3xl text-sm md:text-base text-gray-700 dark:text-gray-300"
      >
        Java | Spring Boot | Hibernate | Mulesoft | Maven | Microservices | Distributed Systems | Unit Testing | API Automation Testing | AWS | CI/CD | GitHub | Jira | JMeter | Docker & Kubernetes | C# .NET | Microsoft Dynamics 365 | Azure
      </motion.p>
    </section>
  );
}

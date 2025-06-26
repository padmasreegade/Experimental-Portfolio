import React from "react";
import { motion, useInView } from "framer-motion";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero />

      <SectionWrapper>
        <Experience />
      </SectionWrapper>

      <SectionWrapper delay={0.2}>
        <Projects />
      </SectionWrapper>

      <SectionWrapper delay={0.6}>
        <Contact />
      </SectionWrapper>

      <footer className="py-6 text-center text-sm text-gray-500">
        Built with ❤️ by Padmasree — © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function SectionWrapper({ children, delay = 0 }) {
  return (
    <motion.section
      className="px-6 py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.section>
  );
}

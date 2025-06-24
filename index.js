import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen p-4 sm:p-10">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Padmasree Gade</h1>
        <p className="text-lg text-gray-600">Lead Software Engineer | Cybersecurity Researcher</p>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <Card className="p-4">
          <p>
            I specialize in building secure, scalable software solutions using modern web technologies. With years of experience in full-stack development and a passion for cybersecurity, I focus on creating meaningful digital experiences.
          </p>
        </Card>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {['React', 'Node.js', 'MongoDB', 'Azure', 'Power Platform', 'Cybersecurity'].map(skill => (
            <Card key={skill} className="p-4 text-center font-medium">
              {skill}
            </Card>
          ))}
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[{
            name: "Biometric Auth API",
            description: "A secure biometric API for mobile platforms with Face & Fingerprint auth.",
          }, {
            name: "Study Group Finder",
            description: "Find or create student study groups, integrated with Outlook and Teams.",
          }].map(project => (
            <Card key={project.name} className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p>{project.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form className="space-y-4 max-w-lg mx-auto">
          <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32" />
          <Button type="submit">Send Message</Button>
        </form>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Padmasree Gade. All rights reserved.
      </footer>
    </div>
  );
}

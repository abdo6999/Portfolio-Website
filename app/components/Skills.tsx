"use client";

import { motion } from 'motion/react';
import { Code2, Server, Cloud, TestTube } from 'lucide-react';

export function Skills() {
const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    skills: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3 / SCSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    skills: [
      "ASP.NET Core",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "RESTful APIs",
      "Authentication & Authorization",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "from-pink-500 to-rose-500",
    skills: [
      "CI/CD Pipelines",
      "Docker",
      "GitHub Actions",
      "Netlify",
      "AWS Deployment",
    ],
  },
  {
    title: "Testing & Quality",
    icon: TestTube,
    color: "from-violet-500 to-purple-500",
    skills: [
      "Unit Testing (Jasmine)",
      "Integration Testing",
      "Debugging & Optimization",
    ],
  },
];


  return (
    <section id="skills" className="snap-start min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-4 text-white">
            Technical <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all`} />
              <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all h-full">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-4 text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-gray-800/50 border border-cyan-500/30 text-cyan-300 text-sm hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="relative inline-block group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-xl blur-xl" />
            <div className="relative bg-gray-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl p-8">
              <p className="text-gray-300 max-w-3xl">
                Continuously learning and staying updated with the latest technologies 
                and industry best practices to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

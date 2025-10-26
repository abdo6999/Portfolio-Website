"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
        {
      name: "Client Q&A Portal",
      description:
        "A Q&A portal enabling users to search for answers using keyword-based relevance and fast data queries.",
      tags: ["Angular", "Node.js", "Search Engine"],
      gradient: "gradient-emerald",
      link: "https://www.upwork.com/freelancers/~014afdf02b133b0c03",
    },
    {
      name: "Mixgure",
      description:
        "A backend system integrating Telegram for form submissions, approvals, and automated workflows.",
      tags: ["Node.js", "Telegram API", "Express"],
      gradient: "gradient-amber",
      link: "https://www.upwork.com/freelancers/~014afdf02b133b0c03",
    },
    {
      name: "Angular Unit",
      description:
        "A reusable Angular module built for seamless integration, optimized UI components, and clean maintainability.",
      tags: ["Angular", "TypeScript", "UI Components"],
      gradient: "gradient-sky",
      link: "https://www.upwork.com/freelancers/~014afdf02b133b0c03",
    },
    {
      name: "Strem API",
      description:
        "A secure and scalable RESTful API for e-commerce with authentication, product, and order management.",
      tags: ["Node.js", "Express", "PostgreSQL"],
      gradient: "from-cyan-500 to-blue-500",
      github: "https://github.com/abdo6999/strem-api",
    },
    {
      name: "NGVGDB",
      description:
        "An Angular-powered video game database with advanced search, filtering, and collection features.",
      tags: ["Angular", "TypeScript", "API"],
      gradient: "from-violet-500 to-purple-500",
      github: "https://github.com/abdo6999/NGVGDB",
    },
    {
      name: "Boudi",
      description:
        "A modern responsive website delivering smooth UX with elegant front-end design patterns.",
      tags: ["JavaScript", "CSS", "HTML"],
      gradient: "from-blue-500 to-cyan-500",
      link: "https://ornate-tiramisu-274761.netlify.app/",
      github: "https://github.com/abdo6999/Bondi",
    },
    {
      name: "Kasber",
      description:
        "A fully responsive landing page with clean architecture and interactive front-end elements.",
      tags: ["HTML", "CSS", "JavaScript"],
      gradient: "from-cyan-500 to-purple-500",
      link: "https://papaya-bubblegum-6a9577.netlify.app/",
      github: "https://github.com/abdo6999/Kasper",
    },
    {
      name: "Product Dashboard",
      description:
        "A real-time analytics dashboard for managing and visualizing product performance data.",
      tags: ["Angular", "TypeScript", "Charts"],
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/abdo6999/product-dashboard",
    },
    {
      name: "Personal Dashboard",
      description:
        "A customizable productivity dashboard featuring tasks, notes, and habit tracking tools.",
      tags: ["Angular", "SASS", "LocalStorage"],
      gradient: "from-pink-500 to-rose-500",
      link: "https://singular-brioche-0c8357.netlify.app/",
      github: "https://github.com/abdo6999/angular-dashboard",
    },
  ];

  return (
    <section
      id="projects"
      className="snap-start min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-4 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-12 rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`}
              />
              <div className="relative bg-gray-900/40 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${project.gradient}`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm" />
                    </div>
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                      >
                        <Github className="w-4 h-4 text-cyan-400" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-cyan-400" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mb-3 text-white">{project.name}</h3>
                <p className="text-gray-400 text-sm mb-4 whitespace-pre-line flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-gray-800/50 border border-purple-500/30 text-purple-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

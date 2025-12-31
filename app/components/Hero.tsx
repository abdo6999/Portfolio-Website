"use client";

import { useState, useEffect } from 'react';
import { GlowingButton } from './GlowingButton';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Abdelrahman Mahmoud';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
  <article
    id="hero"
    className="snap-start min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8"
    itemScope
    itemType="https://schema.org/Person"
  >
    <header className="max-w-6xl mx-auto text-center z-10">
      <div className="space-y-6 sm:space-y-8">

        {/* Badge */}
        <div className="inline-block">
          <div className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-sm sm:text-base lg:text-lg">
              Welcome to my digital universe
            </span>
          </div>
        </div>

        {/* REAL SEO H1 */}
        <h1
          className="text-white sr-only mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          itemProp="name"
        >
          Abdelrahman Mahmoud — Full-Stack Developer
        </h1>

        {/* Animated name (visual only) */}
        <span
          aria-hidden="true"
          className="block mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl"
        >
          {typedText}
          <span className="animate-pulse text-cyan-400">_</span>
        </span>

        {/* Role */}
        <h2
          className="text-cyan-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
          itemProp="jobTitle"
        >
          Full-Stack Web Developer
        </h2>

        {/* Description (INDEXABLE TEXT) */}
        <p
          className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
          itemProp="description"
        >
          I’m a Full-Stack Web Developer specializing in modern JavaScript, TypeScript,
          React, Next.js, and Node.js. I build fast, scalable, accessible, and SEO-optimized
          web applications from concept to deployment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10">
          <GlowingButton onClick={() => scrollToSection('projects')}>
            View My Work
          </GlowingButton>

          <GlowingButton variant="secondary" onClick={() => scrollToSection('contact')}>
            <svg
              aria-hidden="true"
              className="w-5 h-5 sm:w-6 sm:h-6 inline-block"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Get In Touch
          </GlowingButton>
        </div>

        {/* Social Links */}
        <nav
          aria-label="Social links"
          className="flex gap-6 sm:gap-8 justify-center mt-8 sm:mt-10"
        >
          <a href="https://github.com/abdo6999" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-gray-400 hover:text-cyan-400 transition-colors">
            {/* GitHub SVG */}
          </a>

          <a href="https://www.linkedin.com/in/abdelrahman-mahmoud-akl/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-gray-400 hover:text-cyan-400 transition-colors">
            {/* LinkedIn SVG */}
          </a>

          <a href="mailto:abdelrahman.mahmoud.elsaeed@gmail.com" aria-label="Send email" className="text-gray-400 hover:text-cyan-400 transition-colors">
            {/* Mail SVG */}
          </a>

          <a href="https://wa.me/201095160726" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-cyan-400 transition-colors">
            {/* WhatsApp SVG */}
          </a>

          <a href="https://www.facebook.com/abdoakl236/" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile" className="text-gray-400 hover:text-cyan-400 transition-colors">
            {/* Facebook SVG */}
          </a>
        </nav>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg
          aria-hidden="true"
          className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Structured data helpers */}
      <meta
        itemProp="knowsAbout"
        content="Angular, TypeScript, JavaScript, HTML5, CSS3, SCSS, Responsive Web Design, ASP.NET Core, C#, Entity Framework Core, SQL Server, RESTful APIs, Authentication, Authorization, CI/CD Pipelines, Docker, GitHub Actions, AWS, Netlify, Unit Testing, Integration Testing, Debugging, Performance Optimization"
      />
      <meta itemProp="url" content="https://abdelrahman-mahmoud.netlify.app/" />
      <link itemProp="sameAs" href="https://github.com/abdo6999" />
      <link itemProp="sameAs" href="https://www.linkedin.com/in/abdelrahman-mahmoud-akl/" />
    </header>
  </article>

  );
}

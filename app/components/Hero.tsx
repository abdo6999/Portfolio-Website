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
        <span aria-hidden="true" className="text-white block mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Hello, I am{' '}
          <span className="sr-only">Abdelrahman Mahmoud</span>
          <span aria-hidden="true" className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {typedText}
            <span className="animate-pulse text-cyan-400">_</span>
          </span>
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
Crafting innovative and accessible digital experiences that help businesses grow. I design and build user-friendly, responsive web applications that engage visitors, improve usability, and deliver measurable results from start to finish.        </p>

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
            <svg aria-hidden="true" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-1-.02-1.95-3.2.69-3.88-1.54-3.88-1.54-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.67 1.24 3.32.95.1-.75.4-1.24.73-1.53-2.55-.29-5.23-1.28-5.23-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.17 1.18.92-.26 1.9-.39 2.88-.39s1.96.13 2.88.39c2.2-1.5 3.17-1.18 3.17-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.42-5.25 5.71.41.35.78 1.03.78 2.07 0 1.5-.01 2.71-.01 3.08 0 .3.21.66.79.55C20.71 21.38 24 17.08 24 12 24 5.73 18.27.5 12 .5z"/></svg>
          </a>

          <a href="https://www.linkedin.com/in/abdelrahman-mahmoud-akl/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <svg aria-hidden="true" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.1 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.75v2.2h.05c.52-.98 1.8-2.02 3.7-2.02 3.96 0 4.7 2.6 4.7 5.98V24h-4v-7.5c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.98V24h-4V8z"/></svg>
          </a>

          <a href="mailto:abdelrahman.mahmoud.elsaeed@gmail.com" aria-label="Send email" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <svg aria-hidden="true" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>

          <a href="https://wa.me/201095160726" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <svg aria-hidden="true" fill="currentColor" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8"  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" />
                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" />
              </svg>
          </a>

          <a href="https://www.facebook.com/abdoakl236/" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <svg aria-hidden="true" className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.2v-2.9h2.2V9.6c0-2.2 1.3-3.4 3.3-3.4.95 0 1.95.17 1.95.17v2.2h-1.12c-1.1 0-1.44.68-1.44 1.38v1.67h2.46l-.39 2.9h-2.07v7A10 10 0 0022 12z"/></svg>
          </a>
        </nav>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
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

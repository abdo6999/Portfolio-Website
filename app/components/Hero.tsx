"use client";

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail, Facebook, Phone } from 'lucide-react';
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
    <section id="hero" className="snap-start min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="inline-block"
          >
            <div className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent text-sm sm:text-base lg:text-lg">
                Welcome to my digital universe
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Hello, I am{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {typedText}
              <span className="animate-pulse text-cyan-400">_</span>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <h2 className="text-cyan-300 text-xl sm:text-2xl md:text-3xl lg:text-4xl">Full-Stack Developer</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
              Crafting innovative digital experiences with modern technologies.
              Specialized in building scalable web applications from concept to deployment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-10"
          >
            <GlowingButton onClick={() => scrollToSection('projects')}>
              View My Work
            </GlowingButton>
            <GlowingButton variant="secondary" onClick={() => scrollToSection('contact')}>
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              Get In Touch
            </GlowingButton>
          </motion.div>

          {/* --- Social Icons --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex gap-6 sm:gap-8 justify-center mt-8 sm:mt-10"
          >
            <a 
              href="https://github.com/abdo6999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Github className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdelrahman-mahmoud-akl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </a>
            <a 
              href="mailto:abdelrahman.mahmoud.elsaeed@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </a>
            <a 
              href="https://wa.me/201095160726"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </a>
            <a 
              href="https://www.facebook.com/abdoakl236/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              <Facebook className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}

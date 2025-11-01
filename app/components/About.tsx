"use client";

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Languages, Download } from 'lucide-react';
import { GlowingButton } from './GlowingButton';

export function About() {
  const personalInfo = [
    { icon: Mail, label: 'Email', value: 'abdelrahman.mahmoud.elsaeed@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+20 109 516 0726' },
    { icon: MapPin, label: 'Location', value: 'Cairo, Egypt' },
    { icon: Languages, label: 'Languages', value: 'Arabic, English' }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-3 sm:mb-4 text-white">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8 sm:mb-10 md:mb-12 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative h-full bg-gray-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-cyan-400/50 transition-all">
              <h3 className="mb-4 sm:mb-6 text-cyan-300">Professional Profile</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                I&apos;m a passionate Full-Stack Developer with expertise in creating robust, 
                scalable web applications. I combine creative problem-solving with technical 
                excellence to deliver exceptional digital solutions.
              </p>
              <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                With a strong foundation in both frontend and backend technologies, 
                I bring ideas to life through clean code, modern design patterns, 
                and cutting-edge development practices.
              </p>
              
              <a
                href="https://drive.google.com/uc?export=download&id=1xC8EL_nFQHnHF2tgCM2OMunOLc0HijcI"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlowingButton>
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download CV
                </GlowingButton>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-3 sm:space-y-4"
          >
            {personalInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-gray-900/40 backdrop-blur-md border border-purple-500/30 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:border-purple-400/50 transition-all">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-600/20 border border-cyan-500/30 flex-shrink-0">
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-400 text-xs sm:text-sm">{info.label}</p>
                      <p className="text-white truncate sm:whitespace-normal">{info.value}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

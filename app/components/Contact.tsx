"use client";
import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MessageSquare, User } from 'lucide-react';
import { GlowingButton } from './GlowingButton';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.send('service_swcrbaa', 'template_izdr5lh', templateParams, 'F1APoqixtwh_KETbq');
      setStatusMessage('✅ Your message has been sent. Thank you!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('FAILED...', error);
      setStatusMessage('❌ Sorry, there was an error sending your message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="snap-start min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center mb-4 text-white">
            Get In{' '}
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-cyan-500 to-purple-600 mx-auto mb-8 rounded-full" />
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities and ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-purple-600/20 rounded-2xl blur-2xl" />
          <div className="relative bg-gray-900/40 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  <User aria-hidden="true" className="w-4 h-4 inline mr-2" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  <Mail aria-hidden="true" className="w-4 h-4 inline mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  <MessageSquare aria-hidden="true" className="w-4 h-4 inline mr-2" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <div className="flex justify-center">
                <GlowingButton type="submit" disabled={loading}>
                  <Send className="w-5 h-5" />
                  {loading ? 'Sending...' : 'Send Message'}
                </GlowingButton>
              </div>
              {statusMessage && (
                <div role="status" aria-live="polite" className="mt-4 text-center text-sm text-gray-200">
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

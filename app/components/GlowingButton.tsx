"use client";

import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlowingButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean; // ✅ Add disabled prop
}

export function GlowingButton({ 
  children, 
  onClick, 
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false, // ✅ default to false
}: GlowingButtonProps) {
  const isPrimary = variant === 'primary';
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled} // ✅ pass disabled to button
      className={`relative px-8 py-3 rounded-lg overflow-hidden group ${
        disabled ? 'opacity-60 cursor-not-allowed' : ''
      } ${className}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <div className={`absolute inset-0 ${
        isPrimary 
          ? 'bg-gradient-to-r from-cyan-500 to-purple-600' 
          : 'bg-gradient-to-r from-magenta-500 to-pink-600'
      }`} />
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
        isPrimary
          ? 'bg-gradient-to-r from-cyan-400 to-purple-500'
          : 'bg-gradient-to-r from-magenta-400 to-pink-500'
      }`} />
      <div className={`absolute inset-0 blur-xl opacity-50 group-hover:opacity-75 transition-opacity ${
        isPrimary
          ? 'bg-gradient-to-r from-cyan-500 to-purple-600'
          : 'bg-gradient-to-r from-magenta-500 to-pink-600'
      }`} />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

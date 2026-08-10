import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  icon: Icon,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-colors cursor-pointer";
  
  const variants = {
    primary: "bg-[#0071E3] hover:bg-[#0077ED] text-white py-3 px-6 text-sm shadow-sm",
    secondary: "bg-[#F5F5F7] hover:bg-[#E8E8ED] text-[#1D1D1F] py-3 px-6 text-sm",
    outline: "border border-[#E5E5E7] hover:border-[#1D1D1F] text-[#1D1D1F] py-3 px-6 text-sm bg-transparent",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </motion.button>
  );
}

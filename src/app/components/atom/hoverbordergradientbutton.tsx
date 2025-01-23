import React from "react";
import { motion } from "framer-motion";

interface HoverBorderGradientButtonProps {
  text: string;
  url: string;
  className?: string; // Optional prop
}

const HoverBorderGradientButton: React.FC<HoverBorderGradientButtonProps> = ({ text, url, className = "" }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium transition-all bg-transparent rounded-lg group ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={text}
    >
      <span className="absolute w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
      <span className="relative px-6 py-3 transition-all bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
        <span className="relative text-white">{text}</span>
      </span>
    </motion.a>
  );
};

export default HoverBorderGradientButton;

import React from "react";
import { motion } from "framer-motion";
import { codeblock } from "@/app/images";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTI3MmEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOTEzOS0xLjc5MDg2MS00LTQtNHMtNCAxLjc5MDg2MS00IDQgMS43OTA4NjEgNCA0IDQgNC0xLjc5MDg2MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Welcome to Fun
              </span>
              <br />
              <span className="text-white">Code Constructor</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Empower your digital presence with cutting-edge solutions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={codeblock.src}
              alt="Digital Transformation"
              className="w-full h-full object-cover rounded-2xl"
            />
            
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

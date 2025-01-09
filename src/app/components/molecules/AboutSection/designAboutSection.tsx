import React from "react";
import { MdDesignServices } from "react-icons/md";
import { BsPaletteFill } from "react-icons/bs";
import { IoColorPaletteSharp } from "react-icons/io5";
import { FaPaintBrush, FaRulerCombined, FaAward, FaClock, FaUserFriends, FaMedal } from "react-icons/fa";

const AboutDesign = () => {
  const features = [
    {
      icon: <BsPaletteFill className="text-4xl text-pink-400" />,
      title: "Creative Design",
      description: "Unique and eye-catching banner designs"
    },
    {
      icon: <IoColorPaletteSharp className="text-4xl text-pink-400" />,
      title: "Custom Colors",
      description: "Professional color schemes and palettes"
    },
    {
      icon: <FaPaintBrush className="text-4xl text-pink-400" />,
      title: "Design Elements",
      description: "Premium graphics and visual elements"
    },
    {
      icon: <FaRulerCombined className="text-4xl text-pink-400" />,
      title: "Custom Sizes",
      description: "Flexible dimensions for all platforms"
    }
  ];

  const whyChooseUs = [
    {
      icon: <FaAward className="text-4xl text-pink-400" />,
      title: "Expert Team",
      description: "Our designers bring years of experience and creativity to every project"
    },
    {
      icon: <FaClock className="text-4xl text-pink-400" />,
      title: "Quick Turnaround",
      description: "Fast delivery without compromising on quality"
    },
    {
      icon: <FaUserFriends className="text-4xl text-pink-400" />,
      title: "Customer Satisfaction",
      description: "100% satisfaction guaranteed with unlimited revisions"
    },
    {
      icon: <FaMedal className="text-4xl text-pink-400" />,
      title: "Quality Assurance",
      description: "Premium quality designs that match your brand identity"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-800 to-rose-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <MdDesignServices className="text-6xl text-pink-400 mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
            Professional Banner Design Services
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Transform your brand with our premium banner design services. Perfect for social media, websites, and marketing campaigns.
          </p>
          <div className="flex justify-center gap-4">
            <button className="py-3 px-6 text-lg rounded-full bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
              View Portfolio
            </button>
            <button className="py-3 px-6 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-pink-800 font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-200">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Premium Design Package</h2>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 max-w-4xl mx-auto shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5"
                alt="Design workspace"
                className="rounded-lg w-full md:w-1/2 h-64 object-cover shadow-lg"
              />
              <div className="text-left md:w-1/2">
                <h3 className="text-2xl font-bold text-white mb-4">Package Includes:</h3>
                <ul className="text-gray-200 space-y-3">
                  <li className="flex items-center">✓ Custom Banner Design</li>
                  <li className="flex items-center">✓ Social Media Templates</li>
                  <li className="flex items-center">✓ Multiple Revisions</li>
                  <li className="flex items-center">✓ Source Files</li>
                  <li className="flex items-center">✓ 24/7 Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* New Why Choose Us Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDesign;
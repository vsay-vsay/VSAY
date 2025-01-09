import React from "react";
import PropTypes from "prop-types";
import { FaPalette, FaImage, FaLaptopCode, FaPencilRuler, FaMobileAlt, FaBoxOpen } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, imageUrl }) => {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1557821552-17105176677c";
          }}
        />
      </div>
      <div className="flex items-center mb-4">
        <div className="p-3 bg-white bg-opacity-20 backdrop-blur-lg rounded-full">
          <Icon className="text-white text-2xl" />
        </div>
        <h3 className="ml-4 text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-white text-opacity-90">{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired, // Adjusted to PropTypes.func
  imageUrl: PropTypes.string.isRequired,
};

const DesignServices = () => {
  const services = [
    {
      id: 1,
      title: "Custom Image Design",
      description: "Professional photo editing and retouching services for stunning visuals.",
      icon: FaImage,
      imageUrl: "https://images.unsplash.com/photo-1542744094-3a31f272c490",
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "Create intuitive and engaging user interfaces for web and mobile.",
      icon: FaPalette,
      imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
    {
      id: 3,
      title: "Web Development",
      description: "Modern and responsive website development using latest technologies.",
      icon: FaLaptopCode,
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    },
    {
      id: 4,
      title: "Graphic Design",
      description: "Creative designs for branding, marketing materials, and social media.",
      icon: FaPencilRuler,
      imageUrl: "https://images.unsplash.com/photo-1626785774625-0b1c2c651815",
    },
    {
      id: 5,
      title: "Mobile App Design",
      description: "Custom mobile application designs for iOS and Android platforms.",
      icon: FaMobileAlt,
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    },
    {
      id: 6,
      title: "Brand Identity",
      description: "Comprehensive branding solutions to establish your unique identity.",
      icon: FaBoxOpen,
      imageUrl: "https://images.unsplash.com/photo-1553835973-dec43bfddbeb",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white">
              <h2 className="text-2xl font-bold">Fast Turnaround Time</h2>
              <p className="mt-2">Get your designs delivered within 48 hours with our premium service</p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-opacity-90 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Design Services</h2>
          <p className="text-xl text-white text-opacity-90 max-w-3xl mx-auto">
            Transform your ideas into reality with our professional design services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignServices;

import React from "react";
import { FaSearch, FaHashtag, FaAd, FaChartLine, FaEnvelope, FaMobileAlt } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
}

const services: Service[] = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Improve your website's search engine rankings with our expert SEO services.",
    icon: FaSearch,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3",
  },
  {
    title: "Social Media Marketing",
    description: "Engage your target audience on social media platforms with compelling content.",
    icon: FaHashtag,
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Reach your ideal customers through targeted online advertising campaigns.",
    icon: FaAd,
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3",
  },
  {
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your marketing strategies and ROI.",
    icon: FaChartLine,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
  },
  {
    title: "Email Marketing",
    description: "Create personalized email campaigns that convert subscribers into customers.",
    icon: FaEnvelope,
    image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3",
  },
  {
    title: "Mobile Marketing",
    description: "Reach customers on their mobile devices with targeted campaigns and apps.",
    icon: FaMobileAlt,
    image: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3",
  },
];

const WobbleCardDigitalMarketing = ({ title, description, icon: Icon, image }: Service) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="absolute -inset-x-2 -top-2 z-0 scale-[0.85] transform-gpu blur-3xl transition duration-500 group-hover:scale-100 group-hover:opacity-70 animate-pulse">
        <div className="h-full w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 animate-gradient"></div>
      </div>
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="relative p-6">
        <div className="mb-4 flex items-center">
          <Icon className="mr-3 h-6 w-6 text-blue-600 animate-bounce" />
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const DigitalMarketingApplications = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 animate-gradient-slow"></div>
        <div className="absolute inset-0 opacity-50">
          <div className="absolute h-56 w-56 -left-24 -top-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute h-56 w-56 -right-24 -bottom-24 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute h-56 w-56 left-1/2 top-1/2 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl animate-fade-in">
            Digital Marketing Applications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 animate-fade-in animation-delay-500">
            Transform your online presence with our comprehensive digital marketing solutions tailored to your business needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <WobbleCardDigitalMarketing
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingApplications;
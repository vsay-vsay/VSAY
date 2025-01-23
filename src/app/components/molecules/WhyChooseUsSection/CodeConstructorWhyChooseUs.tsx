import { useEffect, useState } from "react";
import { FaRocket, FaUsers, FaShieldAlt, FaChartLine, FaCog, FaGem } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";


const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FaRocket className="text-4xl text-indigo-600" />,
      title: "User-Friendly Interface",
      description: "Intuitive drag-and-drop functionality makes coding accessible to everyone, from beginners to experts"
    },
    {
      icon: <FaUsers className="text-4xl text-indigo-600" />,
      title: "Accelerated Learning",
      description: "Learn coding concepts quickly through visual representation and immediate feedback"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-indigo-600" />,
      title: "Real-Time Code Preview",
      description: "Instantly see the code and output, bridging the gap between visual blocks and real programming"
    },
    {
      icon: <FaChartLine className="text-4xl text-indigo-600" />,
      title: "Multi-Language Support",
      description: "Generate code in various programming languages, catering to diverse project requirements"
    },
    {
      icon: <FaCog className="text-4xl text-indigo-600" />,
      title: "Gamified Experience",
      description: "Earn badges, unlock achievements, and enjoy a fun, engaging learning journey"
    },
    {
      icon: <FaGem className="text-4xl text-indigo-600" />,
      title: "Community and Support",
      description: "Join a thriving community of users, access shared resources, and receive expert guidance"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
            Why Choose Us
            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 transform origin-left"></span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why leading businesses trust our innovative solutions
          </p>
        </div>

        <div className="relative h-[400px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-500 transform ${
                index === activeIndex
                  ? "opacity-100 translate-x-0"
                  : index < activeIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <div className="p-8 rounded-lg bg-white shadow-xl">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 p-4 bg-indigo-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {features.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? "bg-indigo-600" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>

        <div className="absolute inset-0 z-[-1] opacity-10">
          <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
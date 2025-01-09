import React, { useState } from "react";
import { FaChartBar, FaDatabase, FaChartPie, FaChartLine, FaTable, FaMicrochip } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const DataAnalysisService = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      id: 1,
      title: "Statistical Analysis",
      icon: <FaChartBar className="w-6 h-6" />,
      description: "Comprehensive statistical analysis for data-driven decisions",
      details: "Our statistical analysis service includes hypothesis testing, regression analysis, and predictive modeling to help you make informed business decisions."
    },
    {
      id: 2,
      title: "Data Mining",
      icon: <FaDatabase className="w-6 h-6" />,
      description: "Extract valuable insights from large datasets",
      details: "Utilize advanced data mining techniques to discover patterns, anomalies, and correlations in your data that drive business value."
    },
    {
      id: 3,
      title: "Visualization",
      icon: <FaChartPie className="w-6 h-6" />,
      description: "Transform data into compelling visual stories",
      details: "Create interactive dashboards and data visualizations that communicate insights effectively to stakeholders."
    },
    {
      id: 4,
      title: "Time Series Analysis",
      icon: <FaChartLine className="w-6 h-6" />,
      description: "Analyze temporal data patterns and trends",
      details: "Forecast future trends and understand seasonal patterns in your time-based data for better planning and decision-making."
    },
    {
      id: 5,
      title: "Data Cleansing",
      icon: <FaTable className="w-6 h-6" />,
      description: "Ensure data quality and consistency",
      details: "Professional data cleaning and preparation services to ensure your analysis is based on high-quality, reliable data."
    },
    {
      id: 6,
      title: "Machine Learning",
      icon: <FaMicrochip className="w-6 h-6" />,
      description: "Advanced ML solutions for complex problems",
      details: "Implement cutting-edge machine learning algorithms to automate processes and gain predictive insights."
    }
  ];

  const handleServiceClick = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Data Analysis Services</h1>
          <p className="text-xl text-gray-600">Transform your data into actionable insights</p>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="border border-gray-200 rounded-lg bg-white overflow-hidden"
            >
              <div
                className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between"
                onClick={() => handleServiceClick(service.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-blue-500">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                {expandedService === service.id ? (
                  <FaChevronDown className="text-gray-400 w-5 h-5" />
                ) : (
                  <FaChevronRight className="text-gray-400 w-5 h-5" />
                )}
              </div>
              
              {expandedService === service.id && (
                <div className="px-4 pb-4">
                  <div className="pl-14">
                    <p className="text-gray-700 mb-4">{service.details}</p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(service);
                      }}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="text-blue-500 mr-3">{selectedService.icon}</div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      <IoMdClose className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-600 mb-4">{selectedService.description}</p>
                    <p className="text-gray-700">{selectedService.details}</p>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={closeModal}
                  >
                    Request Service
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DataAnalysisService;
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

export const Services = () => {
  // Sample services data with correct image paths
  const allServices = [
    {
      id: 1,
      title: "Patrol",
      description: "24hr patrol with 2-visits per 12hrs shift",
      icon: "/security-officer.png", // Path corrected for public folder
      img: "/patrol_img.jpg", // Image for background and link
      link: "/services/patrol.png",
    },
    {
      id: 2,
      title: "Manned Guarding",
      description: "We provide manned guarding service for a whole cross section of clients",
      icon: "/manned guarding.png", // Path corrected for public folder
      img: "/vip.jpg", // Image for background and link
      link: "/services/manned-guarding",
    },
    {
      id: 3,
      title: "Dog Services",
      description: "Mature & well-trained dogs which come with a dog handler(as a Package)",
      icon: "/dog services.png", // Path corrected for public folder
      img: "/dog_patrol_img.jpg", // Image for background and link
      link: "/services/dog-services",
    },
    {
      id: 4,
      title: "CCTV Installation",
      description: "Professional CCTV installation and monitoring services",
      icon: "cctv-camera.png", // Add your actual icon
      img: "/cctv.jpg", // Add your actual image
      link: "/services/cctv-camera.png",
    },
    {
      id: 5,
      title: "Security Systems",
      description: "Advanced security system solutions for all premises",
      icon: "/security-system.png", // Add your actual icon
      img: "/security system.jpg", // Add your actual image
      link: "/services/security-systems",
    },
  ];

  // State to control which services are currently visible in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleServices = 3; // Number of services visible at once

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? allServices.length - visibleServices : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= allServices.length - visibleServices ? 0 : prevIndex + 1
    );
  };

  // Get currently visible services
  const currentServices = () => {
    return allServices.slice(currentIndex, currentIndex + visibleServices);
  };

  return (
    <section className="py-12 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-6xl font-bold text-indigo-800">OUR SERVICES</h2>
          <p className="text-gray-700 md:text-4xl mt-1">
            Explore our wide range of security services and find the perfect
            solution for your needs
          </p>
        </div>

        {/* Services Cards */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {currentServices().map((service) => (
              <div 
                key={service.id} 
                className="relative overflow-hidden h-80 group"
                style={{ 
                  clipPath: "polygon(0 0, 100% 0, 100% 86%, 86% 100%, 0 100%)" 
                }}
              >
                {/* Background Image - Using service.img */}
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:blur-md"
                />
                
                {/* Dark Overlay - visible on hover */}
                <div className="absolute inset-0 bg-gray-900 opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                {/* Icon Circle - always visible */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center">
                    <img src={service.icon} alt="" className="w-9 h-9" aria-hidden="true" />
                  </div>
                </div>
                
                {/* Service title - always visible */}
                <div className="absolute bottom-16 left-6 z-10">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                    {/* {service.title} */}
                  </h3>
                </div>
                
                {/* Content that appears on hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white mb-6">
                    {service.description}
                  </p>
                  
                  {/* Read More Button */}
                  <div>
                    {/* <Link
                      to={service.link}
                      className="bg-indigo-800 text-white px-5 py-2 rounded flex items-center w-fit"
                    >
                      Read More 
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center items-center gap-3 mb-8">
          <button
            onClick={goToPrevious}
            className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="w-10 h-10 flex items-center justify-center bg-indigo-800 text-white rounded-full"
            aria-label="Next services"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            to="/services"
            className="border border-indigo-800 text-indigo-800 px-12 py-2 rounded flex items-center justify-center"
          >
            View All
            <ExternalLink className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
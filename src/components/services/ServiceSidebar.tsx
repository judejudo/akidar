import React from "react";
import { Link } from "react-router-dom";

const ServiceSidebar = () => {
  // Define the service items with their paths and icons
  const serviceItems = [
    {
      name: "Patrol",
      path: "/services/patrol",
      icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/59c88dd37c820d10879865d0d03314afe3756f20?placeholderIfAbsent=true"
    },
    {
      name: "Manned Guarding",
      path: "/services/manned-guarding",
      icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/68e4b90487443cd6548c8ee5c334c0c8efe71677?placeholderIfAbsent=true",
      active: true
    },
    {
      name: "Event Security",
      path: "/events",
      icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/4f0ced58a4a80933867438a1d7d98750bca5eb94?placeholderIfAbsent=true"
    },
    {
      name: "Dog Services",
      path: "/services/dog-services",
      icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/30cd076b6d557d09bd446f6fa5708bc66f30608a?placeholderIfAbsent=true"
    },
    {
      name: "Security Systems",
      path: "/services/security-systems",
      icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e1534ed0e0b44c204ea367f575c8050f74a84a8e?placeholderIfAbsent=true"
    },
    {
      name: "CCTV Installation",
      path: "/services/cctv-installation",
      icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/012d8afdf9a1b3afd963c73b110a7810228b4ab5?placeholderIfAbsent=true"
    },
    {
      name: "Security Fencing",
      path: "/services/security-fencing",
      icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/24d9c908b2609213303a096a0e91422ecdcb71be?placeholderIfAbsent=true"
    }
  ];

  return (
    <div className="flex flex-col relative aspect-[0.492] w-full items-stretch text-[25px] text-white font-semibold py-[67px] rounded-[10px] max-md:mt-[22px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/c3ef67f6992e833a79e849edd6d4c2f7fa8d3249?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Background"
      />
      
      {serviceItems.map((item, index) => (
        <Link 
          key={index} 
          to={item.path}
          className={`relative flex gap-3 ${
            index > 0 ? "mt-[30px]" : "ml-3.5 max-md:ml-2.5"
          } ${
            item.active 
              ? "bg-[rgba(246,139,35,1)] pt-[5px] pb-3.5 px-3.5" 
              : index === 0 
                ? "whitespace-nowrap" 
                : "px-3.5"
          }`}
        >
          <img
            src={item.icon}
            className="aspect-[1] object-contain w-[35px] shrink-0"
            alt={item.name}
          />
          <div className={`${index > 1 ? "basis-auto" : ""} mt-[11px] ${
            index === 1 ? "grow shrink w-[228px]" : 
            index === 4 ? "grow shrink w-[213px]" : 
            index === 5 ? "grow shrink w-[214px]" : 
            index === 6 ? "grow shrink w-[210px]" : ""
          }`}>
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ServiceSidebar;
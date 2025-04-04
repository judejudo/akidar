import React from "react";
import { Link } from "react-router-dom";

type ServiceItem = {
  name: string;
  icon: string;
  isActive?: boolean;
  path: string;
};

interface ServicesSidebarProps {
  services: ServiceItem[];
}

const ServicesSidebar: React.FC<ServicesSidebarProps> = ({ services }) => {
  return (
    <div className="flex flex-col relative aspect-[0.492] w-full items-stretch text-[25px] text-white font-semibold py-[67px] rounded-[10px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/c3ef67f6992e833a79e849edd6d4c2f7fa8d3249?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0 rounded-[10px]"
        alt="Security services background"
      />
      <div className="relative flex w-full flex-col px-3.5">
        {services.map((service, index) =>
          service.isActive ? (
            <div
              key={index}
              className="relative bg-[rgba(246,139,35,1)] flex gap-3 mt-[26px] px-3.5 py-2.5"
            >
              <img
                src={service.icon}
                className="aspect-[1] object-contain w-[35px] shrink-0"
                alt={`${service.name} icon`}
              />
              <div className="grow shrink w-[228px] mt-[11px]">
                {service.name}
              </div>
            </div>
          ) : (
            <Link 
              to={service.path} 
              key={index} 
              className="flex gap-3 mt-[35px] first:mt-0 hover:bg-[rgba(246,139,35,0.7)] px-3.5 py-2.5 rounded-sm transition-colors duration-200"
            >
              <img
                src={service.icon}
                className="aspect-[1] object-contain w-[35px] shrink-0"
                alt={`${service.name} icon`}
              />
              <div className="basis-auto mt-[11px]">{service.name}</div>
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default ServicesSidebar;
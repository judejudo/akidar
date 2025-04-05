import React, { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import ServicesSidebar from "./ServiceSidebar";

interface ServicesLayoutProps {
  children: ReactNode;
}

// Service items for the sidebar
const serviceItems = [
  { name: "Patrol", icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/59c88dd37c820d10879865d0d03314afe3756f20?placeholderIfAbsent=true", path: "/services/patrol-services" },
  { name: "Manned Guarding", icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/68e4b90487443cd6548c8ee5c334c0c8efe71677?placeholderIfAbsent=true", path: "/services/manned-guarding" },
  { name: "Event Security", icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/4f0ced58a4a80933867438a1d7d98750bca5eb94?placeholderIfAbsent=true", path: "/services/event-security" },
  { name: "Dog Services", icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/30cd076b6d557d09bd446f6fa5708bc66f30608a?placeholderIfAbsent=true", path: "/services/dog-services" },
  { name: "Security Systems", icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e1534ed0e0b44c204ea367f575c8050f74a84a8e?placeholderIfAbsent=true", path: "/services/security-systems" },
  { name: "CCTV Installation", icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/012d8afdf9a1b3afd963c73b110a7810228b4ab5?placeholderIfAbsent=true", path: "/services/cctv-installation" },
  { name: "Security Fencing", icon: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/24d9c908b2609213303a096a0e91422ecdcb71be?placeholderIfAbsent=true", path: "/services/security-fencing" },
];

const ServicesLayout: React.FC<ServicesLayoutProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Map services with active states based on current path
  const servicesWithActiveState = serviceItems.map(service => ({
    ...service,
    isActive: currentPath === service.path
  }));

  return (
    <div className="min-h-screen bg-white pt-2 pb-[49px] px-[42px] max-md:px-5">
      <div className="w-full max-w-[1218px] mx-auto max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[27%] max-md:w-full max-md:ml-0">
            <ServicesSidebar services={servicesWithActiveState} />
          </div>
          <div className="w-[73%] ml-5 max-md:w-full max-md:ml-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLayout;

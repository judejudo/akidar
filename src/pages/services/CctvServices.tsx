
import React from "react";
import ServicesLayout from "@/components/services/ServicesLayout";
import ServiceDescription from "@/components/services/ServiceDescription";

const CCTVInstallationPage: React.FC = () => {
  const cameraTypes = [
    "Bullet Cameras",
    "Dome Cameras",
    "PTZ/Speed Dome Cameras",
    "Box Cameras",
    "C-mount Cameras",
    "Covert/Desktop/Board Cameras",
    "IR (Infrared/Night Vision) Cameras",
    "Discrete Cameras",
    "Nanny Cams",
  ];

  return (
    <ServicesLayout>
      <ServiceDescription
        title="What we offer"
        description="Our experts conduct thorough surveys of your premises to determine the most suitable camera types for your specific needs, considering factors like indoor/outdoor placement, lighting conditions, and desired viewing angles."
        listItems={cameraTypes}
      />
      
      <h2 className="text-black text-2xl font-bold leading-none mt-[43px] max-md:mt-10">
        What this package includes
      </h2>

      {/* Package features */}
      <div className="mt-[33px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/dfab364770b7ea0ae43a7add96859a4f40e67c79?placeholderIfAbsent=true"
              className="aspect-[0.98] object-contain w-full grow rounded-[10px]"
              alt="CCTV System Assessment"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold mt-[53px] max-md:mt-10">
              CCTV System Assessment
              <br />
              <br />
              <span className="font-normal">
                On-site survey to assess your premises and determine the optimal camera types and placement
              </span>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/915a0805bc031fd0a6169ead6de84c9f1c8f982c?placeholderIfAbsent=true"
              className="aspect-[0.97] object-contain w-full grow mt-[38px] rounded-[10px] max-md:mt-10"
              alt="CCTV System"
            />
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
};

export default CCTVInstallationPage;
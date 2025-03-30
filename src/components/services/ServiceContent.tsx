import React from "react";

const ServiceContent: React.FC = () => {
  return (
    <div className="flex flex-col items-stretch text-2xl px-11 max-md:max-w-full max-md:px-5">
      <div className="text-[rgba(65,65,65,1)] font-normal leading-[35px] max-md:max-w-full">
        <span className="font-bold">What we offer</span>
        At AKIDAR SECURITY LIMITED, we provide professional and discreet manned
        guarding services, supported by advanced technology and logistics.
        <br />
        We serve a diverse range of clients, from multinational corporations
        requiring full security teams to small businesses needing a single
        guard.
        <br />
        <br />
        <span className="font-bold">Training & Management</span>
        <br />
        Our security personnel are fully vetted, trained, and licensed in
        accordance with Security Industry Authority (SIA) standards. Additional
        training is available to meet specific client requirements.
        <br />
        We prioritize strong management and supervision, with regular client
        meetings and staff engagement to ensure high-quality service. Our
        quality management team audits all aspects of our services to maintain
        compliance and excellence.
      </div>
      <div className="text-black font-bold leading-none mt-[35px]">
        What this package includes
      </div>
    </div>
  );
};

export default ServiceContent;

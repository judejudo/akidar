import React from "react";
import ServicesLayout from "@/components/services/ServicesLayout";
import ServiceDescription from "@/components/services/ServiceDescription";

const SecuritySystemsPage: React.FC = () => {
  return (
    <ServicesLayout>
      <ServiceDescription
        title="What we offer"
        description=" We provide a comprehensive array of security systems to meet the needs of both public and private sector clients. Our expertise covers a range of technologies designed to enhance safety and security."
      />
      
      <div className="text-[rgba(65,65,65,1)] text-2xl font-normal leading-[35px] mt-4">
        <span className="font-bold">System Design & Implementation</span>
        <br />
        Our technical team conducts thorough assessments of each client's
        premises to understand their specific security requirements. Based
        on this analysis, we design and install the most effective intrusion
        alarm systems, ranging from single-site setups to fully integrated
        and networked solutions for multiple locations. We also offer
        ongoing maintenance, monitoring, and backup services for these
        systems at a mutually agreed monthly fee.
      </div>
      
      <h2 className="text-black text-2xl font-bold leading-none mt-[43px] max-md:mt-10">
        What this package includes
      </h2>

      {/* Package features */}
      <div className="mt-[33px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e8f8ff8d3f37e475db92ecd3119c4f864cf91604?placeholderIfAbsent=true"
              className="aspect-[0.98] object-contain w-full grow rounded-[10px]"
              alt="Intrusion Alarm System"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold mt-[53px] max-md:mt-10">
              Intrusion Alarm System
              <br />
              <br />
              <span className="font-normal">
                Customized design and installation of an intrusion alarm system tailored to your property
              </span>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/0f3c2673d4b4d07e5cb55da828adc9a973db785f?placeholderIfAbsent=true"
              className="aspect-[0.97] object-contain w-full grow mt-[38px] rounded-[10px] max-md:mt-10"
              alt="Security Systems"
            />
          </div>
        </div>
      </div>

      {/* Additional features section */}
      <div className="w-full mt-[46px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold">
              Control Room Monitoring
              <br />
              <br />
              <span className="font-normal">
                On-site or remote monitoring of alarms and access control via our dedicated control room facilities
              </span>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/50bad0245bc297d9a00b39ab45d7081fad04f080?placeholderIfAbsent=true"
              className="aspect-[0.97] object-contain w-full grow rounded-[10px]"
              alt="Control Room Monitoring"
            />
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch text-2xl text-[rgba(65,65,65,1)] font-semibold max-md:mt-10">
              <div className="z-10 flex gap-[13px]">
                <div className="grow shrink w-[302px] basis-auto">
                  Incident Management
                  <br />
                  <br />
                  <span className="font-normal">
                    Detection and management of various incidents, including
                    unauthorized access, fire alerts, and emergency service
                    notifications
                  </span>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/d0ee972771d4e776168fb7a24d103faf73fd7c03?placeholderIfAbsent=true"
                  alt="Divider"
                  className="aspect-[0.03] object-contain w-[7px] shrink-0 mt-5"
                />
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e5ceea96e102b2641388358ed80934de96dfb9ab?placeholderIfAbsent=true"
                alt="Incident Management Icon"
                className="aspect-[1] object-contain w-[41px] max-md:mr-0.5"
              />
            </div>
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
};

export default SecuritySystemsPage;
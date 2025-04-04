import React from "react";
import ServicesLayout from "../../components/services/ServicesLayout";
import ServiceDescription from "../../components/services/ServiceDescription";


const EventSecurityPage: React.FC = () => {
  return (
    <ServicesLayout>
      <ServiceDescription
        title="What we offer"
        description=" We provide specialized personnel for a wide range of needs, offering full-time, part-time, or emergency coverage to ensure your event is secure."
      />
      
      <div className="text-[rgba(65,65,65,1)] text-2xl font-normal leading-[35px] mt-4">
        <span className="font-bold">Training & Expertise</span>
        <br />
        Our managers and instructors rigorously train our guards and
        event staff, equipping them with extensive experience in
        securing various venues and providing diverse services. This
        ensures they are well-prepared to handle the specific challenges
        of events such as private parties, weddings, sports events,
        tradeshows, and conventions.
      </div>
      
      <h2 className="text-black text-2xl font-bold leading-none mt-[43px] max-md:mt-10">
        What this package includes
      </h2>

      {/* Package features */}
      <div className="w-full mt-[33px]">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Package 1: Image only */}
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/7e9a35d58cfaf63111e9ef93f98d3b5927cb97c5?placeholderIfAbsent=true"
              className="aspect-[0.98] object-contain w-full grow rounded-[10px]"
              alt="Service package"
            />
          </div>

          {/* Package 2: Text only */}
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="mt-16 max-md:mt-10 text-[rgba(65,65,65,1)] text-2xl font-semibold">
              Experienced Event Security Personnel
              <br />
              <br />
              <span className="font-normal">
                Highly trained security guards and event staff with experience in diverse event settings
              </span>
            </div>
          </div>

          {/* Package 3: Image only */}
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="mt-[38px] max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/015590ec4e101c5adfc535be53be8e68315e240c?placeholderIfAbsent=true"
                className="aspect-[0.98] object-contain w-full grow rounded-[10px]"
                alt="Service package"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional features section */}
      <div className="w-full mt-[46px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {/* Service Feature */}
          <div className="w-[64%] max-md:w-full max-md:ml-0">
            <div className="max-md:max-w-full max-md:mt-10">
              <div className="flex gap-5 max-md:mt-[27px] max-md:flex-col">
                <div className="w-[54%] max-md:w-full">
                  <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold">
                    Flexible Coverage Options
                    <br />
                    <br />
                    <span className="font-normal">
                      Availability for full-time, part-time, or emergency security requirements
                    </span>
                  </div>
                </div>
                <div className="w-[46%] max-md:w-full">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/3888f1e77620daa9f0f83083217441d6cb50eb9c?placeholderIfAbsent=true"
                    className="aspect-[0.97] object-contain w-full grow rounded-[10px]"
                    alt="Flexible Coverage Options"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Security for Various Event Types */}
          <div className="w-[36%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col items-stretch text-2xl text-[rgba(65,65,65,1)] font-semibold max-md:mt-10">
              <div className="z-10 flex gap-[13px]">
                <div className="grow shrink w-[302px] basis-auto">
                  Security for Various Event Types
                  <br />
                  <br />
                  <span className="font-normal">
                    Expertise in securing private parties, weddings, sports
                    events, tradeshows, conventions, and more
                  </span>
                </div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/d0ee972771d4e776168fb7a24d103faf73fd7c03?placeholderIfAbsent=true"
                  className="aspect-[0.03] object-contain w-[7px] shrink-0 mt-5"
                  alt="Divider"
                />
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e5ceea96e102b2641388358ed80934de96dfb9ab?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-[41px] max-md:mr-0.5"
                alt="Security icon"
              />
            </div>
          </div>
        </div>
      </div>
    </ServicesLayout>
  );
};

export default EventSecurityPage;

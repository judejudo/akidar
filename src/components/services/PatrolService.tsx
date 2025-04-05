
import React from "react";
import { cn } from "@/lib/utils";

interface ServiceDescriptionProps {
  title: string;
  description: string;
}

const ServiceDescription: React.FC<ServiceDescriptionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="text-[rgba(65,65,65,1)] text-2xl font-normal leading-[35px]">
      <span className="font-bold">{title}</span>
      {description}
    </div>
  );
};

interface FeatureGridProps {
  children: React.ReactNode;
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`w-full max-w-full ${className}`}>
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {children}
      </div>
    </div>
  );
};

interface FeatureColumnProps {
  children: React.ReactNode;
  width?: string;
  className?: string;
}

const FeatureColumn: React.FC<FeatureColumnProps> = ({
  children,
  width = "w-[33%]",
  className = "",
}) => {
  return (
    <div className={cn(`${width} ${className} max-md:w-full max-md:ml-0`)}>
      {children}
    </div>
  );
};

const PatrolService: React.FC = () => {
  return (
    <section className="flex flex-col overflow-hidden">
      <ServiceDescription
        title="What we offer"
        description="Our dedicated supervisors conduct regular 24-hour patrols to ensure the vigilance and effectiveness of our security guards.
        
        "
      />

      <ServiceDescription
        title="Supervision & Support
        "
        description="Our supervisors maintain a constant presence with a minimum of two visits per 12-hour shift to each work-station. These patrols are conducted using company vehicles equipped with portable radios, allowing for immediate communication with our guards and direct contact with the Kenya Police for swift response in emergency situations."
      />

      <h2 className="text-black text-2xl font-bold leading-none self-center mt-[43px] max-md:mt-10">
        What this package includes
      </h2>

      <FeatureGrid className="w-[932px] mr-[86px] mt-5 max-md:mr-2.5">
        <FeatureColumn>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/c4a8d3224c7e28f9e99b883fe70c7051cf2c52b1?placeholderIfAbsent=true"
            alt="Security patrol service"
            className="aspect-[0.98] object-contain w-full grow rounded-[10px] max-md:mt-[31px]"
          />
        </FeatureColumn>

        <FeatureColumn className="ml-5">
          <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold self-stretch my-auto max-md:mt-10">
            Regular Patrol Visits
            <br />
            <br />
            <span className="font-normal">
              Supervisory visits at least twice per 12-hour shift to ensure
              guard alertness and adherence to protocols
            </span>
          </div>
        </FeatureColumn>

        <FeatureColumn className="ml-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/18fd80f71a08c945ff5d9f324db8b7d14c9567b5?placeholderIfAbsent=true"
            alt="Security patrol service"
            className="aspect-[0.97] object-contain w-full grow mt-[38px] rounded-[10px] max-md:mt-10"
          />
        </FeatureColumn>
      </FeatureGrid>

      <FeatureGrid className="w-[939px] mr-10 mt-[46px] max-md:mr-2.5 max-md:mt-10">
        <FeatureColumn width="w-[66%]">
          <div className="grow max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[54%] max-md:w-full max-md:ml-0">
                <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold max-md:mt-[27px]">
                  Mobile Patrol Unit
                  <br />
                  <br />
                  <span className="font-normal">
                    Dedicated company patrol vehicles for efficient and
                    widespread coverage.
                  </span>
                </div>
              </div>

              <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/f59c75479aa7a09eda84938c7286073b2a2159da?placeholderIfAbsent=true"
                  alt="Mobile patrol unit"
                  className="aspect-[0.97] object-contain w-full grow rounded-[10px] max-md:mt-[27px]"
                />
              </div>
            </div>
          </div>
        </FeatureColumn>

        <FeatureColumn width="w-[34%]" className="ml-5">
          <div className="text-[rgba(65,65,65,1)] text-2xl font-semibold max-md:mt-10">
            Communication Equipment
            <br />
            <br />
            <span className="font-normal">
              Portable radios for seamless communication between supervisors and
              on-site guards.
            </span>
          </div>
        </FeatureColumn>
      </FeatureGrid>

      <FeatureGrid className="w-[979px] max-w-full mt-[26px]">
        <FeatureColumn width="w-6/12">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/b2f19ded9a5a789ee381ec1511c258d7b9814e13?placeholderIfAbsent=true"
            alt="Police liaison"
            className="aspect-[2.25] object-contain w-full self-stretch my-auto rounded-[10px] max-md:max-w-full max-md:mt-10"
          />
        </FeatureColumn>

        <FeatureColumn width="w-6/12" className="ml-5">
          <div className="flex w-full flex-col items-stretch text-2xl text-[rgba(65,65,65,1)] font-semibold max-md:max-w-full max-md:mt-10">
            <div className="z-10 flex items-stretch gap-[33px]">
              <div className="grow shrink w-[429px] basis-auto my-auto max-md:max-w-full">
                Police Liaison
                <br />
                <br />
                <span className="font-normal">
                  Established communication channels with the Kenya Police for
                  immediate support when necessary.
                </span>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/d0ee972771d4e776168fb7a24d103faf73fd7c03?placeholderIfAbsent=true"
                alt=""
                className="aspect-[0.03] object-contain w-[7px] shrink-0"
              />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e5ceea96e102b2641388358ed80934de96dfb9ab?placeholderIfAbsent=true"
              alt=""
              className="aspect-[1] object-contain w-[41px] max-md:mr-0.5"
            />
          </div>
        </FeatureColumn>
      </FeatureGrid>
    </section>
  );
};

export default PatrolService;
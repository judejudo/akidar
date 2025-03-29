import { useState } from "react";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex grow flex-col items-stretch text-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col rounded shadow-[4px_4px_30px_rgba(0,0,0,0.15)] relative aspect-[0.825] w-full text-[rgba(65,65,65,1)] pt-[23px] pb-[74px] px-[23px] max-md:px-5">
        <img
          src={
            isHovered
              ? "https://cdn.builder.io/api/v1/image/assets/TEMP/7f27e9b2963d7215bb627614503edbe6917024c8?placeholderIfAbsent=true"
              : "https://cdn.builder.io/api/v1/image/assets/TEMP/107ae29d2a4002dfbf1f11e9eec8491d2cc440e2?placeholderIfAbsent=true"
          }
          alt="Card background"
          className="absolute h-full w-full object-cover inset-0 transition-opacity duration-300"
        />
        <img
          src={icon}
          alt={`${title} icon`}
          className="aspect-[1] object-contain w-[94px] rounded-[0px_0px_0px_0px]"
        />
        <h3 className="relative font-bold mt-[50px] max-md:mt-10">{title}</h3>
        <p className="relative font-normal self-stretch mt-3.5">
          {description}
        </p>
      </div>
      <div className="flex flex-col relative self-center z-10 aspect-[3.714] mt-[-35px] w-[260px] max-w-full text-[rgba(49,48,137,1)] font-semibold px-14 py-[21px] rounded-[10px] max-md:px-5 cursor-pointer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/41953c5943e16c3a0145e88d47a2643880d6f606?placeholderIfAbsent=true"
          alt="Read More button background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <span className="text-center">Read More</span>
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <section className="flex w-full max-w-[1254px] flex-col mx-auto mt-9 max-md:max-w-full max-md:px-4">
      <h2 className="text-[rgba(49,48,137,1)] text-[45px] font-semibold text-center max-md:text-[40px]">
        OUR SERVICES
      </h2>
      <p className="text-[rgba(30,30,30,1)] text-2xl font-normal w-[794px] mt-[13px] max-md:max-w-full">
        Explore our wide range of security services and find the perfect
        solution for your needs
      </p>

      <div className="w-full max-w-[1168px] mt-[60px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/09067abaa08c961927f6f3e80fb7fa142d4ea06e?placeholderIfAbsent=true"
              alt="Security guard"
              className="aspect-[0.77] object-contain w-full rounded-[0px_0px_0px_0px] max-md:mt-10"
            />
          </div>

          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fb5a47f9205a51a3ba85551aefd9e204948ca703?placeholderIfAbsent=true"
              title="Manned Guarding"
              description="We provide manned guarding service for a whole cross section of clients"
            />
          </div>

          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <ServiceCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1e314838d15a1c517d9c8cbe5d6507941ca4180a?placeholderIfAbsent=true"
              title="Dog Services"
              description="Mature & well-trained dogs which come with a dog handler(as a Package)"
            />
          </div>
        </div>
      </div>

      <div className="flex items-stretch gap-[21px] mt-[22px] justify-center">
        <button className="aspect-[1] w-[70px] shrink-0 flex items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b14d4bffb0eb4b5d2385d8d790f404afcbc89d1c?placeholderIfAbsent=true"
            alt="Previous"
            className="aspect-[1] object-contain w-full"
          />
        </button>
        <button className="aspect-[1] w-[70px] shrink-0 flex items-center justify-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/18c106f24ed3bdb9cc2caf3648ce4f2626c56e82?placeholderIfAbsent=true"
            alt="Next"
            className="aspect-[1] object-contain w-full"
          />
        </button>
      </div>

      <button className="self-center flex w-[350px] max-w-full items-stretch gap-5 text-3xl text-[rgba(49,48,137,1)] font-semibold text-center justify-between mt-[7px] px-[68px] py-[22px] rounded-[10px] border-[rgba(49,48,137,1)] border-solid border-2 max-md:px-5">
        <span>View All</span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5530a81045b5058708f1044186e00930ea4bbf06?placeholderIfAbsent=true"
          alt="Arrow right"
          className="aspect-[1] object-contain w-[37px] shrink-0"
        />
      </button>
    </section>
  );
};

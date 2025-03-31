import React from "react";

const AboutSection: React.FC = () => {
  // Image constants for better maintainability
  const IMAGES = {
    MISSION_BG: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/eb7204fb73dfc5719d88621920513c35b1406959?placeholderIfAbsent=true",
    VISION_BG: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/1250ed5ab9b9c519f565e034215d0edd6196e7e5?placeholderIfAbsent=true",
    DECORATIVE: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/3b3fb4066b89693804c0c7ec1908d361d9f9ce38?placeholderIfAbsent=true",
    SECURITY_TEAM: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/78cb55bab399cdbb19d93794ef8754c3078e4218?placeholderIfAbsent=true",
    SECURITY_ICON: "https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e3f43b2bf5abd32ebe2947201a77d40b81b9a4d8?placeholderIfAbsent=true"
  };

  // Reusable Octagon Component - now with smaller dimensions
  const Octagon = ({ 
    image, 
    title, 
    titleColor, 
    text, 
    className = "" 
  }: { 
    image: string;
    title: string;
    titleColor: string;
    text: string;
    className?: string;
  }) => (
    <div className={`relative ${className}`}>
      <div className="max-w-[220px] md:max-w-[260px] mx-auto aspect-square flex flex-col items-center justify-center">
        <img
          src={image}
          className="absolute h-full w-full object-contain inset-0"
          alt={`${title} background`}
        />
        <div className="relative z-10 flex flex-col items-center px-4 md:px-6 w-[82%]">
          <h3 className={`text-${titleColor} text-xl font-bold leading-none text-center mb-2`}>
            {title}
          </h3>
          <p className="text-[rgba(65,65,65,1)] text-xs md:text-sm font-normal leading-tight md:leading-5 text-center">
            {text}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="container mx-auto px-4 py-12">
      {/* About Us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        {/* Left Column - About Text */}
        <div className="lg:col-span-7">
          <h2 className="text-[rgba(49,48,137,1)] text-3xl font-semibold mb-4">
            ABOUT US
          </h2>
          <div className="text-[rgba(65,65,65,1)] text-xl md:text-2xl leading-relaxed space-y-6">
            <p>
              AKIDAR SECURITY LIMITED is a leading Kenyan risk management
              company specializing in customized fire and security solutions
              for both public and private sectors.
            </p>
            <p>
              We work closely with our clients to assess risks and implement
              tailored security strategies that ensure safety and peace of
              mind.
            </p>
            <p>
              Our goal is to create a secure and reliable environment by
              offering high-quality, scalable security solutions that adapt to
              evolving threats.
            </p>
            <p>
              We are committed to providing unparalleled protection, giving
              our clients a competitive advantage in a rapidly changing
              security landscape.
            </p>
          </div>
        </div>

        {/* Right Column - Mission & Vision */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {/* Mission Octagon */}
            <div className="md:col-span-1 flex flex-col items-center">
              <Octagon
                image={IMAGES.MISSION_BG}
                title="OUR MISSION"
                titleColor="[rgba(49,48,137,1)]"
                text="To provide comprehensive security services to all our esteemed customers thereby providing them with the best value of their money"
              />
              <div className="mt-2">
                <img
                  src={IMAGES.DECORATIVE}
                  className="w-32 md:w-40 object-contain"
                  alt="Decorative element"
                />
              </div>
            </div>

            {/* Vision Octagon */}
            <div className="md:col-span-1 lg:mt-10 flex justify-center">
              <Octagon
                image={IMAGES.VISION_BG}
                title="OUR VISION"
                titleColor="[rgba(246,139,35,1)]"
                text="To be distinguished service provider beyond customer's expectations, plus meeting the International standards"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-16">
        <div>
          <img
            src={IMAGES.SECURITY_TEAM}
            className="w-full h-auto rounded-lg object-cover"
            alt="Security team"
          />
        </div>
        <div>
          <p className="text-[rgba(65,65,65,1)] text-xl md:text-2xl leading-relaxed">
            Our core values define who we are and guide how we operate. They
            shape our commitment to delivering exceptional security solutions
            and ensuring the safety of our clients.
          </p>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-12 text-center">
        <img
          src={IMAGES.SECURITY_ICON}
          className="w-10 h-10 object-contain"
          alt="Security icon"
        />
        <h2 className="text-[rgba(81,81,81,1)] text-2xl md:text-3xl font-semibold">
          Your Security is Our Priority
        </h2>
      </div>
    </section>
  );
};

export default AboutSection;
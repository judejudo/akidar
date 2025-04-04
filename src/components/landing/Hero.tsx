import { Link } from "react-router-dom";
// Try one of these import approaches:
// Option 1: Direct import with relative path
import bgImage from "../../assets/akidar.jpg"; 

// Option 2: Use require for dynamic imports
// const bgImage = require("../../assets/akidar.jpg").default;

// Option 3: For Vite projects
// import bgImage from "../../assets/akidar.jpg?url";

export const Hero = () => {
  // Image constants for better maintainability
  const IMAGES = {
    TOP_LEFT_ICON:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/20f175795d0ec88940a2b9dde2ab5af05c2291fb?placeholderIfAbsent=true",
    TOP_LINE:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0d5e4194a1b4eb35fd002678621d85890cc27bce?placeholderIfAbsent=true",
    BOTTOM_LINE:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/c8bc34d87083457a444b9bcc5e5735114c9c3021?placeholderIfAbsent=true",
    BOTTOM_RIGHT_ICON:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/35a6e13aa7910e8a7dc39d2ea7ff1a0cc3619fd7?placeholderIfAbsent=true",
  };

  // For debugging - check if the image path is correct
  console.log("Background image path:", bgImage);

  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center py-16 px-4 md:px-8 lg:px-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm">
      <img src={bgImage} alt="Background" className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-sm object-cover" />
</div>

      {/* Background image */}
      

      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Top decorative elements */}
        <div className="flex justify-start mb-8 md:mb-12">
          <img
            src={IMAGES.TOP_LEFT_ICON}
            alt=""
            className="w-8 md:w-10 h-8 md:h-10 object-contain"
            aria-hidden="true"
          />
          <img
            src={IMAGES.TOP_LINE}
            alt=""
            className="h-1 w-32 md:w-56 object-contain"
            aria-hidden="true"
          />
        </div>

        {/* Main content */}
        <div className="text-center">
          <div className="inline-block bg-white text-xl md:text-2xl lg:text-3xl text-[rgba(49,48,137,1)] font-bold text-center px-6 py-2 rounded-2xl mb-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
            AKIDAR Security Limited
          </div>

          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-8 drop-shadow-lg max-w-4xl mx-auto">
            Expert Security Services You Can Depend On
          </h1>

          <p className="text-white text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-12 drop-shadow-md">
            Protecting Your Assets{" "}
            <span className="mx-2 text-[rgba(246,139,35,1)]">|</span> People{" "}
            <span className="mx-2 text-[rgba(246,139,35,1)]">|</span> and Peace
            of Mind
          </p>

          {/* Call to action button */}
          <div className="flex justify-center mt-8">
            <Link
              to="/services/security-systems"
              className="bg-[rgba(49,48,137,1)] hover:bg-[rgba(49,48,137,0.9)] text-white text-lg md:text-xl font-bold px-8 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Get Protected Today
            </Link>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-end mt-12 md:mt-16">
          <img
            src={IMAGES.BOTTOM_LINE}
            alt=""
            className="h-1 w-32 md:w-56 object-contain"
            aria-hidden="true"
          />
          <img
            src={IMAGES.BOTTOM_RIGHT_ICON}
            alt=""
            className="w-8 md:w-10 h-8 md:h-10 object-contain"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
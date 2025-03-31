import AboutSection from "@/components/aboutUs/AboutSection";
import CompanyHistory from "@/components/aboutUs/CompanyHistory";
import Hero from "@/components/aboutUs/Hero";
import TeamGallery from "@/components/aboutUs/TeamGallery";


const AboutUs = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center">
      <Hero />
      <AboutSection />
      <CompanyHistory />
      <TeamGallery />
    </div>
  );
};

export default AboutUs;

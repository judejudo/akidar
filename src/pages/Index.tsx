import {
  Hero,
  About,
  WhyChooseUs,
  Services,
  Contact,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch ">
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;

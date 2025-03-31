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
      <div className="flex flex-col relative min-h-[850px] w-full pb-16 max-md:max-w-full ">
        <div className=" ">
        <img
          src="../public/akidar.jpg"
          alt="Hero background"
          className="absolute h-full w-full object-cover inset-0 "
        />
        </div>

        <Hero />
      </div>

      <About />
      <WhyChooseUs />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;

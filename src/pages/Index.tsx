import {
  Hero,
  About,
  WhyChooseUs,
  Services,
  Contact,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <div className="flex flex-col relative min-h-[850px] w-full pb-16 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/489d0b179777374ae308d5e17e7970b0f3c32f43?placeholderIfAbsent=true"
          alt="Hero background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <Hero />
      </div>

      <About />
      <WhyChooseUs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

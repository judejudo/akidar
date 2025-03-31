import React from "react";
import Hero from "@/components/services/Hero";
import ServicesSidebar from "@/components/services/ServiceSidebar";
import ServiceContent from "@/components/services/ServiceContent";
import ServiceFeatures from "@/components/services/ServiceFeatures";

const Service: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-stretch">
      <div className="flex flex-col relative min-h-[300px] bg-black/10 backdrop-blur-0  w-full font-bold max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/489d0b179777374ae308d5e17e7970b0f3c32f43?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative flex w-full flex-col items-stretch justify-center px-20 py-[33px] max-md:max-w-full max-md:px-5">
          <div className="flex flex-col items-stretch max-md:max-w-full">
            
            <Hero />
          </div>
        </div>
      </div>

      <main className="flex w-full flex-col mt-[45px] px-14 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <section className="w-full max-w-[1264px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <aside className="w-3/12 max-md:w-full max-md:ml-0">
              <ServicesSidebar />
            </aside>
            <article className="w-9/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-[22px]">
                <ServiceContent />
                <ServiceFeatures />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Service;
export const Hero = () => {
  return (
    <section className="relative min-h-[850px] w-full pb-16 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/489d0b179777374ae308d5e17e7970b0f3c32f43?placeholderIfAbsent=true"
        alt="Hero background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative w-full pt-0 pb-[136px] px-20 max-md:max-w-full max-md:pb-[100px] max-md:px-5">
        <div className="flex mb-[-27px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
          <div className="flex mt-[90px] max-md:ml-1.5 max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20f175795d0ec88940a2b9dde2ab5af05c2291fb?placeholderIfAbsent=true"
              alt="Decorative element"
              className="aspect-[1] object-contain w-[41px] shrink-0"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d5e4194a1b4eb35fd002678621d85890cc27bce?placeholderIfAbsent=true"
              alt="Decorative line"
              className="aspect-[32.26] object-contain w-[227px]"
            />
          </div>
          <div className="flex w-full max-w-[996px] flex-col mt-[51px] max-md:max-w-full max-md:mt-10">
            <div className="bg-white text-3xl text-[rgba(49,48,137,1)] font-bold text-center ml-5 px-[31px] py-[7px] rounded-[15px] max-md:max-w-full max-md:px-5">
              AKIDAR Security Limited
            </div>
            <h1 className="text-white text-[50px] font-bold text-center w-[775px] ml-[25px] mt-4 max-md:max-w-full max-md:text-[40px]">
              Expert Security Services You Can Depend On
            </h1>
            <p className="text-white text-3xl font-medium text-center mt-[43px] max-md:max-w-full max-md:mt-10">
              Protecting Your Assets | People | and Peace of Mind
            </p>
            <div className="flex items-start mt-12 max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8bc34d87083457a444b9bcc5e5735114c9c3021?placeholderIfAbsent=true"
                alt="Decorative line"
                className="aspect-[32.26] object-contain w-[227px] mt-9 max-md:mr-[-5px]"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/35a6e13aa7910e8a7dc39d2ea7ff1a0cc3619fd7?placeholderIfAbsent=true"
                alt="Decorative element"
                className="aspect-[1] object-contain w-[41px] shrink-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section className="self-center flex w-full max-w-[1276px] items-stretch gap-5 flex-wrap justify-between ml-[17px] mt-[13px] max-md:max-w-full">
      <div className="flex">
        <div className="border w-0.5 shrink-0 h-[400px] border-[rgba(246,139,35,1)] mr-5 border-solid" />
        <div className="flex flex-col mt-2 max-md:max-w-full">
          <h2 className="text-[rgba(49,48,137,1)] text-[45px] font-semibold max-md:text-[30px]">
            WHO ARE WE
          </h2>
          <p className="text-[rgba(81,81,81,1)] text-2xl max-md:text-xl font-normal self-stretch mr-[31px] mt-6 max-md:max-w-full max-md:mr-2.5 break-words whitespace-normal leading-relaxed">
            Akidar Security Limited is a Kenyan risk management leader in the
            provision of customized and dedicated fire and security solutions to
            clients in the public and private sector. With over 2 years of
            experience in the security industry, we have established ourselves
            as a trusted provider of reliable and effective security solutions
            in Kenya. Our core values empower us to provide you with the highest
            level of security and peace of mind.
          </p>
          <div className="border self-stretch shrink-0 h-px mt-[15px] border-[rgba(167,167,167,1)] border-dashed max-md:max-w-full" />
          <h3 className="text-[rgba(246,139,35,1)] text-[28px] font-semibold mt-3.5 max-md:text-[24px]">
            Core Values
          </h3>

          {/* Core Value 1 */}
          <div className="w-full max-w-[684px] mt-[30px] flex flex-wrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e67dd5d2a0c76b72fd04b6f9a6910da344a61a1"
              alt="Customer Service Excellence icon"
              className="w-[120px] max-md:w-[80px]"
            />
            <div className="ml-5 max-md:ml-2 text-2xl max-md:text-lg text-[rgba(30,30,30,1)]">
              <h4 className="font-semibold">Customer Service Excellence</h4>
              <p className="font-normal mt-2.5 max-md:max-w-full break-words leading-relaxed">
                We're committed to providing exceptional service that exceeds
                our clients' expectations.
              </p>
            </div>
          </div>

          {/* Core Value 2 */}
          <div className="w-full max-w-[684px] mt-[30px] flex flex-wrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/034ef3ad0bac66f57c3544bd0754a8e7ef439f63"
              alt="Integrity icon"
              className="w-[120px] max-md:w-[80px]"
            />
            <div className="ml-5 max-md:ml-2 text-2xl max-md:text-lg text-[rgba(30,30,30,1)]">
              <h4 className="font-semibold">Integrity</h4>
              <p className="font-normal mt-2.5 max-md:max-w-full break-words leading-relaxed">
                We operate with the highest ethical standards, ensuring honesty,
                transparency, and confidentiality in all our dealings.
              </p>
            </div>
          </div>

          {/* Core Values 3*/}
          <div className="w-full max-w-[684px] mt-[30px] flex flex-wrap">
          <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9592ccb84c4e37ee24eb67584058d99924065259?placeholderIfAbsent=true"
                    alt="Professionalism icon"
                    className="aspect-[1] object-contain w-[120px]"
                  />
            <div className="ml-5 max-md:ml-2 text-2xl max-md:text-lg text-[rgba(30,30,30,1)]">
            <h4>Professionalism</h4>
                  <p className="text-black font-normal mt-2.5 max-md:max-w-full">
                    We maintain a smart appearance, and adhere to strict
                    protocols
                  </p>
            </div>
          </div>
          
          {/* Core Values  4 */}
          <div className="w-full max-w-[684px] mt-[30px] flex flex-wrap">
          <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/da7e50b6697c532ceb5ebed4ce7850713bd82cd0?placeholderIfAbsent=true"
                    alt="Team Work icon"
                    className="aspect-[1] object-contain w-[120px] mt-9"
                  />
            <div className="ml-5 max-md:ml-2 text-2xl max-md:text-lg text-[rgba(30,30,30,1)]">
            <h4 className="mt-[59px] max-md:mt-10">Team Work</h4>
                  <p className="text-black font-normal mt-2.5 max-md:max-w-full max-md:mr-1.5">
                    Our security personnel work together seamlessly, both
                    internally and in partnership with our clients
                  </p>
            </div>
          </div>
                   {/* Security Guard Image & Button */}
         <div className="md:hidden text-3xl text-[rgba(49,48,137,1)] font-semibold text-center mt-[237px] max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5ce3b482e3bc965f2983dbb378611b955389f7"
              alt="Security guard"
              className="w-full rounded-lg"
            />
            <button className="mt-[30px] px-10 py-[14px]  rounded-lg border-2 border-[rgba(49,48,137,1)] w-[300px] max-md:px-5">
              <span className="text-lg font-medium">Read More</span>
            </button>
          </div>
        </div>
         {/* Security Guard Image & Button */}
         <div className="hidden md:block text-3xl text-[rgba(49,48,137,1)] font-semibold text-center mt-[537px] w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5ce3b482e3bc965f2983dbb378611b955389f7"
              alt="Security guard"
              className="w-full rounded-lg"
            />
            <button className="flex items-center justify-center gap-4 mt-[30px] px-10 py-[14px] rounded-lg border-2 border-[rgba(49,48,137,1)] max-md:w-full max-md:px-5">
              <span className="text-lg font-medium">Read More</span>

            </button>
          </div>
        
      </div>
    </section>
  );
};

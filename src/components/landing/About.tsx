export const About = () => {
  return (
    <section className="self-center flex w-full max-w-[1276px] items-stretch gap-5 flex-wrap justify-between ml-[17px] mt-[13px] max-md:max-w-full">
      <div className="border w-0.5 shrink-0 h-[400px] border-[rgba(246,139,35,1)] border-solid" />
      <div className="flex flex-col mt-2 max-md:max-w-full">
        <h2 className="text-[rgba(49,48,137,1)] text-[45px] font-semibold max-md:text-[40px]">
          WHO ARE WE
        </h2>
        <p className="text-[rgba(81,81,81,1)] text-2xl font-normal self-stretch mr-[31px] mt-6 max-md:max-w-full max-md:mr-2.5">
          Akidar Security Limited is a Kenyan risk management leader in the
          provision of customized and dedicated fire and security solution to
          client in the public and private sector. With over 2 years of
          experience in the security industry, we have established ourselves as
          a trusted provider of reliable and effective security solutions in
          Kenya. Our core values empower us to provide you with the highest
          level of security and peace of mind
        </p>
        <div className="border self-stretch shrink-0 h-px mt-[15px] border-[rgba(167,167,167,1)] border-dashed max-md:max-w-full" />
        <h3 className="text-[rgba(246,139,35,1)] text-[28px] font-semibold mt-3.5">
          Core Values
        </h3>

        {/* Core Value 1 */}
        <div className="w-[684px] max-w-full mt-[30px]">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[18%] max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e67dd5d2a0c76b72fd04b6f9a6910da344a61a1?placeholderIfAbsent=true"
                alt="Customer Service Excellence icon"
                className="aspect-[1] object-contain w-[120px] shrink-0 max-w-full max-md:mt-[29px]"
              />
            </div>
            <div className="w-[82%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch text-2xl text-[rgba(30,30,30,1)] max-md:max-w-full max-md:mt-[29px]">
                <h4 className="font-semibold">Customer Service Excellence</h4>
                <p className="font-normal mt-2.5 max-md:max-w-full">
                  We're committed to providing exceptional service that exceeds
                  our clients' expectations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Value 2 */}
        <div className="w-[684px] max-w-full mt-[30px]">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[18%] max-md:w-full max-md:ml-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/034ef3ad0bac66f57c3544bd0754a8e7ef439f63?placeholderIfAbsent=true"
                alt="Integrity icon"
                className="aspect-[1] object-contain w-[120px] shrink-0 max-w-full max-md:mt-[29px]"
              />
            </div>
            <div className="w-[82%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch text-2xl max-md:max-w-full max-md:mt-[29px]">
                <h4 className="text-[rgba(30,30,30,1)] font-semibold">
                  Integrity
                </h4>
                <p className="text-black font-normal mt-2.5 max-md:max-w-full">
                  We operate with the highest ethical standards, ensuring
                  honesty, transparency, and confidentiality in all our dealings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values 3 & 4 */}
        <div className="w-[604px] max-w-full mt-[30px]">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[21%] max-md:w-full max-md:ml-0">
              <div className="max-md:mt-[29px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9592ccb84c4e37ee24eb67584058d99924065259?placeholderIfAbsent=true"
                  alt="Professionalism icon"
                  className="aspect-[1] object-contain w-[120px]"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/da7e50b6697c532ceb5ebed4ce7850713bd82cd0?placeholderIfAbsent=true"
                  alt="Team Work icon"
                  className="aspect-[1] object-contain w-[120px] mt-9"
                />
              </div>
            </div>
            <div className="w-[79%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch text-2xl text-[rgba(30,30,30,1)] font-semibold max-md:max-w-full max-md:mt-[29px]">
                <h4>Professionalism</h4>
                <p className="text-black font-normal mt-2.5 max-md:max-w-full">
                  We maintain a smart appearance, and adhere to strict protocols
                </p>
                <h4 className="mt-[59px] max-md:mt-10">Team Work</h4>
                <p className="text-black font-normal mt-2.5 max-md:max-w-full max-md:mr-1.5">
                  Our security personnel work together seamlessly, both
                  internally and in partnership with our clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-3xl text-[rgba(49,48,137,1)] font-semibold text-center mt-[237px] max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a5ce3b482e3bc965f2983dbb378611b955389f7?placeholderIfAbsent=true"
          alt="Security guard"
          className="aspect-[0.66] object-contain w-full rounded-[0px_0px_0px_0px]"
        />
        <button className="flex items-stretch gap-[31px] mt-[30px] px-20 py-[22px] rounded-[10px] border-[rgba(49,48,137,1)] border-solid border-2 max-md:mr-[9px] max-md:px-5 w-full">
          <span className="grow shrink w-40">Read More</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5530a81045b5058708f1044186e00930ea4bbf06?placeholderIfAbsent=true"
            alt="Arrow right"
            className="aspect-[1] object-contain w-[37px] shrink-0"
          />
        </button>
      </div>
    </section>
  );
};

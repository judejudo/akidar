import React from "react";

const CompanyHistory: React.FC = () => {
  return (
    <section className="bg-[rgba(49,48,137,1)] self-stretch flex w-full flex-col mt-[78px] pl-[58px] max-md:max-w-full max-md:mt-10 max-md:pl-5">
      <div className="z-10 mt-[-21px] w-full max-w-[1332px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[71%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
              <h2 className="text-white md:text-6xl text-3xl md:p-10 font-bold leading-[60px] text-center ml-[11px] max-md:ml-2.5">
                COMPANY HISTORY
              </h2>
              <div className="w-[754px] max-w-full mt-14 max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-6/12 max-md:w-full max-md:ml-0">
                    <div className="text-white text-2xl font-normal leading-8 text-center max-md:mt-10">
                      <span className="font-bold">Our Journey</span>
                      <br />
                      AKIDAR SECURITY LIMITED began as a business name before
                      evolving into one of Kenya's leading independent security
                      providers.{" "}
                    </div>
                  </div>
                  <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="text-white text-2xl font-normal leading-8 text-center max-md:mt-10">
                      <span className="font-bold">Tailored security</span>
                      <br />
                      We offer flexible, customized services designed to meet
                      specific security needs and budgets across various
                      industries in Kenya.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[720px] max-w-full mt-[70px] max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-6/12 max-md:w-full max-md:ml-0">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e4b77fc5ee6bb30ea8f7a3eeac54f56d6881e19e?placeholderIfAbsent=true"
                      className="aspect-[5.99] object-contain w-[360px] rounded-[0px_0px_0px_0px]"
                      alt="Timeline"
                    />
                  </div>
                  <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow flex-col items-stretch">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e4b77fc5ee6bb30ea8f7a3eeac54f56d6881e19e?placeholderIfAbsent=true"
                        className="aspect-[5.99] object-contain w-[360px] rounded-[0px_0px_0px_0px]"
                        alt="Timeline"
                      />
                      {/* <div className="z-10 mt-[-22px] w-0.5 shrink-0 h-[70px] mr-[75px] border-white border-dashed border-2 max-md:mr-2.5" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[29%] ml-5 max-md:w-full max-md:ml-0 pr-5">
            <div className="flex flex-col items-stretch text-2xl text-white font-normal text-center leading-8 mt-[67px] max-md:mt-10">
              <div className="self-center">
                <span className="font-bold">How We Work</span>
                <br />
                We take a structured approach to security by:
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/895282c4907235d60e12624b4b74d29df90e7036?placeholderIfAbsent=true"
                className="aspect-[1] object-contain w-full mt-[19px] rounded-[10px]"
                alt="How we work diagram"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[834px] max-w-full md:ml-[80px] mt-2 mb-2">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="text-white text-2xl font-normal leading-8 text-center  max-md:mt-10">
              <span className="font-bold">Our Expertise</span>
              <br /> Our team consists of highly trained security professionals,
              guided by accredited directors, trainers, and assessors to ensure
              the highest industry standards.
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="text-white text-2xl font-normal leading-8 text-center max-md:mt-10">
              <span className="font-bold">Commitment to Excellence</span>
              <br />
              We uphold professionalism, integrity, and customer-focused care to
              provide a secure environment for our clients.
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/3fae2975aea93471609629cea6a8b546e5879a5e?placeholderIfAbsent=true"
        className="aspect-[17.86] object-contain w-[720px] max-w-full mt-2.5 rounded-[0px_0px_0px_0px]"
        alt="Timeline"
      /> */}
    </section>
  );
};

export default CompanyHistory;


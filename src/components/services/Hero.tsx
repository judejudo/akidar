import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col    relative min-h-[300px] w-full font-bold max-md:max-w-full ">
      {/* <img
        src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/0ae217e09b6ee02b4b98362e64202e4658e21dda?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
      /> */}
      <div className="relative flex w-full flex-col items-stretch justify-center px-20 py-[33px] max-md:max-w-full max-md:px-5">
        <div className="self-center   flex w-[734px] max-w-full items-stretch text-[50px] text-white text-center flex-wrap mt-10 max-md:text-[40px]">
          <div className="z-10 flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full max-md:mr-[-5px] max-md:text-[40px]">
            <div className="flex w-[563px] max-w-full items-stretch flex-wrap max-md:text-[40px]">
              {/* <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/23414c372fed8eddcfdfda4ffe9c880334a4fcc6?placeholderIfAbsent=true"
                className="aspect-[1.02] object-contain w-[42px] shrink-0"
              /> */}
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full max-md:text-[40px]">
                {/* <img
                  src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/4de56b91f382a6d6f5be9cd475eaf46bf03a494e?placeholderIfAbsent=true"
                  className="aspect-[32.26] object-contain w-[227px] max-w-full"
                /> */}
                <div className="mt-5 max-md:text-[40px]">OUR SERVICES</div>
              </div>
            </div>
            {/* <img
              src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/898b6e3b1567b66cd420636bf52038398339961d?placeholderIfAbsent=true"
              className="aspect-[32.26] object-contain w-[227px] max-w-full mt-5"
            /> */}
          </div>
          {/* <img
            src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/295dd663c6e224c12cf9e39d3481c6eee3a06c8d?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[41px] shrink-0 mt-[72px] max-md:mt-10"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
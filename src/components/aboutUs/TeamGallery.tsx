import React from "react";

const TeamGallery: React.FC = () => {
  return (
    <section className="w-full max-w-full flex flex-col items-center">
      <h2 className="text-[rgba(65,65,65,1)] text-3xl font-normal leading-[60px] text-center mt-[79px] max-md:max-w-full max-md:mt-10">
        See Our Team in Action – Delivering Security with Excellence
      </h2>
      <div className="w-full max-w-[1177px] mt-[26px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[30%] max-md:w-full max-md:ml-0">
            <div className="grow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/edc1bad4f4f22cdbda25f091026a38fadc4f083a?placeholderIfAbsent=true"
                className="aspect-[0.87] object-contain w-full rounded-[20px]"
                alt="Team member 1"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/93ef365cbe768426e00763d2f2bcde09d31dc217?placeholderIfAbsent=true"
                className="aspect-[1.01] object-contain w-full rounded-[20px]"
                alt="Team member 2"
              />
            </div>
          </div>
          <div className="w-[24%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/1348edd8f60f2fc3175cc65e392ac7e1c59a0641?placeholderIfAbsent=true"
                className="aspect-[1.01] object-contain w-full rounded-[20px]"
                alt="Team member 3"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/63a1e2e80205d4f1f2dcaa04f718193e04730d29?placeholderIfAbsent=true"
                className="aspect-[0.62] object-contain w-full rounded-[20px]"
                alt="Team member 4"
              />
            </div>
          </div>
          <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <div className="w-full max-md:max-w-full">
              <div className="max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[35%] max-md:w-full max-md:ml-0">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/4e343a0b0aa1334d7093c7d5351530d367ad02b2?placeholderIfAbsent=true"
                      className="aspect-[0.36] object-contain w-[189px] shrink-0 max-w-full grow rounded-[20px]"
                      alt="Team member 5"
                    />
                  </div>
                  <div className="w-[65%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="grow">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/afb9fddaa97deb2050fb1352757faa9aff4bd44b?placeholderIfAbsent=true"
                        className="aspect-[1.68] object-contain w-full rounded-[20px]"
                        alt="Team member 6"
                      />
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/53396710689b2e65dfd8892689bb9b836733ee14?placeholderIfAbsent=true"
                        className="aspect-[1.09] object-contain w-full rounded-[20px]"
                        alt="Team member 7"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/50dde28776545ec8e240fb1375ba0e5c499f547f?placeholderIfAbsent=true"
                className="aspect-[2.49] object-contain w-full rounded-[20px] max-md:max-w-full"
                alt="Team group photo"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1164px] mt-[94px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[27%] max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(217,217,217,1)] flex w-[300px] shrink-0 max-w-full h-[400px] mx-auto rounded-[15px] max-md:mt-[37px]" />
          </div>
          <div className="w-[73%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col max-md:max-w-full max-md:mt-[37px]">
              <h2 className="text-[rgba(49,48,137,1)] text-[35px] font-semibold">
                VISIT OUR OFFICES
              </h2>
              <div className="flex items-stretch gap-[21px] text-2xl text-[rgba(65,65,65,1)] font-normal mt-[13px]">
                <div className="grow">Topsel Center 2</div>
                <div>Floor </div>
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/b2b31d494c6f4b59a8b9179a4eb1a6ff/e321c5bf902f1557b0ef6268f1779861899dcd4d?placeholderIfAbsent=true"
                className="aspect-[2.87] object-contain w-full self-stretch mt-[26px] rounded-[10px] max-md:max-w-full"
                alt="Office location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;

import { useEffect, useState } from "react";

type StatCounterProps = {
  end: number;
  label: string;
  duration?: number;
};

const StatCounter = ({ end, label, duration = 2000 }: StatCounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(percentage * end));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <div className="flex flex-col items-stretch text-white">
      <div className="text-[50px] font-bold max-md:text-[40px]">{count}+</div>
      <div className="text-3xl font-normal">{label}</div>
    </div>
  );
};

export const WhyChooseUs = () => {
  return (
    <section className="flex flex-col relative min-h-[746px] items-center justify-center mt-[102px] px-20 py-[82px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mr-0.5 max-md:mt-10 max-md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c44182a0616454894a803cdbf6f8c2b119b8989?placeholderIfAbsent=true"
        alt="Why Choose Us background"
        className="absolute h-full w-full object-cover inset-0"
      />
      <div className="relative w-full max-w-[1190px] max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[69%] max-md:w-full max-md:ml-0">
              <div className="w-full max-md:max-w-full max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  <div className="w-[55%] max-md:w-full max-md:ml-0">
                    <div className="flex w-full flex-col items-stretch font-semibold max-md:mt-2">
                      <h2 className="text-white text-[45px] text-center max-md:text-[40px]">
                        WHY CHOOSE US
                      </h2>
                      <div className="bg-white flex items-stretch gap-[27px] text-2xl text-[rgba(49,48,137,1)] ml-3.5 mt-[50px] px-4 py-[15px] rounded-[15px] max-md:ml-2.5 max-md:mt-10">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff929ca6f4421a6c95c72bf1c7adea580ee92e1?placeholderIfAbsent=true"
                          alt="Checkmark icon"
                          className="aspect-[1] object-contain w-[30px] shrink-0"
                        />
                        <div className="basis-auto">National Scale</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[45%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="bg-white flex grow items-stretch gap-[27px] text-2xl text-[rgba(49,48,137,1)] font-semibold w-full mt-[105px] px-4 py-[15px] rounded-[15px] max-md:mt-10">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff929ca6f4421a6c95c72bf1c7adea580ee92e1?placeholderIfAbsent=true"
                        alt="Checkmark icon"
                        className="aspect-[1] object-contain w-[30px] shrink-0"
                      />
                      <div className="grow shrink w-[235px]">
                        Tailored Expertise
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[31%] ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white flex grow items-stretch gap-[27px] text-2xl text-[rgba(49,48,137,1)] font-semibold w-full mt-[105px] px-4 py-[15px] rounded-[15px] max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff929ca6f4421a6c95c72bf1c7adea580ee92e1?placeholderIfAbsent=true"
                  alt="Checkmark icon"
                  className="aspect-[1] object-contain w-[30px] shrink-0"
                />
                <div className="grow shrink w-[245px] basis-auto">
                  Quality Assurance
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col mt-[27px] pl-[9px] max-md:max-w-full">
          <div className="self-stretch flex w-full items-stretch gap-5 text-2xl text-[rgba(49,48,137,1)] font-semibold flex-wrap justify-between max-md:max-w-full">
            <div className="bg-white flex items-stretch gap-[27px] px-4 py-[15px] rounded-[15px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff929ca6f4421a6c95c72bf1c7adea580ee92e1?placeholderIfAbsent=true"
                alt="Checkmark icon"
                className="aspect-[1] object-contain w-[30px] shrink-0"
              />
              <div className="basis-auto">Top Personnel</div>
            </div>
            <div className="bg-white flex items-stretch gap-[27px] px-4 py-[15px] rounded-[15px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff929ca6f4421a6c95c72bf1c7adea580ee92e1?placeholderIfAbsent=true"
                alt="Checkmark icon"
                className="aspect-[1] object-contain w-[30px] shrink-0"
              />
              <div className="basis-auto">Advanced Training</div>
            </div>
            <div className="bg-white flex items-stretch gap-[27px] px-4 py-[15px] rounded-[15px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff929ca6f4421a6c95c72bf1c7adea580ee92e1?placeholderIfAbsent=true"
                alt="Checkmark icon"
                className="aspect-[1] object-contain w-[30px] shrink-0"
              />
              <div className="basis-auto grow shrink">Proactive Defense</div>
            </div>
          </div>

          <div className="flex w-[733px] max-w-full items-stretch gap-5 text-2xl text-[rgba(49,48,137,1)] font-semibold flex-wrap justify-between mt-[27px]">
            <div className="bg-white flex items-stretch gap-[27px] px-4 py-[15px] rounded-[15px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff929ca6f4421a6c95c72bf1c7adea580ee92e1?placeholderIfAbsent=true"
                alt="Checkmark icon"
                className="aspect-[1] object-contain w-[30px] shrink-0"
              />
              <div className="basis-auto">Always Prepared</div>
            </div>
            <div className="bg-white flex items-stretch gap-[27px] px-4 py-[15px] rounded-[15px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff929ca6f4421a6c95c72bf1c7adea580ee92e1?placeholderIfAbsent=true"
                alt="Checkmark icon"
                className="aspect-[1] object-contain w-[30px] shrink-0"
              />
              <div className="basis-auto">Optimized Security</div>
            </div>
          </div>

          <div className="w-full max-w-[1103px] mt-[93px] max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-3/12 max-md:w-full max-md:ml-0">
                <StatCounter end={2} label="Years of Experience" />
              </div>
              <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col self-stretch items-stretch text-white my-auto max-md:mt-10">
                  <StatCounter end={30} label="Satisfied Customers" />
                </div>
              </div>
              <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col self-stretch items-stretch text-white my-auto max-md:mt-10">
                  <StatCounter end={100} label="Qualified Personnel" />
                </div>
              </div>
              <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac51b32b976ae41972a6fe5c05b0a077b634b07f?placeholderIfAbsent=true"
                  alt="Security badge"
                  className="aspect-[1] object-contain w-[150px] shrink-0 max-w-full max-md:mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

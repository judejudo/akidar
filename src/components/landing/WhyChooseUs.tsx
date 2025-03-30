import { useEffect, useRef, useState } from "react";

const StatCounter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
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
    <div className="flex flex-col items-center text-white">
      <div className="text-5xl font-bold md:text-4xl">{count}+</div>
      <div className="text-3xl font-normal">{label}</div>
    </div>
  );
};

const features = [
  "National Scale",
  "Tailored Expertise",
  "Quality Assurance",
  "Top Personnel",
  "Advanced Training",
  "Proactive Defense",
  "Always Prepared",
  "Optimized Security",
];

export const WhyChooseUs = () => {
  return (
    <section className="relative min-h-[746px] flex flex-col items-center justify-center mt-24 px-10 py-20 rounded-none md:mt-10 md:px-5">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c44182a0616454894a803cdbf6f8c2b119b8989"
        alt="Why Choose Us background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative w-full max-w-5xl text-center">
        <h2 className="text-white md:text-9xl font-bold mt-3 text-5xl md:pb-10">WHY CHOOSE US</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white flex items-center gap-5 text-xl text-blue-900 font-semibold px-4 py-3 rounded-lg"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ff929ca6f4421a6c95c72bf1c7adea580ee92e1"
                alt="Checkmark icon"
                className="w-6 h-6"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-5 mt-16">
          <StatCounter end={2} label="Years of Experience" />
          <StatCounter end={30} label="Satisfied Customers" />
          <StatCounter end={100} label="Qualified Personnel" />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac51b32b976ae41972a6fe5c05b0a077b634b07f"
            alt="Security badge"
            className="w-36 mx-auto hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

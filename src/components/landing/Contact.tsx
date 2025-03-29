import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", data);
    setIsSuccess(true);
    setIsSubmitting(false);
    reset();

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="mt-[103px] max-md:max-w-full max-md:mr-0.5 max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[43%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[600px] w-full px-20 py-[63px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/32a66acb15b2059ee8ac23c47098a8c8587f2ebf?placeholderIfAbsent=true"
              alt="Contact background"
              className="absolute h-full w-full object-cover inset-0"
            />
            <h2 className="relative text-white text-[45px] font-semibold self-center max-md:text-[40px]">
              CONTACT US
            </h2>

            <div className="relative flex items-stretch gap-[21px] mt-[25px]">
              <div className="bg-white flex flex-col items-center justify-center w-[60px] h-[60px] px-2.5 rounded-[50%]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bea9bd29c0f4bf23ee35cb8a860003c01dcbc499?placeholderIfAbsent=true"
                  alt="Phone icon"
                  className="aspect-[1] object-contain w-10"
                />
              </div>
              <a
                href="tel:+254700337123"
                className="text-white text-2xl font-normal basis-auto my-auto hover:underline"
              >
                +254 700 337 123
              </a>
            </div>

            <div className="relative flex items-stretch gap-[21px] mt-[25px] max-md:mr-2.5">
              <div className="bg-white flex flex-col items-center justify-center w-[60px] h-[60px] px-2.5 rounded-[50%]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/73065214fdd31c4ea1f91053182b31d5d9d1450b?placeholderIfAbsent=true"
                  alt="Email icon"
                  className="aspect-[1] object-contain w-10"
                />
              </div>
              <a
                href="mailto:Akidarlimited@gmail.com"
                className="text-white text-2xl font-normal basis-auto grow shrink my-auto hover:underline"
              >
                Akidarlimited@gmail.com
              </a>
            </div>

            <div className="relative flex items-stretch gap-[21px] mt-[25px]">
              <div className="bg-white flex flex-col items-center justify-center w-[60px] h-[60px] px-2.5 rounded-[50%]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9570418203a44d726eb81e93716561e15d67081c?placeholderIfAbsent=true"
                  alt="Location icon"
                  className="aspect-[1] object-contain w-10"
                />
              </div>
              <address className="text-white text-2xl font-normal basis-auto grow shrink not-italic">
                Canon Towers-Mapembeni, Moi Avenue
              </address>
            </div>

            <div className="relative bg-[rgba(217,217,217,1)] border w-[339px] shrink-0 max-w-full h-px mt-2.5 border-[rgba(255,255,255,0.8)] border-dashed" />

            <address className="relative text-white text-2xl font-normal self-center w-[328px] ml-[38px] mt-[11px] not-italic">
              Nairobi, Kipro-House-Westlands Ring Road{" "}
            </address>

            <div className="relative self-center flex w-[359px] max-w-full items-stretch gap-[21px] mt-[25px]">
              <div className="bg-white flex flex-col items-center justify-center w-[60px] h-[60px] px-2.5 rounded-[50%]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f72483072705c9fc11595333d6f40079ca7618c2?placeholderIfAbsent=true"
                  alt="Post icon"
                  className="aspect-[1] object-contain w-10"
                />
              </div>
              <div className="text-white text-2xl font-normal grow shrink w-[266px] basis-auto my-auto">
                165519-80100 Mombasa
              </div>
            </div>
          </div>
        </div>

        <div className="w-[57%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col relative min-h-[600px] w-full text-2xl text-[rgba(135,135,135,1)] font-normal px-20 py-[29px] rounded-[5px] max-md:max-w-full max-md:mt-10 max-md:px-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f2ae1fbbb731f499ca2d282906fda9c58a7e3e0?placeholderIfAbsent=true"
              alt="Form background"
              className="absolute h-full w-full object-cover inset-0"
            />
            <h3 className="relative text-[rgba(65,65,65,1)] text-3xl font-medium w-[514px] max-md:max-w-full">
              Have any questions? Send them to us and out team will get back to
              you as soon as possible
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative mt-[37px] w-full"
            >
              <div className="flex w-full max-w-[599px] items-stretch gap-[40px_61px] flex-wrap">
                <div className="grow shrink-0 basis-0 w-fit">
                  <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName")}
                    className={`bg-white border w-full px-5 py-4 rounded-[10px] border-[rgba(222,222,222,1)] border-solid ${errors.firstName ? "border-red-500" : ""}`}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div className="grow shrink-0 basis-0 w-fit">
                  <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName")}
                    className={`bg-white border w-full px-5 py-4 rounded-[10px] border-[rgba(222,222,222,1)] border-solid ${errors.lastName ? "border-red-500" : ""}`}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex w-full max-w-[599px] items-stretch gap-[40px_61px] flex-wrap mt-[33px]">
                <div className="grow shrink-0 basis-0 w-fit">
                  <input
                    type="email"
                    placeholder="Your email"
                    {...register("email")}
                    className={`bg-white border w-full px-5 py-4 rounded-[10px] border-[rgba(222,222,222,1)] border-solid ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grow shrink-0 basis-0 w-fit">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    {...register("phone")}
                    className={`bg-white border w-full px-5 py-4 rounded-[10px] border-[rgba(222,222,222,1)] border-solid ${errors.phone ? "border-red-500" : ""}`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative w-full max-w-[599px] mt-7">
                <textarea
                  placeholder="Your question/message"
                  {...register("message")}
                  className={`bg-white border w-full mt-7 pt-3.5 pb-[79px] px-5 rounded-[10px] border-[rgba(222,222,222,1)] border-solid ${errors.message ? "border-red-500" : ""}`}
                  rows={5}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex flex-col relative aspect-[3] text-[26px] text-white font-semibold whitespace-nowrap mt-7 px-[57px] py-[15px] rounded-[5px] max-md:px-5 items-center justify-center disabled:opacity-70"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ac450313b6ddfba87f33a4d952b3df791b2c3b6?placeholderIfAbsent=true"
                  alt="Send button background"
                  className="absolute h-full w-full object-cover inset-0"
                />
                <span className="relative">
                  {isSubmitting ? "Sending..." : "Send"}
                </span>
              </button>

              {isSuccess && (
                <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                  Your message has been sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

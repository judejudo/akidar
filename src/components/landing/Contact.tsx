import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define form schema using zod
const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Create reusable components for cleaner JSX
const ContactInfoItem = ({
  icon,
  children,
  href = undefined,
}: {
  icon: string;
  children: React.ReactNode;
  href?: string;
}) => {
  const content = (
    <>
      <div className="bg-white flex items-center justify-center w-16 h-16 rounded-full">
        <img src={icon} alt="" className="w-10 aspect-square object-contain" />
      </div>
      <div className="text-white text-2xl font-normal my-auto">{children}</div>
    </>
  );

  return (
    <div className="relative flex items-center gap-5 mt-6">
      {href ? (
        <a href={href} className="flex items-center gap-5 hover:underline">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

const FormField = ({
  register,
  name,
  placeholder,
  type = "text",
  error = null,
  className = "",
}: {
  register: any;
  name: keyof ContactFormData;
  placeholder: string;
  type?: string;
  error?: any;
  className?: string;
}) => (
  <div className={`grow ${className}`}>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      aria-invalid={error ? "true" : "false"}
      className={`bg-white border w-full px-5 py-4 rounded-lg border-gray-200 ${
        error ? "border-red-500" : ""
      }`}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1" role="alert">
        {error.message}
      </p>
    )}
  </div>
);

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

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }

    // Reset success message after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  // Image constants to avoid duplication
  const CONTACT_BG =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/32a66acb15b2059ee8ac23c47098a8c8587f2ebf?placeholderIfAbsent=true";
  const FORM_BG =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3f2ae1fbbb731f499ca2d282906fda9c58a7e3e0?placeholderIfAbsent=true";
  const PHONE_ICON =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/bea9bd29c0f4bf23ee35cb8a860003c01dcbc499?placeholderIfAbsent=true";
  const EMAIL_ICON =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/73065214fdd31c4ea1f91053182b31d5d9d1450b?placeholderIfAbsent=true";
  const LOCATION_ICON =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9570418203a44d726eb81e93716561e15d67081c?placeholderIfAbsent=true";
  const POST_ICON =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f72483072705c9fc11595333d6f40079ca7618c2?placeholderIfAbsent=true";
  const SEND_BTN_BG =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3ac450313b6ddfba87f33a4d952b3df791b2c3b6?placeholderIfAbsent=true";

  return (
    <section
      className="mt-24 md:mt-26 max-w-full"
      aria-labelledby="contact-heading"
    >
      <div className="flex flex-col md:flex-row gap-5">
        {/* Contact Information Panel */}
        <div className="w-full md:w-5/12">
          <div className="relative min-h-[600px] w-full px-5 md:px-20 py-16 rounded-none">
            <img
              src={CONTACT_BG}
              alt=""
              className="absolute h-full w-full object-cover inset-0"
              aria-hidden="true"
            />
            <h2
              id="contact-heading"
              className="relative text-white text-4xl md:text-5xl font-semibold text-center mb-8"
            >
              CONTACT US
            </h2>

            <ContactInfoItem icon={PHONE_ICON} href="tel:+254700337123">
              +254 700 337 123
            </ContactInfoItem>

            <ContactInfoItem
              icon={EMAIL_ICON}
              href="mailto:Akidarlimited@gmail.com"
            >
              Akidarlimited@gmail.com
            </ContactInfoItem>

            <ContactInfoItem icon={LOCATION_ICON}>
              Canon Towers-Mapembeni, Moi Avenue
            </ContactInfoItem>

            <div className="relative bg-white/80 border w-full max-w-sm mx-auto h-px mt-6 border-dashed" />

            <div className="relative text-white text-2xl font-normal text-center mt-4">
              Nairobi, Kipro-House-Westlands Ring Road
            </div>

            <ContactInfoItem icon={POST_ICON}>
              165519-80100 Mombasa
            </ContactInfoItem>
          </div>
        </div>

        {/* Contact Form Panel */}
        <div className="w-full md:w-7/12">
          <div className="relative min-h-[600px] w-full text-2xl text-gray-600 font-normal px-5 md:px-20 py-8">
            <img
              src={FORM_BG}
              alt=""
              className="absolute h-full w-full object-cover inset-0"
              aria-hidden="true"
            />
            <div className="flex flex-col items-center justify-center h-full ml:10">
              <h3 className="relative text-gray-700 text-3xl font-medium max-w-lg">
                Have any questions? Send them to us and our team will get back
                to you as soon as possible
              </h3>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="relative mt-8 w-full"
                aria-label="Contact form"
              >
                <div className="flex flex-wrap w-full max-w-[600px] gap-4 md:gap-8">
                  <FormField
                    register={register}
                    name="firstName"
                    placeholder="First Name"
                    error={errors.firstName}
                    className="w-full md:w-[calc(50%-1rem)]"
                  />

                  <FormField
                    register={register}
                    name="lastName"
                    placeholder="Last Name"
                    error={errors.lastName}
                    className="w-full md:w-[calc(50%-1rem)]"
                  />
                </div>

                <div className="flex flex-wrap w-full max-w-[600px] gap-4 md:gap-8 mt-8">
                  <FormField
                    register={register}
                    name="email"
                    type="email"
                    placeholder="Your email"
                    error={errors.email}
                    className="w-full md:w-[calc(50%-1rem)]"
                  />

                  <FormField
                    register={register}
                    name="phone"
                    type="tel"
                    placeholder="Phone number"
                    error={errors.phone}
                    className="w-full md:w-[calc(50%-1rem)]"
                  />
                </div>

                <div className="relative w-full max-w-[600px] mt-8">
                  <textarea
                    placeholder="Your question/message"
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                    className={`bg-white border w-full p-5 rounded-lg border-gray-200 min-h-[150px] ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="relative mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative text-2xl text-white font-semibold px-14 py-4 rounded disabled:opacity-70"
                    aria-live="polite"
                  >
                    <img
                      src={SEND_BTN_BG}
                      alt=""
                      className="absolute h-full w-full object-cover inset-0"
                      aria-hidden="true"
                    />
                    <span className="relative">
                      {isSubmitting ? "Sending..." : "Send"}
                    </span>
                  </button>
                </div>

                {isSuccess && (
                  <div
                    className="mt-4 p-4 bg-green-100 text-green-800 rounded-md"
                    role="status"
                  >
                    Your message has been sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

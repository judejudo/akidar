import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="self-center flex w-full max-w-[985px] items-start gap-1 flex-wrap mt-[63px] max-md:max-w-full max-md:mt-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a701a46ef32b62d0445556976f0b88022e3de73f?placeholderIfAbsent=true"
          alt="Security badge"
          className="aspect-[1] object-contain w-[131px] shrink-0 max-w-full"
        />
        <div className="flex flex-col items-stretch grow shrink-0 basis-0 w-fit mt-[38px] max-md:max-w-full">
          <div className="text-[rgba(49,48,137,1)] text-[22px] font-bold ml-[108px] max-md:ml-2.5">
            At Akidar Security Limited
          </div>
          <div className="bg-[rgba(225,224,255,1)] text-[50px] text-[rgba(65,65,65,1)] font-medium px-[70px] py-[31px] rounded-[10px] max-md:max-w-full max-md:text-[40px] max-md:px-5">
            Your security is our priority
          </div>
        </div>
      </div>

      <div className="flex flex-col relative min-h-[552px] w-full text-white mt-[63px] px-20 py-[43px] rounded-[0px_0px_0px_0px] max-md:max-w-full max-md:mt-10 max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/40f67aaba8c23d33c21318ca9e3d65e905bc9e3c?placeholderIfAbsent=true"
          alt="Footer background"
          className="absolute h-full w-full object-cover inset-0"
        />
        <div className="relative flex w-full max-w-[1248px] gap-5 flex-wrap justify-between max-md:max-w-full max-md:mr-2.5">
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold">About</h3>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/26777251e541a536bc95fe40a0d795e564a8d7e0?placeholderIfAbsent=true"
              alt="Akidar Security Logo"
              className="aspect-[3.4] object-contain w-[279px] max-w-full mt-[15px] rounded-[10px]"
            />
            <p className="text-[21px] font-normal self-stretch mt-[35px]">
              Akidar Security Limited is a leading Kenyan security company
              providing comprehensive and customized security solutions to
              clients across the public and private sectors.
            </p>
          </div>

          <div className="text-2xl">
            <h3 className="font-bold">Quick Links</h3>
            <nav className="font-normal leading-[50px] mt-[13px]">
              <Link to="/" className="block hover:underline">
                Home
              </Link>
              <Link to="/about" className="block hover:underline">
                About
              </Link>
              <Link to="/services" className="block hover:underline">
                Services
              </Link>
              <Link to="/contact" className="block hover:underline">
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="self-stretch flex flex-col items-stretch text-2xl">
            <h3 className="font-bold">Our Services</h3>
            <nav className="font-normal leading-[50px] mt-[13px]">
              <Link to="/services/patrols" className="block hover:underline">
                Patrols
              </Link>
              <Link
                to="/services/manned-guarding"
                className="block hover:underline"
              >
                Manned Guarding
              </Link>
              <Link
                to="/services/event-security"
                className="block hover:underline"
              >
                Event Security
              </Link>
              <Link
                to="/services/dog-services"
                className="block hover:underline"
              >
                Dog Services
              </Link>
              <Link
                to="/services/security-systems"
                className="block hover:underline"
              >
                Security Systems
              </Link>
              <Link
                to="/services/cctv-installation"
                className="block hover:underline"
              >
                CCTV Installation
              </Link>
              <Link
                to="/services/security-fencing"
                className="block hover:underline"
              >
                Security Fencing
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-stretch text-2xl">
            <h3 className="font-bold">Contact Us</h3>
            <address className="font-normal leading-[29px] mt-[13px] not-italic">
              Canon Towers-Mapembeni Moi Avenue &<br />
              Nairobi, Kipro-House, Westlands Ring Road
              <br />
              <br />
              <a href="tel:+254700337123" className="hover:underline">
                +254 700 337 123
              </a>
              <br />
              <br />
              <a
                href="mailto:Akidarlimited@gmail.com"
                className="hover:underline"
              >
                Akidarlimited@gmail.com
              </a>
            </address>
          </div>
        </div>

        <div className="relative border w-full max-w-[1300px] shrink-0 h-px mt-6 border-white border-dashed" />

        <div className="relative flex w-full max-w-[1241px] items-stretch gap-5 text-2xl font-normal leading-none flex-wrap justify-between mr-[26px] mt-5 max-md:max-w-full max-md:mr-2.5">
          <div className="flex items-stretch gap-3.5 flex-wrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fbae1c54c4ee7db952f3f1d1d7757dab3990038?placeholderIfAbsent=true"
              alt="Copyright icon"
              className="aspect-[1] object-contain w-[30px] shrink-0"
            />
            <div className="basis-auto grow shrink max-md:max-w-full">
              Copyright 2025 Akidar Security Limited
            </div>
          </div>
          <div>
            <Link to="/terms" className="hover:underline">
              Terms & Conditions
            </Link>{" "}
            |{" "}
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

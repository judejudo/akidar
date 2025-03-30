import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative w-full pt-[10px] pb-[10px] px-20 max-md:max-w-full max-md:px-5">
      <div className="flex flex-col relative min-h-20 w-full rounded-[7px] max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b968d35c8e25d2e0177c63684b2d53d5167e2b8?placeholderIfAbsent=true"
          alt="Header background"
          className="absolute h-full w-full object-cover inset-0 rounded-[7px]"
        />
        <nav className="flex flex-col relative min-h-20 w-full items-center justify-center px-[70px] py-2.5 rounded-[7px] max-md:max-w-full max-md:px-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b968d35c8e25d2e0177c63684b2d53d5167e2b8?placeholderIfAbsent=true"
            alt="Navigation background"
            className="absolute h-full w-full object-cover inset-0 rounded-[7px]"
          />
          <div className="relative flex w-full max-w-[1300px] items-center justify-between  max-md:flex-col">
            <Link
              to="/"
              className="flex flex-col self-start relative aspect-[3.4] w-[204px]"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/042c95711795d1e5cc7c2fa9b4856cf34dbe6863?placeholderIfAbsent=true"
                alt="Akidar Security Logo"
                className="absolute h-full w-full object-cover md:right-50 inset-0"
              />
            </Link>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[rgba(49,48,137,1)] text-[22px] font-bold"
              >
                Menu
              </button>
            </div>

            <div
              className={`flex md:flex-row flex-col justify-center  items-center gap-10 ${
                isMenuOpen ? "flex" : "hidden md:flex"
              }`}
            >
              <Link
                to="/"
                className="text-[rgba(49,48,137,1)] text-[22px] my-auto font-bold self-stretch"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-[rgba(49,48,137,1)] text-[22px] font-bold my-auto self-stretch"
              >
                About
              </Link>
              <Link
                to="/Services"
                className="text-[rgba(49,48,137,1)] text-[22px] font-bold my-auto self-stretch"
              >
                Services
              </Link>
              <Link
                to="/jobs"
                className="text-[rgba(49,48,137,1)] text-[22px] font-bold my-auto self-stretch"
              >
                Jobs
              </Link>

              <Link
                to="/contact"
                className="flex flex-col self-stretch relative aspect-[3.58]  w-[179px]  font-extrabold rounded-[7px]"
              >
                <Button variant="secondary" className=" bg-[rgba(49,48,137,1)] my-auto text-[22px] text-white">Contact Us</Button>

              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

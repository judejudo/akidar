import { Link } from "react-router-dom";

// Reusable components for better organization
const FooterHeading = ({ children }) => (
  <h3 className="text-2xl font-bold mb-4">{children}</h3>
);

const FooterNavLink = ({ to, children }) => (
  <Link to={to} className="block hover:underline transition-colors py-1">
    {children}
  </Link>
);

const FooterSection = ({ title, children, className = "" }) => (
  <div className={`flex flex-col ${className}`}>
    <FooterHeading>{title}</FooterHeading>
    {children}
  </div>
);

export const Footer = () => {
  // Constant URLs for better maintenance
  const IMAGES = {
    SECURITY_BADGE: "https://cdn.builder.io/api/v1/image/assets/TEMP/a701a46ef32b62d0445556976f0b88022e3de73f?placeholderIfAbsent=true",
    FOOTER_BG: "https://cdn.builder.io/api/v1/image/assets/TEMP/40f67aaba8c23d33c21318ca9e3d65e905bc9e3c?placeholderIfAbsent=true",
    LOGO: "https://cdn.builder.io/api/v1/image/assets/TEMP/26777251e541a536bc95fe40a0d795e564a8d7e0?placeholderIfAbsent=true",
    COPYRIGHT: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fbae1c54c4ee7db952f3f1d1d7757dab3990038?placeholderIfAbsent=true"
  };

  // Service links for mapping
  const SERVICES = [
    { path: "/services/patrol-services", label: "Patrols" },
    { path: "/services/manned-guarding", label: "Manned Guarding" },
    { path: "/services/event-security", label: "Event Security" },
    { path: "/services/dog-services", label: "Dog Services" },
    { path: "/services/security-systems", label: "Security Systems" },
    { path: "/services/cctv-installation", label: "CCTV Installation" },
    { path: "/services/security-fencing", label: "Security Fencing" }
  ];

  // Quick links for mapping
  const QUICK_LINKS = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },

  ];

  return (
    <footer className="pt-16">
      {/* Banner section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <img
            src={IMAGES.SECURITY_BADGE}
            alt="Security certification badge"
            className="w-32 h-32 object-contain"
          />
          <div className="flex-1">
            <div className="text-indigo-800 text-xl font-bold mb-2 text-center md:text-left">
              At Akidar Security Limited
            </div>
            <div className="bg-indigo-50 text-3xl md:text-5xl text-gray-700 font-medium px-6 py-6 rounded-lg text-center">
              Your security is our priority
            </div>
          </div>
        </div>
      </div>

      {/* Main footer section */}
      <div className="relative text-white">
        <img
          src={IMAGES.FOOTER_BG}
          alt=""
          className="absolute h-full w-full object-cover inset-0"
          aria-hidden="true"
        />
        
        <div className="relative container mx-auto px-4 py-12">
          {/* Footer content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* About column */}
            <FooterSection title="About" className="lg:col-span-1">
              <img
                src={IMAGES.LOGO}
                alt="Akidar Security Logo"
                className="w-64 max-w-full rounded-lg mb-6"
              />
              <p className="text-lg">
                Akidar Security Limited is a leading Kenyan security company
                providing comprehensive and customized security solutions to
                clients across the public and private sectors.
              </p>
            </FooterSection>

            {/* Quick links column */}
            <FooterSection title="Quick Links">
              <nav className="text-xl space-y-1" aria-label="Quick links">
                {QUICK_LINKS.map(link => (
                  <FooterNavLink key={link.path} to={link.path}>
                    {link.label}
                  </FooterNavLink>
                ))}
              </nav>
            </FooterSection>

            {/* Services column */}
            <FooterSection title="Our Services">
              <nav className="text-xl space-y-1" aria-label="Services navigation">
                {SERVICES.map(service => (
                  <FooterNavLink key={service.path} to={service.path}>
                    {service.label}
                  </FooterNavLink>
                ))}
              </nav>
            </FooterSection>

            {/* Contact column */}
            <FooterSection title="Contact Us">
              <address className="text-xl not-italic space-y-4">
                <p>
                  Canon Towers-Mapembeni Moi Avenue &<br />
                  Nairobi, Kipro-House, Westlands Ring Road
                </p>
                <p>
                  <a href="tel:+254700337123" className="hover:underline transition-colors">
                    +254 700 337 123
                  </a>
                </p>
                <p>
                  <a href="mailto:Akidarlimited@gmail.com" className="hover:underline transition-colors">
                    Akidarlimited@gmail.com
                  </a>
                </p>
              </address>
            </FooterSection>
          </div>

          {/* Divider */}
          <div className="border-t border-white border-dashed my-6" />

          {/* Copyright row */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xl gap-4">
            <div className="flex items-center">
              <img
                src={IMAGES.COPYRIGHT}
                alt=""
                className="w-6 h-6 mr-2"
                aria-hidden="true"
              />
              <span>Copyright {new Date().getFullYear()} Akidar Security Limited</span>
            </div>
            <div className="text-center md:text-right">
              <Link to="/terms" className="hover:underline transition-colors">
                Terms & Conditions
              </Link>{" "}
              |{" "}
              <Link to="/privacy" className="hover:underline transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
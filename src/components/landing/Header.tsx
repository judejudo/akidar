import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  // Handle scroll events for styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);
  
  // Navigation links data for easy management
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/aboutUs", label: "About" },
    { path: "/Services", label: "Services" },
    { path: "/jobs", label: "Jobs" }
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`sticky top-0 z-50 w-full px-4 md:px-8 lg:px-20 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="relative w-full rounded-lg overflow-hidden">
        {/* Background image */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b968d35c8e25d2e0177c63684b2d53d5167e2b8?placeholderIfAbsent=true"
          alt=""
          className="absolute h-full w-full object-cover inset-0"
          aria-hidden="true"
        />
        
        <nav className="relative flex items-center justify-between py-3 md:py-4 px-4 md:px-6 lg:px-10">
          {/* Logo */}
          <Link to="/" className="relative flex-shrink-0 z-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/042c95711795d1e5cc7c2fa9b4856cf34dbe6863?placeholderIfAbsent=true"
              alt="Akidar Security Logo"
              className="h-12 md:h-14 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden md:flex md:items-center md:justify-end gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[rgba(49,48,137,1)] text-xl font-bold transition-colors hover:text-[rgba(49,48,137,0.8)] ${
                  location.pathname === link.path ? "border-b-2 border-[rgba(49,48,137,1)]" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <Link to="/contact" className="ml-2">
              <Button 
                variant="secondary" 
                className="bg-[rgba(49,48,137,1)] hover:bg-[rgba(49,48,137,0.9)] text-white text-lg font-bold px-6 py-2 rounded-md transition-colors"
              >
                Contact Us
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden z-20 p-2 text-[rgba(49,48,137,1)] focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </nav>
        
        {/* Mobile Menu Overlay - Completely separate from desktop menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-8 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-[rgba(49,48,137,1)] text-2xl font-bold transition-colors hover:text-[rgba(49,48,137,0.8)] ${
                    location.pathname === link.path ? "border-b-2 border-[rgba(49,48,137,1)]" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="mt-4"
              >
                <Button 
                  variant="secondary" 
                  className="bg-[rgba(49,48,137,1)] hover:bg-[rgba(49,48,137,0.9)] text-white text-xl font-bold px-8 py-3 rounded-md transition-colors"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
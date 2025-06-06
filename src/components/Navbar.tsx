import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (target) => {
    setIsOpen(false); // Close mobile menu after clicking

    // If the target starts with '/', it's a page navigation
    if (target.startsWith("/")) {
      navigate(target);
      return;
    }

    // If we're not on the homepage, navigate to home first with scroll target
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: target } });
    } else {
      // If we're already on homepage, just scroll to section
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  // Check if we need to scroll after navigation
  React.useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      // Clear the state to prevent scrolling on every render
      navigate(".", { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <nav className="bg-saas-black bg-opacity-90 backdrop-blur-sm sticky top-0 z-50 border-b border-saas-darkGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => handleNavigation("home")}
              className="flex items-center cursor-pointer"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-saas-orange to-amber-500 bg-clip-text text-transparent">
                KTsoftTech
              </span>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleNavigation("home")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === "/" && location.hash === "#home"
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("features")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === "/" && location.hash === "#features"
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Features
              </button>
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="px-3 py-2 text-sm font-medium text-white hover:text-saas-orange focus:outline-none">
                  Services
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-saas-darkGray border border-gray-800 min-w-[180px]">
                  <DropdownMenuItem 
                    onClick={() => handleNavigation("/services")}
                    className="cursor-pointer hover:bg-saas-orange/10 focus:bg-saas-orange/10"
                  >
                    Services
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => handleNavigation("/projects")}
                    className="cursor-pointer hover:bg-saas-orange/10 focus:bg-saas-orange/10"
                  >
                    Projects
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => handleNavigation("pricing")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === "/" && location.hash === "#pricing"
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavigation("testimonials")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === "/" && location.hash === "#testimonials"
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Testimonials
              </button>
              <button
                onClick={() => handleNavigation("contact")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === "/" && location.hash === "#contact"
                    ? "text-saas-orange"
                    : "text-white hover:text-saas-orange"
                }`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary w-full">Get Template</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-saas-darkGray">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavigation("home")}
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/" && location.hash === "#home"
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("features")}
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/" && location.hash === "#features"
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => handleNavigation("/services")}
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/services"
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation("/projects")}
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/projects"
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("pricing")}
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/" && location.hash === "#pricing"
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavigation("testimonials")}
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/" && location.hash === "#testimonials"
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavigation("contact")}
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/" && location.hash === "#contact"
                  ? "text-saas-orange"
                  : "text-white hover:text-saas-orange"
              }`}
            >
              Contact
            </button>
            <div className="mt-4 px-3 py-2">
              <button className="btn-primary w-full">Get Template</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
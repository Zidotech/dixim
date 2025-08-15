"use client";

import React, { useEffect, useState } from "react";
import * as Icons from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface Nav {
  label: string;
  href: string;
}

const navItems: Nav[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const route = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav>
        <div
          className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-dixim-burgundy rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-black">DR</span>
                </div>
                <div>
                  <h1
                    className={`text-xl font-black ${
                      isScrolled ? "text-dixim-burgundy" : "text-white"
                    } tracking-wide`}
                  >
                    DIXIM ROOF
                  </h1>
                  <p className="text-xs text-dixim-gray-dark font-medium tracking-wider">
                    PREMIUM CONSTRUCTION
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`relative  font-medium tracking-wide hover:text-dixim-burgundy transition-colors group ${
                      isScrolled ? "text-dixim-gray-dark" : "text-dixim-white"
                    }`}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-dixim-gold transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>

              {/* Contact Info & CTA */}
              <div className="hidden lg:flex items-center space-x-4">
                <div
                  className={`flex items-center space-x-4 text-sm  ${
                    isScrolled ? "text-dixim-gray-dark" : "text-dixim-white"
                  }`}
                >
                  <div className="flex items-center space-x-1">
                    <Icons.Phone className="w-4 h-4" />
                    <span>+234 (0) 703 914 0708</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icons.Mail className="w-4 h-4" />
                    <span>info@diximroof.com</span>
                  </div>
                </div>
                <Button
                  className="bg-dixim-burgundy hover:bg-dixim-gold text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    route.push("/contact");
                  }}
                >
                  Get Quote
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-dixim-dark hover:text-dixim-burgundy transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <Icons.X className="w-6 h-6" />
                ) : (
                  <Icons.Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl  lg:hidden">
              <button
                className="lg:hidden pl-8 pt-5 text-dixim-dark hover:text-dixim-burgundy transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <Icons.X className="w-6 h-6" /> : ""}
              </button>
              <div className="p-8 pt-10">
                <div className="space-y-6">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-lg font-semibold text-dixim-dark hover:text-dixim-burgundy transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-dixim-gray-dark">
                    <Icons.Phone className="w-4 h-4" />
                    <span>+234 (0) 123 456 7890</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-dixim-gray-dark">
                    <Icons.Mail className="w-4 h-4" />
                    <span>info@diximroof.com</span>
                  </div>
                  <Button
                    className="w-full bg-dixim-burgundy hover:bg-dixim-gold text-white font-semibold tracking-wide transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      route.push("/contact");
                    }}
                  >
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

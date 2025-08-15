"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useRouter } from "next/navigation";

export function Footer() {
  const route = useRouter();

  const servicesLink = [
    { label: "Roofing", id: "roofing" },
    { label: "POP Ceiling", id: "pop-ceiling" },
    { label: "Aluminium Works", id: "aluminium" },
    { label: "Borehole Systems", id: "borehole" },
    { label: "Solar Installations", id: "tiling" },
    { label: "Electrical Works", id: "electrical" },
  ];

  const quickLinks = [
    { label: "Home", value: "/" },
    { label: "About Us", value: "#about" },
    { label: "Services", value: "/services" },
    { label: "Gallery", value: "/gallery" },
    { label: "Contact", value: "/contact" },
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-wine rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">DR</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Dixim Roof</h3>
                <p className="text-sm text-gray-400">Premium Construction</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              With over 15 years of expertise, Dixim Roof delivers premium
              roofing and construction services. We&apos;re committed to
              quality, craftsmanship, and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-wine rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-wine rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-wine rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-wine rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.value}>
                  <button
                    onClick={() => route.push(link.value)}
                    className="text-gray-300 hover:text-dixim-gold transition-colors duration-200 block cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-3">
              {servicesLink.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => route.push(`/services/${service.id}`)}
                    className="text-gray-300 hover:text-dixim-gold transition-colors duration-200 block  cursor-pointer"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Osun, Nigeria</p>
                  <p className="text-sm text-gray-400">Serving Nationwide</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="text-gray-300">+234 703 914 0708</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <p className="text-gray-300">info@diximroof.co.ke</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon - Sat: 8:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-400">
                    Sunday: Emergency Only
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Dixim Roof. All rights reserved. | Licensed & Insured
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a
                href="#"
                className="hover:text-gold transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gold transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-gold transition-colors duration-200"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

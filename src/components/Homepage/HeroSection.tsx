"use client";

import { Play } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const route = useRouter();
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury roof installation"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dixim-burgundy/80 via-dixim-burgundy/60 to-dixim-burgundy/40"></div>
        <div className="absolute inset-0" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-16">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            Building Excellence
            <span className="block text-dixim-gold">From the Top Down</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Premium Roofing & Construction Solutions You Can Trust
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-dixim-gold hover:bg-dixim-gold/90 text-dixim-dark font-bold tracking-wide px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-xl"
              onClick={() => route.push("/contact")}
            >
              Book Your Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white hover:bg-white text-dixim-burgundy hover:text-dixim-burgundy font-semibold tracking-wide px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => route.push("/gallery")}
            >
              <Play className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-white/20">
          <div className="text-center">
            <h3 className="text-4xl font-black text-dixim-gold mb-2">10+</h3>
            <p className="text-white/80 font-medium tracking-wide">
              Years of Excellence
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-black text-dixim-gold mb-2">200+</h3>
            <p className="text-white/80 font-medium tracking-wide">
              Projects Completed
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-black text-dixim-gold mb-2">100%</h3>
            <p className="text-white/80 font-medium tracking-wide">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Button } from "../ui/button";
import * as icon from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type featuresCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function AboutSection() {
  const route = useRouter();
  const features: featuresCard[] = [
    {
      icon: icon.Award,
      title: "10+ Years Experience",
      description: "Proven track record in premium construction",
    },
    {
      icon: icon.Users,
      title: "Expert Team",
      description: "Certified professionals dedicated to excellence",
    },
    {
      icon: icon.Wrench,
      title: "Quality Materials",
      description: "Only the finest materials and techniques",
    },
    {
      icon: icon.Shield,
      title: "Guaranteed Work",
      description: "Comprehensive warranty on all projects",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dixim-gray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-dixim-burgundy mb-6">
            Crafting Excellence Since 2015
          </h2>
          <p className="text-xl text-dixim-gray-dark max-w-3xl mx-auto leading-relaxed">
            Dixim Roof stands as a beacon of premium craftsmanship in roofing
            and construction, bringing over 10 years of expertise to every
            project we undertake.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-dixim-burgundy mb-6">
              Your Vision, Our Expertise
            </h3>
            <p className="text-lg text-dixim-gray-dark mb-6 leading-relaxed">
              From stone-coated roofing systems to comprehensive construction
              solutions, we transform architectural dreams into enduring
              reality. Our commitment to excellence has made us the trusted
              choice for discerning clients across Nigeria.
            </p>
            <p className="text-lg text-dixim-gray-dark mb-8 leading-relaxed">
              Every project begins with understanding your unique needs and ends
              with exceeding your expectations. We don&apos;t just build
              structures; we create legacies that stand the test of time.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-dixim-burgundy rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dixim-dark mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-dixim-gray-dark">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="bg-dixim-burgundy hover:bg-dixim-gold text-white font-semibold tracking-wide px-8 py-3 transform hover:scale-105 transition-all duration-300"
              onClick={() => route.push("/service")}
            >
              Explore Our Services
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                  alt="Construction team at work"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                  height={48}
                  width={100}
                />
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                  alt="Premium roofing materials"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                  width={100}
                  height={48}
                />
              </div>

              <div className="space-y-4 pt-8">
                <Image
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2131&auto=format&fit=crop"
                  alt="Completed luxury house"
                  className="w-full h-32 object-cover rounded-lg shadow-lg"
                  width={100}
                  height={48}
                />
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                  alt="Construction planning"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                  width={100}
                  height={48}
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -left-4 bg-dixim-gold text-dixim-dark px-4 py-2 rounded-lg font-bold text-sm shadow-xl">
              200+ Projects Completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

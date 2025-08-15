"use client";

import React from "react";
import { ServiceCard } from "./ServiceCard";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function ServiceSection() {
  const route = useRouter();

  const services = [
    {
      id: "roofing",
      title: " Roofing",
      description:
        "High-quality roofing solutions including Gerard, Milano, Classic, and Step Tiles. Weather-resistant and durable installations.",
      imageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
    },
    {
      id: "pop-ceiling",
      title: "POP Ceiling",
      description:
        "Custom ceiling designs with modern lighting integration. Transform your interior spaces with elegant finishes.",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
    },
    {
      id: "aluminium",
      title: "Aluminium Works",
      description:
        "Durable and weather-resistant aluminium installations including windows, doors, and structural elements.",
      imageUrl:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
    },
    {
      id: "borehole",
      title: "Borehole Systems",
      description:
        "Complete borehole solutions from survey and drilling to pump installation and water testing services.",
      imageUrl:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=300&fit=crop",
    },
    {
      id: "tiling",
      title: "Floor & Wall Tiling",
      description:
        "Premium tile installation with perfect alignment and professional finishing for lasting beauty.",
      imageUrl:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=500&h=300&fit=crop",
    },
    {
      id: "solar",
      title: "Solar Installations",
      description:
        "Complete solar energy systems including panels, inverters, and battery storage for sustainable power.",
      imageUrl:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop",
    },
  ];
  return (
    <section className="py-20 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From roofing to electrical work, we provide comprehensive
            construction solutions with unmatched quality and professional
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              hoverImageUrl={service.hoverImageUrl}
              variant="home"
              serviceId={service.id}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => route.push("services")}
            className="bg-dixim-burgundy text-white hover:bg-dixim-gold transition-colors duration-300 px-8 py-4 text-lg"
            size="lg"
          >
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}

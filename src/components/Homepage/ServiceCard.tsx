"use client";

import { ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  hoverImageUrl?: string;
  variant: "home" | "services";
  onNavigate?: (page: string, service?: string) => void;
  serviceId?: string;
}

export function ServiceCard({
  title,
  description,
  imageUrl,
  hoverImageUrl,
  variant,
  serviceId,
}: ServiceCardProps) {
  const route = useRouter();
  const handleClick = () => {
    route.push(`/services/${serviceId}`);
  };

  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {/* Main Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          width={100}
          height={100}
        />

        {/* Construction Image Overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Image
            src={hoverImageUrl || imageUrl}
            alt={`${title} construction`}
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-wine transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* <div className=""></div> */}

        {variant === "services" ? (
          <Button
            onClick={handleClick}
            variant="outline"
            className="w-full border-wine text-wine hover:bg-wine hover:text-white transition-colors duration-300"
          >
            View Details
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button
            onClick={handleClick}
            className="bg-dixim-gold text-dixim-dark hover:bg-dixim-burgundy hover:text-white transition-colors duration-300 font-medium"
          >
            {variant === "home" ? "Learn More" : "View Details"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

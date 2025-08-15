"use client";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  CheckCircle,
} from "lucide-react";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/Homepage/ServiceCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// interface ServiceDetailPageProps {
//   onNavigate: (page: string, service?: string) => void;
//   serviceId: string | null;
// }

interface ServiceData {
  id: string;
  title: string;
  heroImage: string;
  overview: string;
  subServices: string[];
  galleryImages: { url: string; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  testimonials: {
    name: string;
    location: string;
    text: string;
    rating: number;
  }[];
  relatedServices: string[];
}

export default function ServiceDetailPage() {
  const params = useParams();
  const myId = params.id;

  //   console.log(typeof myId);
  console.log(myId);

  const serviceData: Record<string, ServiceData> = {
    roofing: {
      id: "roofing",
      title: "Premium Roofing",
      heroImage:
        "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=1920&h=600&fit=crop",
      overview:
        "At Dixim Roof, we specialize in high-quality roofing systems built to last. From Gerard stone-coated tiles to Milano and Step Tiles, our roofing solutions combine durability, elegance, and expert craftsmanship.",
      subServices: [
        "Gerard Stone Coated Roofing",
        "Milano Tiles",
        "Classic Designs",
        "Step Tiles",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=800&h=600&fit=crop",
          title: "Gerard Stone Coated Roof",
          description: "Premium Gerard roofing installation",
        },
        {
          url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
          title: "Milano Tile Installation",
          description: "Elegant Milano tile roofing",
        },
        {
          url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
          title: "Step Tile Project",
          description: "Classic step tile roofing design",
        },
        {
          url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
          title: "Roof Installation Process",
          description: "Professional roofing installation",
        },
      ],
      faqs: [
        {
          question: "How long does a stone-coated roof last?",
          answer:
            "Our Gerard stone-coated roofs come with a 50-year warranty and can last even longer with proper maintenance. The steel core provides exceptional durability while the stone coating protects against weathering.",
        },
        {
          question: "What warranty do you offer?",
          answer:
            "We provide comprehensive warranties including 50 years for Gerard roofing, 25 years for Milano tiles, and lifetime craftsmanship warranty on all our installations.",
        },
        {
          question: "Do you handle installation and repairs?",
          answer:
            "Yes, we provide complete roofing services including new installations, repairs, maintenance, and emergency roof services. Our certified team ensures quality workmanship.",
        },
        {
          question: "Can I customize tile colors?",
          answer:
            "Absolutely! We offer a wide range of colors and finishes for all our roofing materials. Our team will help you choose colors that complement your property's architecture.",
        },
      ],
      testimonials: [
        {
          name: "Michael Karanja",
          location: "Nairobi",
          text: "Outstanding roofing work! The Gerard tiles look amazing and have withstood heavy rains perfectly. Professional installation and great customer service.",
          rating: 5,
        },
        {
          name: "Grace Wanjiru",
          location: "Kiambu",
          text: "Best roofing company in Kenya. The team was punctual, clean, and delivered exactly what they promised. Our roof looks fantastic!",
          rating: 5,
        },
      ],
      relatedServices: ["pop-ceiling", "solar", "aluminium"],
    },
    "pop-ceiling": {
      id: "pop-ceiling",
      title: "POP Ceiling",
      heroImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&h=600&fit=crop",
      overview:
        "We design and install elegant Plaster of Paris (POP) ceilings that enhance interior aesthetics. Our work blends custom design with modern lighting for a premium finish.",
      subServices: [
        "Custom Designs",
        "Modern Patterns",
        "Lighting Integration",
        "Smooth Finishes",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
          title: "Modern POP Design",
          description: "Contemporary ceiling with integrated lighting",
        },
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
          title: "Custom Patterns",
          description: "Artistic POP ceiling patterns",
        },
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&h=600&fit=crop",
          title: "Lighting Integration",
          description: "LED lighting in POP ceiling",
        },
        {
          url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
          title: "Smooth Finishes",
          description: "Premium POP ceiling finish",
        },
      ],
      faqs: [
        {
          question: "How durable is POP?",
          answer:
            "POP ceilings are highly durable and can last 15-20 years with proper installation and maintenance. They resist cracking and provide excellent insulation properties.",
        },
        {
          question: "Can you install ceiling lights in POP?",
          answer:
            "Yes, we specialize in integrating various lighting solutions including LED strips, recessed lights, chandeliers, and smart lighting systems into POP ceilings.",
        },
        {
          question: "Do you provide custom ceiling patterns?",
          answer:
            "Absolutely! We create custom designs based on your preferences, room architecture, and interior design theme. Our team provides 3D previews before installation.",
        },
        {
          question: "How do you maintain POP ceilings?",
          answer:
            "POP ceilings require minimal maintenance - occasional dusting and repainting every 3-5 years. We provide maintenance guidelines and services.",
        },
      ],
      testimonials: [
        {
          name: "Sarah Njoki",
          location: "Nairobi",
          text: "The POP ceiling transformed our living room completely. The lighting integration is perfect and the finish is flawless. Highly recommended!",
          rating: 5,
        },
        {
          name: "David Mwangi",
          location: "Thika",
          text: "Professional work from start to finish. The custom design exceeded our expectations and was completed on time.",
          rating: 5,
        },
      ],
      relatedServices: ["3d-finishes", "electrical", "furniture"],
    },
    aluminium: {
      id: "aluminium",
      title: "Aluminium Works",
      heroImage:
        "https://images.unsplash.com/photo-1581578949510-fa7315a21fb4?w=1920&h=600&fit=crop",
      overview:
        "Strong, stylish, and weather-resistant. Our aluminium works include premium roofing and structural solutions for both residential and commercial projects.",
      subServices: [
        "Durable Materials",
        "Weather Resistant Systems",
        "Modern Aesthetic Designs",
        "Long-Lasting Installations",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1581578949510-fa7315a21fb4?w=800&h=600&fit=crop",
          title: "Aluminium Roofing",
          description: "Modern aluminium roof installation",
        },
        {
          url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop",
          title: "Structural Work",
          description: "Aluminium structural elements",
        },
        {
          url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
          title: "Installation Process",
          description: "Professional aluminium installation",
        },
        {
          url: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&h=600&fit=crop",
          title: "Modern Design",
          description: "Contemporary aluminium architecture",
        },
      ],
      faqs: [
        {
          question: "Is aluminium roofing noisy in rain?",
          answer:
            "Modern aluminium roofing with proper insulation and installation techniques significantly reduces noise. We use sound-dampening materials and techniques to ensure quiet performance.",
        },
        {
          question: "How long does aluminium roofing last?",
          answer:
            "Aluminium roofing can last 40-70 years with minimal maintenance. It's corrosion-resistant, lightweight, and handles extreme weather conditions excellently.",
        },
        {
          question: "Do you offer custom aluminium structures?",
          answer:
            "Yes, we design and fabricate custom aluminium structures including pergolas, canopies, walkways, and architectural elements tailored to your specifications.",
        },
        {
          question: "Is aluminium eco-friendly?",
          answer:
            "Absolutely! Aluminium is 100% recyclable, energy-efficient, and has a long lifespan. It's one of the most sustainable roofing materials available.",
        },
      ],
      testimonials: [
        {
          name: "John Kiprotich",
          location: "Eldoret",
          text: "The aluminium roofing has been perfect for our warehouse. Strong, durable, and looks great. The installation was quick and professional.",
          rating: 5,
        },
        {
          name: "Mary Akinyi",
          location: "Kisumu",
          text: "Excellent aluminium work on our commercial building. Weather-resistant and low maintenance as promised.",
          rating: 5,
        },
      ],
      relatedServices: ["roofing", "structural", "cctv"],
    },
    borehole: {
      id: "borehole",
      title: "Borehole Systems",
      heroImage:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&h=600&fit=crop",
      overview:
        "Complete borehole and water supply solutions, from site survey to pump installation, ensuring reliable and clean water supply.",
      subServices: [
        "Site Survey",
        "Deep Drilling",
        "Pump Installation",
        "Water Testing & Treatment",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
          title: "Borehole Drilling",
          description: "Professional drilling operation",
        },
        {
          url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=800&h=600&fit=crop",
          title: "Site Survey",
          description: "Geological site assessment",
        },
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=800&h=600&fit=crop",
          title: "Pump Installation",
          description: "Water pump system setup",
        },
        {
          url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
          title: "Water Testing",
          description: "Quality assurance testing",
        },
      ],
      faqs: [
        {
          question: "How deep should a borehole be?",
          answer:
            "Borehole depth varies based on local geology, typically 30-200 meters. We conduct geological surveys to determine optimal depth for reliable water supply in your area.",
        },
        {
          question: "Do you provide water testing?",
          answer:
            "Yes, we conduct comprehensive water quality testing including chemical composition, pH levels, and bacterial content to ensure safe drinking water standards.",
        },
        {
          question: "What type of pump do you install?",
          answer:
            "We install submersible pumps, surface pumps, or solar-powered pumps based on depth, water demand, and power availability. All pumps come with warranties.",
        },
        {
          question: "How often should boreholes be serviced?",
          answer:
            "We recommend annual maintenance including pump inspection, water quality testing, and system performance checks to ensure optimal operation and longevity.",
        },
      ],
      testimonials: [
        {
          name: "Peter Macharia",
          location: "Nakuru",
          text: "Excellent borehole service! Found water at 45 meters and the pump system works perfectly. No more water shortage issues.",
          rating: 5,
        },
        {
          name: "Agnes Mutua",
          location: "Machakos",
          text: "Professional team from survey to completion. Clean water supply has transformed our daily life. Highly recommend their services.",
          rating: 5,
        },
      ],
      relatedServices: ["electrical", "solar", "structural"],
    },
    tiling: {
      id: "tiling",
      title: "Floor & Wall Tiling",
      heroImage:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1920&h=600&fit=crop",
      overview:
        "Perfect tiling for floors and walls with premium materials, precise alignment, and expert finishing touches.",
      subServices: [
        "Premium Tile Installation",
        "Perfect Alignment & Leveling",
        "Grouting Services",
        "Decorative Finishes",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
          title: "Floor Tiling",
          description: "Premium floor tile installation",
        },
        {
          url: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=800&h=600&fit=crop",
          title: "Wall Tiling",
          description: "Perfect wall tile alignment",
        },
        {
          url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
          title: "Bathroom Tiling",
          description: "Waterproof bathroom installation",
        },
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&h=600&fit=crop",
          title: "Decorative Patterns",
          description: "Artistic tile arrangements",
        },
      ],
      faqs: [
        {
          question: "Which tiles are best for bathrooms/kitchens?",
          answer:
            "For bathrooms and kitchens, we recommend porcelain or ceramic tiles with low water absorption rates. We also provide proper waterproofing and sealing.",
        },
        {
          question: "Do you supply tiles or just install?",
          answer:
            "We offer both options - supply and installation packages, or installation-only services if you prefer to source your own tiles. We work with premium tile suppliers.",
        },
        {
          question: "How long does tiling work take?",
          answer:
            "Timeline depends on area size and complexity. Typical bathroom takes 3-5 days, while larger areas like living rooms may take 1-2 weeks including drying time.",
        },
        {
          question: "Do you offer repairs for cracked tiles?",
          answer:
            "Yes, we provide tile repair and replacement services. We also offer maintenance advice to prevent future damage and extend your tiling's lifespan.",
        },
      ],
      testimonials: [
        {
          name: "Rose Wanjiku",
          location: "Nairobi",
          text: "Beautiful tiling work in our new home. Perfect alignment and the grouting is flawless. The bathroom looks like a five-star hotel!",
          rating: 5,
        },
        {
          name: "James Ochieng",
          location: "Mombasa",
          text: "Professional tiling service for our restaurant. High-quality tiles and excellent workmanship. Very satisfied with the results.",
          rating: 5,
        },
      ],
      relatedServices: ["pop-ceiling", "3d-finishes", "furniture"],
    },
    "3d-finishes": {
      id: "3d-finishes",
      title: "3D Finishes",
      heroImage:
        "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=1920&h=600&fit=crop",
      overview:
        "Transform your walls with modern 3D finishes, offering depth, texture, and style for both interiors and exteriors.",
      subServices: [
        "3D Wall Panels",
        "Textured Surfaces",
        "Custom Patterns",
        "Professional Installation",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&h=600&fit=crop",
          title: "3D Wall Panels",
          description: "Modern 3D panel installation",
        },
        {
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
          title: "Textured Finishes",
          description: "Custom textured wall surfaces",
        },
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
          title: "Pattern Design",
          description: "Artistic 3D patterns",
        },
        {
          url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
          title: "Interior Application",
          description: "Living room 3D feature wall",
        },
      ],
      faqs: [
        {
          question: "Can 3D finishes be repainted?",
          answer:
            "Yes, 3D panels and finishes can be repainted with appropriate primers and paints. We recommend specific paint types that work best with 3D textures.",
        },
        {
          question: "Are 3D panels waterproof?",
          answer:
            "We offer waterproof 3D panels suitable for bathrooms and exterior use. Different materials have varying water resistance levels - we'll recommend the best option for your space.",
        },
        {
          question: "What materials do you use?",
          answer:
            "We use PVC, MDF, bamboo fiber, and eco-friendly materials for 3D panels. Each material offers different benefits in terms of durability, cost, and aesthetics.",
        },
        {
          question: "Do you customize designs?",
          answer:
            "Absolutely! We create custom 3D patterns and designs based on your vision. Our team provides 3D renderings before installation so you can visualize the final result.",
        },
      ],
      testimonials: [
        {
          name: "Catherine Njeri",
          location: "Nairobi",
          text: "The 3D feature wall in our living room is stunning! It adds such character and depth to the space. Professional installation and great design advice.",
          rating: 5,
        },
        {
          name: "Robert Kimani",
          location: "Nakuru",
          text: "Amazing 3D finish work in our office reception. Clients are always impressed with the unique design. Worth every penny!",
          rating: 5,
        },
      ],
      relatedServices: ["pop-ceiling", "tiling", "furniture"],
    },
    electrical: {
      id: "electrical",
      title: "Electrical Works",
      heroImage:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&h=600&fit=crop",
      overview:
        "Safe, efficient, and reliable electrical installations for homes, offices, and industrial sites.",
      subServices: [
        "House Wiring",
        "Panel Installation",
        "Safety Systems",
        "Maintenance & Repairs",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
          title: "Panel Installation",
          description: "Modern electrical panel setup",
        },
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=800&h=600&fit=crop",
          title: "House Wiring",
          description: "Complete home electrical wiring",
        },
        {
          url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
          title: "Safety Systems",
          description: "Electrical safety installation",
        },
        {
          url: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&h=600&fit=crop",
          title: "Industrial Wiring",
          description: "Commercial electrical work",
        },
      ],
      faqs: [
        {
          question: "Do you handle both residential and industrial wiring?",
          answer:
            "Yes, we handle all types of electrical work from small residential projects to large industrial installations. Our certified electricians are qualified for all scales of work.",
        },
        {
          question: "What safety standards do you follow?",
          answer:
            "We strictly follow Kenya Bureau of Standards (KEBS) electrical codes and international safety standards. All work is inspected and certified for safety compliance.",
        },
        {
          question: "Do you provide maintenance contracts?",
          answer:
            "Yes, we offer comprehensive electrical maintenance contracts including regular inspections, preventive maintenance, and emergency repair services for homes and businesses.",
        },
        {
          question: "Can you upgrade old wiring systems?",
          answer:
            "Absolutely! We specialize in upgrading outdated electrical systems to modern standards, improving safety, efficiency, and capacity for current electrical demands.",
        },
      ],
      testimonials: [
        {
          name: "Francis Mutiso",
          location: "Machakos",
          text: "Professional electrical work for our new house. Everything works perfectly and the installation is very neat. Licensed electricians who know their job well.",
          rating: 5,
        },
        {
          name: "Lucy Auma",
          location: "Kisumu",
          text: "Excellent electrical panel upgrade for our shop. No more power issues and everything is up to code. Great service and fair pricing.",
          rating: 5,
        },
      ],
      relatedServices: ["solar", "pop-ceiling", "cctv"],
    },
    solar: {
      id: "solar",
      title: "Solar Installations",
      heroImage:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1920&h=600&fit=crop",
      overview:
        "Power your home or business with sustainable solar energy solutions designed for durability and efficiency.",
      subServices: [
        "Panel Installation",
        "Inverter Setup",
        "Battery Systems",
        "System Monitoring",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
          title: "Solar Panel Array",
          description: "Rooftop solar installation",
        },
        {
          url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
          title: "Commercial Solar",
          description: "Large-scale solar project",
        },
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=800&h=600&fit=crop",
          title: "Inverter Setup",
          description: "Solar inverter installation",
        },
        {
          url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
          title: "Battery System",
          description: "Solar battery backup setup",
        },
      ],
      faqs: [
        {
          question: "What is the lifespan of solar panels?",
          answer:
            "Quality solar panels last 25-30 years with minimal degradation. We use tier-1 panels with 25-year performance warranties and expect them to produce 80%+ power after 25 years.",
        },
        {
          question: "Do you provide hybrid solar systems?",
          answer:
            "Yes, we install hybrid systems that combine solar panels, batteries, and grid connection for maximum reliability and energy independence, with automatic switching capabilities.",
        },
        {
          question: "How much energy can I save?",
          answer:
            "Savings depend on system size and usage, but typical homes save 50-90% on electricity bills. We provide detailed energy analysis and ROI calculations for your specific situation.",
        },
        {
          question: "Do you offer battery backups?",
          answer:
            "Yes, we provide various battery options including lithium-ion and lead-acid systems. Batteries store excess solar energy for use during outages or nighttime.",
        },
      ],
      testimonials: [
        {
          name: "Daniel Kipchoge",
          location: "Eldoret",
          text: "Solar installation has cut our electricity bill by 80%! Professional installation and the system works flawlessly. Best investment we've made.",
          rating: 5,
        },
        {
          name: "Jane Waweru",
          location: "Nairobi",
          text: "Excellent solar system for our home. No more power outages affecting us and we're saving money every month. Great customer service too.",
          rating: 5,
        },
      ],
      relatedServices: ["electrical", "roofing", "borehole"],
    },
    cctv: {
      id: "cctv",
      title: "CCTV & Security",
      heroImage:
        "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=1920&h=600&fit=crop",
      overview:
        "Stay secure with our CCTV systems and perimeter fencing solutions, designed for both residential and commercial use.",
      subServices: [
        "CCTV System Setup",
        "Wire Fencing",
        "Security Gates",
        "Remote Monitoring",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800&h=600&fit=crop",
          title: "CCTV Installation",
          description: "Professional camera setup",
        },
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=800&h=600&fit=crop",
          title: "Security Fencing",
          description: "Perimeter security installation",
        },
        {
          url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
          title: "Security Gates",
          description: "Automated gate systems",
        },
        {
          url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
          title: "Monitoring Systems",
          description: "Remote surveillance setup",
        },
      ],
      faqs: [
        {
          question: "Can CCTV work with mobile monitoring?",
          answer:
            "Yes, all our CCTV systems include mobile app access for live viewing, playback, and alerts. Monitor your property from anywhere with internet connection.",
        },
        {
          question: "Do you provide maintenance and repairs?",
          answer:
            "We offer comprehensive maintenance packages including regular cleaning, software updates, and immediate repair services to ensure your security system operates optimally.",
        },
        {
          question: "How strong is your wire fencing?",
          answer:
            "We use high-tensile galvanized wire fencing with concrete posts, designed to withstand harsh weather and provide maximum security for residential and commercial properties.",
        },
        {
          question: "Can CCTV integrate with alarms?",
          answer:
            "Yes, we integrate CCTV systems with alarm systems, motion sensors, and automated lighting for comprehensive security solutions with centralized control.",
        },
      ],
      testimonials: [
        {
          name: "George Mwangi",
          location: "Kiambu",
          text: "Professional CCTV installation for our home. Clear video quality and easy mobile access. Feel much safer now with 24/7 monitoring capability.",
          rating: 5,
        },
        {
          name: "Susan Atieno",
          location: "Nairobi",
          text: "Excellent security fence and CCTV work for our business premises. Strong materials and professional installation. Highly recommend their services.",
          rating: 5,
        },
      ],
      relatedServices: ["electrical", "aluminium", "structural"],
    },
    furniture: {
      id: "furniture",
      title: "Furniture & Carpentry",
      heroImage:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&h=600&fit=crop",
      overview:
        "Beautiful, functional, and durable carpentry solutions — from cabinets and wardrobes to custom furniture.",
      subServices: [
        "Custom Furniture",
        "Kitchen Cabinets",
        "Wardrobes",
        "Doors & Frames",
      ],
      galleryImages: [
        {
          url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
          title: "Kitchen Cabinets",
          description: "Custom kitchen cabinetry",
        },
        {
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
          title: "Built-in Wardrobes",
          description: "Space-efficient wardrobe solutions",
        },
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&h=600&fit=crop",
          title: "Custom Furniture",
          description: "Bespoke furniture pieces",
        },
        {
          url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
          title: "Doors & Frames",
          description: "Custom door installations",
        },
      ],
      faqs: [
        {
          question: "Do you build custom designs?",
          answer:
            "Yes, we specialize in custom furniture design and carpentry. Our team works with you from concept to completion, creating pieces that match your exact specifications and style.",
        },
        {
          question: "What wood materials do you use?",
          answer:
            "We use high-quality hardwoods, engineered woods, and sustainable materials. Options include mahogany, oak, pine, plywood, and MDF depending on your budget and application.",
        },
        {
          question: "Do you provide polishing/finishing?",
          answer:
            "Absolutely! We provide complete finishing services including sanding, staining, painting, varnishing, and polishing to achieve the perfect look and protection for your furniture.",
        },
        {
          question: "Can you do both indoor and outdoor carpentry?",
          answer:
            "Yes, we handle both indoor and outdoor carpentry projects using appropriate materials and finishes for each environment, including weather-resistant treatments for outdoor furniture.",
        },
      ],
      testimonials: [
        {
          name: "Paul Njuguna",
          location: "Nakuru",
          text: "Outstanding kitchen cabinet work! Perfect fit, beautiful finish, and excellent functionality. The team was professional and completed on schedule.",
          rating: 5,
        },
        {
          name: "Emily Cherop",
          location: "Eldoret",
          text: "Custom wardrobes exceeded our expectations. Great use of space and high-quality materials. Excellent craftsmanship and attention to detail.",
          rating: 5,
        },
      ],
      relatedServices: ["pop-ceiling", "tiling", "3d-finishes"],
    },
  };

  const currentService = myId ? serviceData[myId] : null;

  //   if (!currentService) {
  //     return (
  //       <div className="min-h-screen bg-beige flex items-center justify-center">
  //         <div className="text-center">
  //           <h1 className="text-4xl font-bold text-charcoal mb-4">
  //             Service Not Found
  //           </h1>
  //           <p className="text-xl text-gray-600 mb-8">
  //             The requested service could not be found.
  //           </p>
  //           <Button
  //             onClick={() => onNavigate("services")}
  //             className="bg-wine text-white hover:bg-gold transition-colors duration-300"
  //           >
  //             Back to Services
  //           </Button>
  //         </div>
  //       </div>
  //     );
  //   }

  // Get related services data
  const allServices = [
    {
      id: "roofing",
      title: "Premium Roofing",
      icon: "🏠",
      imageUrl:
        "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=500&h=300&fit=crop",
      description: "High-quality roofing solutions with expert craftsmanship.",
    },
    {
      id: "pop-ceiling",
      title: "POP Ceiling",
      icon: "✨",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      description: "Custom ceiling designs with modern lighting integration.",
    },
    {
      id: "aluminium",
      title: "Aluminium Works",
      icon: "🔧",
      imageUrl:
        "https://images.unsplash.com/photo-1581578949510-fa7315a21fb4?w=500&h=300&fit=crop",
      description: "Durable and weather-resistant aluminium installations.",
    },
    {
      id: "borehole",
      title: "Borehole Systems",
      icon: "💧",
      imageUrl:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      description: "Complete water solutions from survey to installation.",
    },
    {
      id: "tiling",
      title: "Floor & Wall Tiling",
      icon: "🏛️",
      imageUrl:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop",
      description: "Premium tile installation with perfect finishing.",
    },
    {
      id: "3d-finishes",
      title: "3D Finishes",
      icon: "🎨",
      imageUrl:
        "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500&h=300&fit=crop",
      description: "Modern 3D wall panels and textured finishes.",
    },
    {
      id: "electrical",
      title: "Electrical Works",
      icon: "⚡",
      imageUrl:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=300&fit=crop",
      description: "Safe and reliable electrical installations.",
    },
    {
      id: "solar",
      title: "Solar Installations",
      icon: "☀️",
      imageUrl:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
      description: "Sustainable solar energy solutions.",
    },
    {
      id: "cctv",
      title: "CCTV & Security",
      icon: "📹",
      imageUrl:
        "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=500&h=300&fit=crop",
      description: "Comprehensive security systems and fencing.",
    },
    {
      id: "furniture",
      title: "Furniture & Carpentry",
      icon: "🪑",
      imageUrl:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&h=300&fit=crop",
      description: "Custom furniture and carpentry solutions.",
    },
  ];

  const relatedServicesData = allServices.filter((service) =>
    currentService.relatedServices.includes(service.id)
  );

  return (
    <div className="min-h-screen bg-beige">
      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={currentService.heroImage}
          alt={`${currentService.title} hero`}
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {currentService.title}
            </h1>
            <p className="text-xl lg:text-2xl">
              Premium Quality • Expert Craftsmanship • 15+ Years Experience
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-charcoal mb-8">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12">
              {currentService.overview}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentService.subServices.map((subService, index) => (
                <Card
                  key={index}
                  className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-charcoal">{subService}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See our completed {currentService.title.toLowerCase()} projects
              showcasing quality craftsmanship and attention to detail.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {currentService.galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    width={100}
                    height={64}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Get answers to common questions about our{" "}
                {currentService.title.toLowerCase()} services.
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {currentService.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-medium text-charcoal">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied customers
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {currentService.testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-gold fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic text-center leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                  <div className="text-center">
                    <p className="font-bold text-charcoal text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 wine-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to start your {currentService.title} project with Dixim Roof?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your{" "}
            {currentService.title.toLowerCase()} needs. Our experts are ready to
            bring your vision to life with quality materials and professional
            craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {}}
              className="bg-gold text-charcoal hover:bg-white hover:text-wine transition-colors duration-300 px-8 py-4 text-lg font-semibold"
              size="lg"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={() => {}}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-wine transition-colors duration-300 px-8 py-4 text-lg font-semibold"
              size="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServicesData.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                Related Services
              </h2>
              <p className="text-xl text-gray-600">
                Explore other services that complement your{" "}
                {currentService.title.toLowerCase()} project
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedServicesData.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  imageUrl={service.imageUrl}
                  variant="services"
                  serviceId={service.id}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/Homepage/ServiceCard";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const route = useRouter();

  const services = [
    {
      id: "roofing",
      title: "Premium Roofing",
      description:
        "Comprehensive roofing solutions including Gerard, Milano, Classic, and Step Tiles. Weather-resistant installations with lifetime warranties and professional maintenance services.",

      imageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&h=300&fit=crop",
      category: "roofing",
    },
    {
      id: "pop-ceiling",
      title: "POP Ceiling",
      description:
        "Custom ceiling designs with modern lighting integration, decorative moldings, and artistic patterns. Transform your interior spaces with elegant and functional finishes.",

      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
      category: "interior",
    },
    {
      id: "aluminium",
      title: "Aluminium Works",
      description:
        "Durable and weather-resistant aluminium installations including windows, doors, frames, and structural elements. Modern designs with superior functionality.",

      imageUrl:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=300&fit=crop",
      category: "structural",
    },
    {
      id: "borehole",
      title: "Borehole Systems",
      description:
        "Complete water solutions from geological survey and drilling to pump installation, water testing, and maintenance. Reliable water access for your property.",

      imageUrl:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&h=300&fit=crop",
      category: "utilities",
    },
    {
      id: "tiling",
      title: "Floor & Wall Tiling",
      description:
        "Premium tile installation with perfect alignment, waterproofing, and professional finishing. Ceramic, porcelain, marble, and custom tile solutions.",

      imageUrl:
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=500&h=300&fit=crop",
      category: "interior",
    },
    {
      id: "3d-finishes",
      title: "3D Finishes",
      description:
        "Modern 3D wall panels, textured finishes, and custom patterns. Add depth and visual interest to your walls with contemporary design elements.",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=500&h=300&fit=crop",
      category: "interior",
    },
    {
      id: "electrical",
      title: "Electrical Works",
      description:
        "Complete electrical solutions including house wiring, panel installations, safety systems, and smart home automation. Licensed and certified electricians.",
      imageUrl:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=500&h=300&fit=crop",
      category: "utilities",
    },
    {
      id: "solar",
      title: "Solar Installations",
      description:
        "Complete solar energy systems including panels, inverters, battery storage, and monitoring systems. Sustainable power solutions with grid-tie options.",
      imageUrl:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop",
      category: "utilities",
    },
    {
      id: "cctv",
      title: "CCTV & Security",
      description:
        "Comprehensive security systems including CCTV cameras, access control, perimeter fencing, and monitoring systems. Protect your property 24/7.",
      imageUrl:
        "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=500&h=300&fit=crop",
      category: "security",
    },
    {
      id: "furniture",
      title: "Furniture & Carpentry",
      description:
        "Custom furniture design and carpentry including built-in wardrobes, kitchen cabinets, bookshelves, and bespoke furniture pieces.",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
      hoverImageUrl:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&h=300&fit=crop",
      category: "interior",
    },
  ];

  const categories = [
    { label: "All Services", value: "all" },
    { label: "Roofing", value: "roofing" },
    { label: "Interior", value: "interior" },
    { label: "Structural", value: "structural" },
    { label: "Utilities", value: "utilities" },
    { label: "Security", value: "security" },
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory =
      selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-beige">
      {/* Hero Section */}
      <section className="bg-wine text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and engineering services delivered with
            15+ years of expertise, quality materials, and professional
            craftsmanship.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-wine"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  variant={
                    selectedCategory === category.value ? "default" : "outline"
                  }
                  className={`transition-colors duration-200 ${
                    selectedCategory === category.value
                      ? "bg-wine text-white hover:bg-gold"
                      : "border-wine text-wine hover:bg-wine hover:text-white"
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredServices.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                    hoverImageUrl={service.hoverImageUrl}
                    variant="services"
                    serviceId={service.id}
                  />
                ))}
              </div>

              <div className="text-center mt-16">
                {/* <p className="text-gray-600 mb-6">
                  Showing {filteredServices.length} of {services.length}{" "}
                  services
                </p> */}
                <Button
                  onClick={() => route.push("/contact")}
                  className="bg-wine text-white hover:bg-gold transition-colors duration-300 px-8 py-4 text-lg"
                  size="lg"
                >
                  Get a Custom Quote
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                No services found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filters.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                variant="outline"
                className="border-wine text-wine hover:bg-wine hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Why Choose Dixim Roof?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence sets us apart in the construction
              industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Quality Guarantee
              </h3>
              <p className="text-gray-600">
                Premium materials and workmanship with comprehensive warranties.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Efficient project completion without compromising quality.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Licensed & Insured
              </h3>
              <p className="text-gray-600">
                Fully licensed contractors with comprehensive insurance
                coverage.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💬</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer support and emergency services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 wine-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed quote for your
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => route.push("/contact")}
              className="bg-dixim-gold text-charcoal  hover:text-white transition-colors duration-300 px-8 py-4 text-lg font-semibold"
              size="lg"
            >
              Get Free Quote
            </Button>
            <Button
              onClick={() => route.push("/gallery")}
              variant="outline"
              className="text-charcoal hover:bg-dixim-gold hover:text-dixim-burgundy transition-colors duration-300 px-8 py-4 text-lg font-semibold border-none"
              size="lg"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  beforeImage?: string;
  isBeforeAfter?: boolean;
  additionalImages: { url: string; caption: string }[];
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showBefore, setShowBefore] = useState(false);

  const route = useRouter();

  const galleryItems: GalleryItem[] = [
    // Roofing Projects
    {
      id: "1",
      title: "Modern Residential Roofing",
      category: "roofing",
      description:
        "Premium Gerard stone-coated steel roofing installation on a contemporary home.",
      imageUrl:
        "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
          caption: "Installation in progress",
        },
        {
          url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
          caption: "Material preparation",
        },
        {
          url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          caption: "Final inspection",
        },
      ],
    },
    {
      id: "2",
      title: "Commercial Building Roof",
      category: "roofing",
      description:
        "Large-scale commercial roofing project with weather-resistant materials.",
      imageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=600&h=400&fit=crop",
          caption: "Structural assessment",
        },
        {
          url: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&h=400&fit=crop",
          caption: "Team coordination",
        },
      ],
    },
    {
      id: "3",
      title: "Step Tile Installation",
      category: "roofing",
      description:
        "Classic step tile roofing with perfect alignment and drainage.",
      imageUrl:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=600&h=400&fit=crop",
          caption: "Tile laying process",
        },
        {
          url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
          caption: "Alignment check",
        },
        {
          url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          caption: "Drainage system",
        },
      ],
    },

    // POP Ceiling
    {
      id: "4",
      title: "Luxury Living Room Ceiling",
      category: "pop",
      description:
        "Elegant POP ceiling design with integrated LED lighting system.",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
          caption: "Design framework",
        },
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&h=400&fit=crop",
          caption: "Lighting installation",
        },
      ],
    },
    {
      id: "5",
      title: "Office Ceiling Design",
      category: "pop",
      description:
        "Modern office space with sophisticated ceiling patterns and lighting.",
      imageUrl:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
          caption: "Pattern molding",
        },
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&h=400&fit=crop",
          caption: "Finishing touches",
        },
        {
          url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
          caption: "Completed workspace",
        },
      ],
    },
    {
      id: "6",
      title: "Bedroom False Ceiling",
      category: "pop",
      description:
        "Cozy bedroom with artistic ceiling design and mood lighting.",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
          caption: "Artistic patterns",
        },
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&h=400&fit=crop",
          caption: "Mood lighting setup",
        },
      ],
    },

    // Solar Projects
    {
      id: "7",
      title: "Residential Solar Installation",
      category: "solar",
      description:
        "Complete solar panel system with battery backup for home energy independence.",
      imageUrl:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
          caption: "Panel mounting",
        },
        {
          url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
          caption: "Inverter installation",
        },
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=600&h=400&fit=crop",
          caption: "Battery system",
        },
      ],
    },
    {
      id: "8",
      title: "Commercial Solar Array",
      category: "solar",
      description: "Large-scale solar installation for commercial building.",
      imageUrl:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
          caption: "Array configuration",
        },
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=600&h=400&fit=crop",
          caption: "Control systems",
        },
      ],
    },

    // Electrical
    {
      id: "9",
      title: "Modern Electrical Panel",
      category: "electrical",
      description:
        "Complete electrical panel installation with safety features.",
      imageUrl:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=600&h=400&fit=crop",
          caption: "Wiring layout",
        },
        {
          url: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&h=400&fit=crop",
          caption: "Safety testing",
        },
        {
          url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          caption: "Final connections",
        },
      ],
    },
    {
      id: "10",
      title: "Smart Home Wiring",
      category: "electrical",
      description: "Advanced home automation and electrical systems.",
      imageUrl:
        "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
          caption: "Smart switches",
        },
        {
          url: "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=600&h=400&fit=crop",
          caption: "Control hub setup",
        },
      ],
    },

    // Furniture & Carpentry
    {
      id: "11",
      title: "Custom Kitchen Cabinets",
      category: "furniture",
      description: "Handcrafted kitchen cabinets with premium finishing.",
      imageUrl:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&h=400&fit=crop",
          caption: "Cabinet construction",
        },
        {
          url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
          caption: "Hardware installation",
        },
        {
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
          caption: "Finishing work",
        },
      ],
    },
    {
      id: "12",
      title: "Built-in Wardrobes",
      category: "furniture",
      description: "Space-efficient wardrobe solutions with modern design.",
      imageUrl:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&h=400&fit=crop",
          caption: "Frame assembly",
        },
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&h=400&fit=crop",
          caption: "Interior fittings",
        },
      ],
    },

    // Plumbing & Water
    {
      id: "13",
      title: "Borehole Installation",
      category: "plumbing",
      description: "Complete water borehole system with pump and storage.",
      imageUrl:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&h=400&fit=crop",
          caption: "Drilling operation",
        },
        {
          url: "https://images.unsplash.com/photo-1558618666-0c20ac612ecf?w=600&h=400&fit=crop",
          caption: "Pump installation",
        },
        {
          url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
          caption: "Water testing",
        },
      ],
    },
    {
      id: "14",
      title: "Modern Bathroom Plumbing",
      category: "plumbing",
      description: "Contemporary bathroom with premium fixtures and piping.",
      imageUrl:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
          caption: "Pipe installation",
        },
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&h=400&fit=crop",
          caption: "Fixture mounting",
        },
      ],
    },

    // Before/After Examples
    {
      id: "15",
      title: "Roof Renovation Project",
      category: "roofing",
      description:
        "Complete roof transformation from old to new premium materials.",
      imageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&sat=-100&brightness=0.7",
      beforeImage:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&sat=-100&brightness=0.7",
      isBeforeAfter: true,
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
          caption: "Demolition phase",
        },
        {
          url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
          caption: "New structure",
        },
      ],
    },
    {
      id: "16",
      title: "Kitchen Renovation",
      category: "furniture",
      description:
        "Complete kitchen makeover with custom cabinets and modern finishes.",
      imageUrl:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop",
      beforeImage:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&sat=-100&brightness=0.7",
      isBeforeAfter: true,
      additionalImages: [
        {
          url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
          caption: "Cabinet installation",
        },
        {
          url: "https://images.unsplash.com/photo-1615529162924-f8605388461d?w=600&h=400&fit=crop",
          caption: "Countertop fitting",
        },
        {
          url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
          caption: "Final styling",
        },
      ],
    },
  ];

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Roofing", value: "roofing" },
    { label: "POP Ceiling", value: "pop" },
    { label: "Solar", value: "solar" },
    { label: "Electrical", value: "electrical" },
    { label: "Furniture", value: "furniture" },
    { label: "Plumbing", value: "plumbing" },
  ];

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    setShowBefore(false);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setShowBefore(false);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const newIndex =
      direction === "prev"
        ? (selectedImage - 1 + filteredItems.length) % filteredItems.length
        : (selectedImage + 1) % filteredItems.length;

    setSelectedImage(newIndex);
    setShowBefore(false);
  };

  return (
    <div className="min-h-screen bg-beige">
      {/* Hero Section */}
      <section className="bg-wine text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects showcasing 15+ years of
            craftsmanship, quality materials, and satisfied customers across
            Kenya.
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
                placeholder="Search projects..."
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

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <>
              {/* Masonry Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <div
                    key={item.id}
                    className="group relative bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        width={100}
                        height={64}
                      />

                      {/* Before/After Badge */}
                      {item.isBeforeAfter && (
                        <div className="absolute top-3 left-3 bg-gold text-charcoal px-3 py-1 rounded-full text-sm font-medium">
                          Before/After
                        </div>
                      )}

                      {/* Hover Overlay */}
                      {/* <div className="absolute inset-0 bg-wine bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                        <div className="text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                          <h4 className="font-bold mb-2">{item.title}</h4>
                          <p className="text-sm">Click to view details</p>
                        </div>
                      </div> */}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-bold text-charcoal mb-2 group-hover:text-wine transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="mt-3">
                        <span className="inline-block bg-beige text-wine text-xs font-medium px-3 py-1 rounded-full">
                          {
                            categories.find(
                              (cat) => cat.value === item.category
                            )?.label
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-16">
                <p className="text-gray-600 mb-6">
                  Showing {filteredItems.length} of {galleryItems.length}{" "}
                  projects
                </p>
                <Button
                  onClick={() => {}}
                  className="bg-wine text-white hover:bg-gold transition-colors duration-300 px-8 py-4 text-lg"
                  size="lg"
                >
                  Start Your Project
                </Button>
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-charcoal mb-4">
                No projects found
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

      {/* Enhanced Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-dixim-dark opacity-95 z-50 flex items-center justify-center">
          <div className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-dixim-burgundy transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-dixim-burgundy transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-dixim-burgundy transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Content Container */}
            <div className="w-full h-full flex flex-col items-center justify-center overflow-y-auto">
              {/* Main Image */}
              {/* <div className="relative max-w-4xl w-full mb-6">
                <Image
                  src={
                    filteredItems[selectedImage].isBeforeAfter && showBefore
                      ? filteredItems[selectedImage].beforeImage ||
                        filteredItems[selectedImage].imageUrl
                      : filteredItems[selectedImage].imageUrl
                  }
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-auto max-h-96 object-contain rounded-lg"
                  width={100}
                  height={75}
                />
              </div> */}

              {/* Project Info */}
              <div className="bg-dixim-burgundy opacity-95 text-white p-6 rounded-lg max-w-4xl w-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">
                    {filteredItems[selectedImage].title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {filteredItems[selectedImage].description}
                </p>
                <div className="mb-6">
                  <span className="inline-block bg-gold text-white text-sm font-medium px-3 py-1 rounded-full">
                    {
                      categories.find(
                        (cat) =>
                          cat.value === filteredItems[selectedImage].category
                      )?.label
                    }
                  </span>
                </div>

                {/* Additional Project Images */}
                <div className="border-t border-gray-600 pt-6">
                  <h4 className="text-lg font-semibold mb-4 text-gold">
                    Project Gallery
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredItems[selectedImage].additionalImages.map(
                      (image, index) => (
                        <div key={index} className="group relative">
                          <Image
                            src={image.url}
                            alt={image.caption}
                            className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                            width={100}
                            height={32}
                          />
                          {/* <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                            <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-2">
                              {image.caption}
                            </p>
                          </div> */}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* CTA in Lightbox */}
                <div className="border-t border-gray-600 pt-6 mt-6 text-center">
                  <p className="text-gray-300 mb-4">
                    Interested in a similar project?
                  </p>
                  <Button
                    onClick={() => {
                      closeLightbox();
                      route.push("/contact");
                    }}
                    className="bg-gold text-charcoal hover:bg-wine hover:text-white transition-colors duration-300"
                  >
                    Get a Quote for Your Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 wine-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Inspired by Our Work?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Every project in our gallery represents our commitment to quality,
            craftsmanship, and customer satisfaction. Let&apos;s create
            something amazing for you too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => route.push("/contact")}
              className="bg-gold text-charcoal hover:bg-white hover:text-wine transition-colors duration-300 px-8 py-4 text-lg font-semibold"
              size="lg"
            >
              Start Your Project
            </Button>
            <Button
              onClick={() => route.push("/services")}
              variant="outline"
              className="text-charcoal hover:bg-dixim-gold hover:text-dixim-burgundy transition-colors duration-300 px-8 py-4 text-lg font-semibold border-none"
              size="lg"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type suppliersArr = [string, string, string, string, string, string];

interface testi {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);
  const route = useRouter();

  const testimonials: testi[] = [
    {
      name: "Sarah Wanjiku",
      location: "Nairobi",
      text: "Dixim Roof transformed our home with a beautiful new roof. Their attention to detail and professionalism exceeded our expectations.",
      rating: 5,
    },
    {
      name: "John Kimani",
      location: "Kiambu",
      text: "Excellent service for our office POP ceiling installation. The team was punctual, skilled, and delivered beyond what we imagined.",
      rating: 5,
    },
    {
      name: "Grace Otieno",
      location: "Mombasa",
      text: "Their solar installation has saved us so much on electricity bills. Professional work and great customer service throughout.",
      rating: 5,
    },
  ];

  const suppliers: suppliersArr = [
    "Gerard Roofing",
    "Milano Tiles",
    "Classic Systems",
    "Solar Tech",
    "Premium Aluminium",
    "Elite Fixtures",
  ];

  // Testimonial rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section>
      <section className="py-20 bg-white ">
        <div className="container mx-auto px-4">
          {/* Testimonials */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-16">
            <h3 className="text-3xl font-bold text-center text-charcoal mb-8">
              What Our Clients Say
            </h3>
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-dixim-gold fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6 italic leading-relaxed">
                  &quot;{testimonials[currentTestimonial].text}&quot;
                </blockquote>
                <div>
                  <p className="font-semibold text-charcoal text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>

              {/* Testimonial indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentTestimonial
                        ? "bg-dixim-burgundy"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Trusted Suppliers */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-charcoal mb-8">
              Trusted by Leading Suppliers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {suppliers.map((supplier, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                >
                  <p className="font-medium text-gray-700">{supplier}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dixim-burgundy text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your construction needs. Our
            experts are ready to bring your vision to life.
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
    </section>
  );
}

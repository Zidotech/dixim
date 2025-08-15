"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export default function ContactPage({}) {
  const route = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Premium Roofing",
    "POP Ceiling",
    "Aluminium Works",
    "Borehole Systems",
    "Floor & Wall Tiling",
    "3D Finishes",
    "Electrical Works",
    "Solar Installations",
    "CCTV & Security",
    "Furniture & Carpentry",
    "Other / Multiple Services",
  ];

  const projectTypes = [
    "Residential - New Construction",
    "Residential - Renovation",
    "Commercial - New Construction",
    "Commercial - Renovation",
    "Industrial Project",
    "Emergency Repair",
  ];

  const budgetRanges = [
    "Under NGN 100,000",
    "NGN 100,000 - 500,000",
    "NGN 500,000 - 1,000,000",
    "NGN 1,000,000 - 2,500,000",
    "NGN 2,500,000 - 5,000,000",
    "Above NGN 5,000,000",
    "Prefer to discuss",
  ];

  const timelines = [
    "ASAP / Emergency",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "Planning stage",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-beige flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-charcoal mb-4">
            Quote Request Sent!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in Dixim Roof. We&apos;ll review your
            request and get back to you within 24 hours with a detailed quote.
          </p>
          <Button
            onClick={() => route.push("/")}
            className="bg-wine text-white hover:bg-gold transition-colors duration-300 w-full"
          >
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-beige">
      {/* Hero Section */}
      <section className="relative bg-wine text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=600&fit=crop"
            alt="Contact us"
            className="w-full h-full object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction project? Fill out our detailed form
            below and receive a comprehensive quote within 24 hours. Our experts
            are here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-charcoal py-3 text-white">
                  <CardTitle className="text-2xl">
                    Project Details & Quote Request
                  </CardTitle>
                  <p className="text-gray-300">
                    Please provide detailed information about your project to
                    help us give you the most accurate quote.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-charcoal mb-4">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) =>
                              handleInputChange("name", e.target.value)
                            }
                            placeholder="John Doe"
                            required
                            className="border-gray-300 focus:border-wine"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">
                            Phone Number *
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            placeholder="+254 712 345 678"
                            required
                            className="border-gray-300 focus:border-wine"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-charcoal mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          placeholder="john@example.com"
                          required
                          className="border-gray-300 focus:border-wine"
                        />
                      </div>
                    </div>

                    {/* Project Information */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-charcoal mb-4">
                        Project Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">
                            Primary Service Needed *
                          </label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) =>
                              handleInputChange("service", value)
                            }
                          >
                            <SelectTrigger className="border-gray-300 focus:border-wine">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">
                            Project Type *
                          </label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) =>
                              handleInputChange("projectType", value)
                            }
                          >
                            <SelectTrigger className="border-gray-300 focus:border-wine">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">
                            Budget Range
                          </label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) =>
                              handleInputChange("budget", value)
                            }
                          >
                            <SelectTrigger className="border-gray-300 focus:border-wine">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-charcoal mb-2">
                            Project Timeline
                          </label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) =>
                              handleInputChange("timeline", value)
                            }
                          >
                            <SelectTrigger className="border-gray-300 focus:border-wine">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline} value={timeline}>
                                  {timeline}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <label className="block text-sm font-medium text-charcoal mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        placeholder="Please provide detailed information about your project including location, specific requirements, preferred materials, any special considerations, and any questions you may have..."
                        rows={6}
                        required
                        className="border-gray-300 focus:border-wine resize-none"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        The more details you provide, the more accurate your
                        quote will be.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-wine text-white hover:bg-gold transition-colors duration-300 py-4 text-lg font-semibold"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Quote Request...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Get My Free Quote
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-gold text-charcoal py-2">
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-wine mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">Phone</p>
                      <p className="text-gray-600">+234 703 914 0708</p>
                      <p className="text-sm text-gray-500">
                        Available 24/7 for emergencies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-wine mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">Email</p>
                      <p className="text-gray-600">info@diximroof.co.ke</p>
                      <p className="text-sm text-gray-500">
                        Response within 2 hours
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-wine mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">
                        Office Location
                      </p>
                      <p className="text-gray-600">Osun, Nigeria</p>
                      <p className="text-sm text-gray-500">
                        Serving all of Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-wine mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-charcoal">
                        Business Hours
                      </p>
                      <p className="text-gray-600">
                        Mon - Sat: 8:00 AM - 6:00 PM
                      </p>
                      <p className="text-sm text-gray-500">
                        Sunday: Emergency calls only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Options */}
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-charcoal text-white">
                  <CardTitle className="text-xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <Button
                    onClick={() => window.open("tel:+2347039140708")}
                    className="w-full bg-green-600 text-white hover:bg-green-700 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    onClick={() => window.open("https://wa.me/2347039140708")}
                    className="w-full bg-green-500 text-white hover:bg-green-600 transition-colors duration-300"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
                    </svg>
                    WhatsApp Chat
                  </Button>
                  <Button
                    onClick={() => window.open("mailto:info@diximroof.co.ke")}
                    variant="outline"
                    className="w-full border-wine text-wine hover:bg-wine hover:text-white transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="shadow-xl border-0">
                <CardHeader className="bg-beige">
                  <CardTitle className="text-xl text-charcoal">
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>
                      🏙️ <strong>Osun</strong> - Main service area
                    </p>
                    <p>
                      🏘️ <strong>Ondo</strong> - Regular service
                    </p>
                    <p>
                      🌊 <strong>Lagos</strong> - Coastal projects
                    </p>
                    <p>
                      🏔️ <strong>South West</strong> - Extended coverage
                    </p>
                    <p>
                      🗺️ <strong>Nationwide</strong> - Major projects
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-4">
                    Travel charges may apply for locations outside Lagos
                    metropolitan area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-charcoal mb-6">
              Why Get Your Quote From Dixim Roof?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Fast Response
              </h3>
              <p className="text-gray-600">Quote delivered within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💯</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Accurate Pricing
              </h3>
              <p className="text-gray-600">
                Detailed breakdown with no hidden costs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Custom Solutions
              </h3>
              <p className="text-gray-600">Tailored to your specific needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">
                Free Consultation
              </h3>
              <p className="text-gray-600">Expert advice at no cost</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

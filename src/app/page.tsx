import { HeroSection } from "@/components/Homepage/HeroSection";
import { AboutSection } from "@/components/Homepage/AboutSection";
import { ServiceSection } from "@/components/Homepage/ServiceSection";
import { Testimonials } from "@/components/Homepage/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <Testimonials />
    </>
  );
}

import AboutUsSection from "@/components/HomeSections/AboutUsSection";
import BlogSection from "@/components/HomeSections/BlogSection";
import HeroSection from "@/components/HomeSections/HeroSection";
import PartnersSection from "@/components/HomeSections/PartnersSection";
import PricingPlansSection from "@/components/HomeSections/PricingPlansSection";
import ProvidedServices from "@/components/HomeSections/ProvidedServices";
import RecentWorksSection from "@/components/HomeSections/RecentWorksSection";
import ServicesSection from "@/components/HomeSections/ServicesSection";
import TestimonialsSection from "@/components/HomeSections/TestimonialsSection";

export default function Home() {
  return (
  <div className="flex flex-col">
    <HeroSection/>
    <ServicesSection/>
    <AboutUsSection/>
    <PricingPlansSection/>
    <RecentWorksSection/>
    <ProvidedServices/>
    <TestimonialsSection/>
    <PartnersSection/>
    <BlogSection/>
  </div>
  );
}

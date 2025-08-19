import HeroSection from "@/components/HomeSections/HeroSection";
import ServicesSection from "@/components/HomeSections/ServicesSection";

export default function Home() {
  return (
  <div className="flex flex-col">
    <HeroSection/>
    <ServicesSection/>
  </div>
  );
}

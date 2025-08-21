import FAQ from "@/components/FAQ";
import ServicesSection from "@/components/HomeSections/ServicesSection";
import OurVision from "@/components/OurVision";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col py-[60px] mainContainer bg-[url(/assets/backgrounds/HeroSectionServices.png)] bg-cover h-[260px] text-white gap-8 justify-center items-center">
        <h1 className="h1 font-bold">Our Services</h1>
        <p className="p2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <ServicesSection/>
      <OurVision/>
      <FAQ/>
    </div>
  );
};

export default page;

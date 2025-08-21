import Heading from "@/components/Heading";
import AboutUsSection from "@/components/HomeSections/AboutUsSection";
import ProvidedServices from "@/components/HomeSections/ProvidedServices";
import RecentWorksSection from "@/components/HomeSections/RecentWorksSection";
import OurVision from "@/components/OurVision";
import ProfessionalCard from "@/components/ProfessionalCard";
import { ProfessionalData } from "@/data/data";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-8 text-white justify-center items-center bg-[url(/assets/backgrounds/aboutusHero.png)] bg-cover h-[260px] py-[60px] mainContainer">
        <h1 className="h1 font-bold">About Us</h1>
        <p className="p2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-evenly items-center py-[60px] mainContainer bg-primary-50">
        <Image
          src={"/assets/backgrounds/aboutusManager.png"}
          height={444}
          width={331}
          alt="CEO"
        />
        <div className="flex flex-col gap-12">
          <Image
            src={"/assets/icons/Qoute.svg"}
            height={60}
            width={70}
            alt="qoute"
          />
          <div className="flex flex-col gap-4 max-w-[770px]">
            <h1 className="h1-small font-medium text-primary-800">
              Hepling people to solve sanitary problems with effective solutions
              over the last 25 years
            </h1>
            <h3 className="h3 font-bold text-primary-500">John Doe</h3>
            <p className="p1 text-primary-500">CEO & Director of Housefix</p>
          </div>

          <Image
            src={"/assets/backgrounds/Signed.svg"}
            height={137}
            width={314}
            alt="qoute"
          />
        </div>
      </div>
      <div className="flex flex-col py-[60px] md:py-[80px] lg:py-[100px] gap-12">
        <Heading
          title="Our Team"
          head="We Have Professional Head 
Of Team Working"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {ProfessionalData.map((card) => (
            <ProfessionalCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      <OurVision/>
      <ProvidedServices/>
      <RecentWorksSection/>
      <AboutUsSection/>
    </div>
  );
};

export default page;

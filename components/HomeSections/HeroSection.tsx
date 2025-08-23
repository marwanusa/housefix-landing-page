import Image from "next/image";
import React from "react";
import { Button } from "../Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="bg-[url(/assets/backgrounds/firstHeroSection.png)] bg-cover w-full h-[877px] md:h-[1129px] lg:h-[730px] mainContainer flex flex-col lg:flex-row justify-between lg:justify-center items-center text-white   ">
      <div className="flex flex-col gap-8 justify-center items-center max-w-[636px] lg:pt-0 md:pt-20 pt-8">
        <h1 className="h2 lg:h1 font-bold ">
          Plumbing Experts Right at Your Doorstep
        </h1>
        <p className="p2 md:p1">
          Our plumbers are the most recognized professionals globally because
          we’re committed to excellent service, and nothing wears on homeowners
          like the idea of handling plumbing problems.
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center lg:justify-start w-full">
          <Link href={"/contact-us"}>
          <Button variant="primary" className="h-[60px] w-[280px]">
            Request a Job Estimate
          </Button>
          </Link>

          <Link href={"#pricing"}>
          <div  className="w-[200px] h-[60px] border-primary-500 border-3 p1 font-bold cursor-pointer hover:bg-primary-500 active:bg-primary-300 active:border-primary-300 rounded-md text-white flex justify-center items-center transition-all ">
            Pricing Plans
          </div>
          </Link>
        </div>
      </div>
            <Image
        src={"/assets/backgrounds/ManImage.png"}
        width={504}
        height={730}
        alt="man image"
        className="md:h-[730px] md:w-[504px] w-[350px] h-[490px] "
      />
    </div>
  );
};

export default HeroSection;

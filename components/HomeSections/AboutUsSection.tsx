import Image from "next/image";
import React from "react";
import { Button } from "../Button";

const AboutUsSection = () => {
  const checkItems: string[] = [
    "Praesent Sodales Orci",
    "Curabitur Dignissim",
    "Nulla Condimentum",
  ];
  return (
    <div className="py-[60px] md:py-[80px] lg:py-[100px] flex flex-col lg:flex-row items-center justify-evenly mainContainer gap-10" >
      <div className='relative  after:content-[""] after:absolute after:bg-primary-500 after:w-full after:h-full after:left-5 after:top-5 after:z-[-1]'>
        <Image
          src={"/assets/backgrounds/aboutusSection.png"}
          width={432}
          height={446}
          alt="image"
        />
      </div>
      <div className="flex flex-col gap-4 lg:items-start items-center  text-primary-800 flex-1 max-w-[700px]">
        <h1 className="h1-small  font-bold">
          Taking regular plumbing care will save you time and money
        </h1>
        <p className="p1 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
        {checkItems.map((item, idx) => {
          return (
            <div className="flex items-center gap-2 " key={idx}>
              <Image
                src={"/assets/icons/Check.svg"}
                width={20}
                height={20}
                alt="check image"
              />
              <p className="p1 font-medium">{item}</p>
            </div>
          );
        })}
        <Button variant="primary" iconPosition="left" size="lg" className="gap-2">
          More About Us
          <Image
            src={"/assets/icons/Arrow-Up-Right.svg"}
            width={20}
            height={20}
            alt="arrow image"
            className="invert brightness-0 "
          />
        </Button>
      </div>
    </div>
  );
};

export default AboutUsSection;

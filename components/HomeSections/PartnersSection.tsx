import React from "react";
import Heading from "../Heading";
import Image from "next/image";

const PartnersSection = () => {
  const images = [
    "Paypal.png",
    "Netflix.svg",
    "Medium.svg",
    "Amazon.svg",
    "Adobe.svg",
    "WooCommerce.svg",
    "Slack.svg",
    "Sitpoint.svg",
  ];
  return (
    <div className="flex flex-col mainContainer py-[60px]" id="partners">
      <Heading head="Our Partners" title="Worked With" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-8 gap-y-12">
        {images.map((img, idx) => {
          return (
            <div
              className="h-[160px] flex justify-center items-center w-full"
              key={idx}
            >
              <Image
                src={`/assets/icons/${img}`}
                width={160}
                height={35}
                alt="partner"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PartnersSection;

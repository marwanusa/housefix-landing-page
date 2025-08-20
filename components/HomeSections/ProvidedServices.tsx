import Image from "next/image";
import React from "react";

const ProvidedServices = () => {
  const widgetsData: { icon: string; number: string; title: string }[] = [
    {
      icon: "Community.svg",
      number: "1,200",
      title: "Happy Customers",
    },
    {
      icon: "PipePlumbing.svg",
      number: "8,714",
      title: "Installed Units",
    },
    {
      icon: "Building.svg",
      number: "1,600",
      title: "Home Served",
    },
    {
      icon: "Professional.svg",
      number: "500",
      title: "Professional",
    },
  ];
  return (
    <div className="py-[60px]  mainContainer bg-primary-50 flex flex-col gap-12">
      <h2 className="h2 font-bold text-primary-500 text-center">
        Providing excellent services for the last 25 years
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-3 md:gap-6 gap-12">
        {widgetsData.map((widget, idx) => {
          return (
            <div key={idx} className="flex justify-center items-center gap-2">
              <Image
                src={`/assets/icons/${widget.icon}`}
                width={52}
                height={52}
                alt="icon"
              />
              <div className="flex flex-col gap-2 items-start text-primary-800">
                <div className="flex justify-center items-center">
                  <h2 className="h2-small font-bold">{widget.number}</h2>
                  <h2 className="h2-small font-bold text-primary-500">+</h2>
                </div>
                <p className="p2 font-medium">{widget.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProvidedServices;

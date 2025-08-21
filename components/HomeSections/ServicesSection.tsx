import React from "react";
import ServiceCard from "../ServiceCard";
import { servicesData } from "@/data/data";
import Heading from "../Heading";

const ServicesSection = () => {

  return (
    <div className="flex flex-col gap-6 items-center md:py-[80px] py-[60px] mainContainer" id="services">
    <Heading head="The Best Plumbing Service & Maintanence" title="Services We Provide"/>
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-4 ">
    {
      servicesData.map((service,idx)=>{
        return(
          <div key={idx}>
            <ServiceCard image={`/assets/backgrounds/${service.image}`} title={service.title} description={service.text} icon={`/assets/icons/${service.icon}`}/>
          </div>
        )
      })
    }
  </div>
  </div>
  )
};

export default ServicesSection;

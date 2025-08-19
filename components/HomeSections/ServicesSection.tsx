import React from "react";
import ServiceCard from "../ServiceCard";
import { servicesData } from "@/data/data";

const ServicesSection = () => {

  return (
  <div className="md:py-[80px] py-[60px] mainContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
    
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
  )
};

export default ServicesSection;

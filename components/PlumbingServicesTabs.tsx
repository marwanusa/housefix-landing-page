'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlumbingServicesData } from "@/data/data";
import { PlumbingServiceType } from "@/types/types";
import Image from "next/image";
import { useState } from "react";

const ServiceCard = ({ title, category, description, imageUrl }:PlumbingServiceType) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={377}
        height={456}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Service title and category */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-300">{category}</p>
      </div>

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-blue-600/95 flex items-center justify-center p-6 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function PlumbingServicesTabs() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <Tabs defaultValue="tab-1" className="w-full">
        <TabsList className="text-foreground h-auto gap-2 rounded-none border-b bg-transparent px-0 py-1 w-full justify-start">
          <TabsTrigger
            value="tab-1"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-blue-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            All Projects
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-blue-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Commercial Services
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-blue-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Residential Services
          </TabsTrigger>
          <TabsTrigger
            value="tab-4"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-blue-500 data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Emergency Services
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tab-1" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PlumbingServicesData.all.map((service, index) => (
              <ServiceCard key={index} {...service}  />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tab-2" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PlumbingServicesData.commercial.map((service, index) => (
              <ServiceCard key={index} {...service}  />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tab-3" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PlumbingServicesData.residential.map((service, index) => (
              <ServiceCard key={index} {...service}  />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tab-4" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PlumbingServicesData.emergency.map((service, index) => (
              <ServiceCard key={index} {...service}  />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

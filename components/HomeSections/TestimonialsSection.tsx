import React from "react";
import Heading from "../Heading";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { testimonialsData } from "@/data/data";
import TestimonialCard from "../TestimonialCard";

const TestimonialsSection = () => {
  return (
    <div className="mainContainer py-[60px] md:py-[80px] lg:py-[100px] flex flex-col gap-8">
      <Heading
        head="Our Partner & Customer Give The Best Review For Us"
        title="Customer Testimonial"
      />
      <Carousel>
        <CarouselContent className="cursor-grab ">
          {testimonialsData.map((testimonial, idx) => {
            return (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 " key={idx}>
                <TestimonialCard
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  role={testimonial.role}
                  stars={testimonial.stars}
                  review={testimonial.review}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TestimonialsSection;

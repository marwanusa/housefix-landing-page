import { testimonialsType } from "@/types/types";
import Image from "next/image";
import React from "react";


const TestimonialCard = ({
  stars,
  review,
  avatar,
  name,
  role,
}: testimonialsType) => {
  return (
    <div className="flex flex-col py-[40px] px-[24px] justify-between h-[350px] border-b-5 rounded-sm border-b-primary-500 max-w-[360px] bg-primary-50 select-none">
      <div className="flex gap-2 items-center justify-center">
        {[...Array(stars)].map((star, idx) => {
          return (
            <Image
              src={"/assets/icons/Star.svg"}
              width={20}
              height={20}
              alt="star"
              key={idx}
            />
          );
        })}
      </div>
      <p className="p2 font-medium text-primary-800">{review}</p>
      <div className="flex gap-4 items-center ">
        <Image
          src={avatar}
          width={60}
          height={60}
          alt="avatar"
          className="rounded-full"
        />
        <div className="flex flex-col items-start gap-2">
          <h4 className="h4 font-bold text-primary-800">{name}</h4>
          <p className="p2 text-primary-800">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

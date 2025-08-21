import Image from "next/image";
import React from "react";

const Heading = ({ title, head }: { title: string; head: string }) => {
  return (
    <div className="flex flex-col gap-6 ">
      <div className="flex gap-2 justify-center items-center">
      <h5 className="h5 font-medium text-primary-500 ">{title}</h5>
      <Image
      src={"../public/assets/icons/ArrowRight.svg"}
      width={38}
      height={16}
      alt="arrow image"
      />
      </div>
      <h1 className="h1-small font-bold text-primary-800 text-center">
        {head}
      </h1>
    </div>
  );
};

export default Heading;

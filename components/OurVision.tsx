import Image from "next/image";
import React from "react";

type visionData = {
  color: "white" | "blue";
  icon: string;
  title: string;
  description: string;
};
const OurVision = () => {
  const visionData: visionData[] = [
    {
      color: "blue",
      icon: "Unite.svg",
      title: "Built an Community",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
    },
    {
      color: "white",
      icon: "Badge.svg",
      title: "Give Best Price",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
    },
    {
      color: "white",
      icon: "Friendship.svg",
      title: "Get More Partner",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
    },
    {
      color: "white",
      icon: "Support.svg",
      title: "24/7 Customer Support",
      description:
        "We bring the right people together to challenge established thinking and drive transform in 2020",
    },
  ];
  return (
    <div className="flex flex-col gap-12 items-center bg-[url(/assets/backgrounds/OurVision.png)] bg-cover mainContainer lg:py-[100px] md:py-[80px] py-[60px] bg-center">
      <div className="flex gap-2 justify-center items-center">
        <h5 className="h5 font-medium text-white ">OUR VISION</h5>
        <Image
          src={"/assets/icons/Arrow-Right.svg"}
          width={38}
          height={16}
          alt="arrow image"
          className="contrast-200 brightness-0 invert"
        />
      </div>
      <h1 className="h1 font-bold text-white text-center">
        Give The Best Service & Scale Up <br /> Our Branch Office Work
      </h1>
      <div className=" flex flex-col lg:flex-row w-full items-center gap-6 justify-evenly">
        {
            visionData.map((vision,idx)=>{
                return (
                    <div key={idx} className={`flex flex-col justify-between py-[40px] px-[24px] rounded-md ${vision.color === "blue" ? "bg-primary-500 border-b-white border-b-6" : "bg-white "} max-w-[273px] h-[235px]`}>
                        <Image
                        src={`/assets/icons/${vision.icon}`}
                        width={30}
                        height={30}
                        alt="icon"
                        className={`${vision.color === "blue" && "invert brightness-0 contrast-200"}`}
                        />
                        <h5 className={`h5 font-medium ${vision.color === "blue" ? "text-white" :"text-primary-500"}`}>
                            {vision.title}
                        </h5>
                        <p className={`p3 font-normal ${vision.color === "blue" ? "text-white" : "text-primary-800"}`}>
                            {vision.description}
                        </p>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default OurVision;

"use client";
import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import ToggleSwitch from "../ToggleSwitch";
import Image from "next/image";
import { Button } from "../Button";
import { plansData } from "@/data/data";

const PricingPlansSection = () => {
  const [checked, setChecked] = useState(false);

  const [plan, setPlan] = useState(plansData[0]);
  useEffect(() => {
    if (checked) {
      setPlan(plansData[1]);
    } else {
      setPlan(plansData[0]);
    }
  }, [checked]);

  return (
    <div className="lg:py-[100px] md:py-[80px] py-[60px] flex flex-col gap-4  bg-primary-50 mainContainer">
      <Heading title="Pricing Plans" head="Affordable Pricing Plans" />
      <ToggleSwitch
        on="Annual"
        off="Monthly"
        checked={checked}
        setChecked={setChecked}
      />

      <div className="flex flex-col lg:flex-row justify-evenly items-center gap-4 lg:h-[611px] mainContainer">
        {plan?.plans.map((item, currentCard) => {
          return (
            <div
              className={`flex flex-col gap-8  py-[20px] px-[20px] w-[370px] bg-white rounded-lg ${
                currentCard === 1 ?"border-y-4 border-primary-500 border-x-0" : "border-1 border-primary-500"
              }`}
              key={currentCard}
            >
              <h4 className="h4 font-bold text-primary-800">{item.title}</h4>
              <div className="flex gap-1">
                <h1 className="h1 text-primary-500">{`$${item.price} `}</h1>
                <p className="p1 font-bold">{checked ? "/Annual" : "/Month"}</p>
              </div>
              {item.gurantees.map((gurantee, idx,currentCard) => (
                <div className="flex gap-2" key={idx}>
                  <Image
                    src={"/assets/icons/Check.svg"}
                    width={16}
                    height={16}
                    alt="check image"
                  />
                  <p className="p3 font-medium text-primary-800">{gurantee}</p>
                </div>
              ))}

              {currentCard === 1 ? (
                <Button
                  className="w-[140px] h-[52px]"
                  variant="primary"
                  size="lg"
                >
                  Get Started
                </Button>
              ) : (
                <div className="w-[140px] h-[52px] border-2 border-primary-500 text-black flex justify-center items-center cursor-pointer rounded-md hover:bg-primary-500 hover:text-white active:bg-primary-700 transition-all">
                  Get Started
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingPlansSection;

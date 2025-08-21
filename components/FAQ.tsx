import React from "react";
import Heading from "./Heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const FAQ = () => {
  return (
    <div className="flex flex-col gap-8 mainContainer py-[100px]">
      <Heading title="Question And Answer" head="Frequently Asked Question" />
      <div className="flex-1 ml-4">
        <Accordion type="single" collapsible >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How much does plumbing repair cost?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum officia culpa ab possimus voluptates est et praesentium minima, sunt sapiente.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I prevent my pipes from freezing?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio maiores exercitationem, eveniet perferendis accusantium nihil cupiditate fugiat in quam nostrum veritatis sequi necessitatibus repellat voluptate enim facilis, quo mollitia iusto.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I unclog my Drain?</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, adipisci?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How much will it cost for a HVAC system?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam modi distinctio eligendi animi velit vero soluta quod ducimus natus officia.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What size HVAC system do I need?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minus reprehenderit porro velit iusto esse, earum deserunt nulla dolores quaerat expedita corrupti magnam vel? Voluptates quis laboriosam architecto nulla voluptatem.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;

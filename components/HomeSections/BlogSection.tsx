import React from "react";
import Heading from "../Heading";
import { BlogData } from "@/data/data";
import BlogCard from "../BlogCard";

const BlogSection = () => {
  return (
    <div className="flex flex-col gap-8 py-[60px] md:py-[100px] bg-primary-50">
      <Heading title="Our Blog" head="Emergency Tips & Tricks" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
        {BlogData.map((card, idx) => {
          return (
            <div key={idx}>
              <BlogCard
                category={card.category}
                date={card.date}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogSection;

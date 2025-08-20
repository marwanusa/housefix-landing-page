import React from "react";
import Image from "next/image";

type CardProps = {
  image: string;
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const ServiceCard = ({
  image,
  icon,
  title,
  description,
  buttonText = "Learn More",
  onButtonClick,
}: CardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto hover:bg-primary-500 focus:bg-primary-600 transition-all max-h-[447px]">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Icon */}
        <Image
          src={icon as string}
          height={36}
          width={36}
          alt="icon"
          className="mb-3 group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
        />

        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-900 mb-3 group-hover:text-primary-50">
          {title}
        </h3>

        {/* Description */}
        <p className="text-primary-800 p3 mb-6 group-hover:text-primary-50 line-clamp-3">
          {description}
        </p>

        {/* Button */}
        <button
          onClick={onButtonClick}
          className="flex items-center text-primary-800 p1 font-medium text-sm group-hover:text-primary-50 transition-colors duration-200 cursor-pointer"
        >
          {buttonText}
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;

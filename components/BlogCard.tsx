import { BlogCardProps } from "@/types/types";
import { Calendar, ArrowRight } from 'lucide-react';

 const BlogCard: React.FC<BlogCardProps> = ({ 
  image, 
  category, 
  title, 
  date, 
  description, 
  readMoreLink = "#",
}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex items-center text-blue-500 text-sm mb-3">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="truncate">{date}</span>
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-1">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-2">
          {description}
        </p>
        
        <button 
          className="flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base cursor-pointer"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2 flex-shrink-0" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard
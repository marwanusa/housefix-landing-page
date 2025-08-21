
import React from 'react';
import { Facebook, Linkedin, Twitter, Send, Mail } from 'lucide-react';
import { ProfileCard } from '@/types/types';
import Link from 'next/link';




interface ProfileCardProps {
  card: ProfileCard;
}

const ProfessionalCard: React.FC<ProfileCardProps> = ({ card }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
      {/* Image Section */}
      <div className="relative h-64">
        <img 
          src={card.image} 
          alt={card.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="px-6 py-6 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {card.name}
        </h3>
        <p className="text-gray-600 mb-4">
          {card.profession}
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-3">
          {card.socialLinks.facebook && (
            <Link 
              href={card.socialLinks.facebook}
              className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Facebook size={16} className="text-white" />
            </Link>
          )}
          {card.socialLinks.linkedin && (
            <Link 
              href={card.socialLinks.linkedin}
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Linkedin size={16} className="text-white" />
            </Link>
          )}
          {card.socialLinks.twitter && (
            <Link
              href={card.socialLinks.twitter}
              className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
            >
              <Twitter size={16} className="text-white" />
            </Link>
          )}
          {card.socialLinks.telegram && (
            <Link 
              href={card.socialLinks.telegram}
              className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Send size={16} className="text-white" />
            </Link>
          )}
          {card.socialLinks.email && (
            <Link
              href={`mailto:${card.socialLinks.email}`}
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <Mail size={16} className="text-white" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard
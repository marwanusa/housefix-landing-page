import {
  BlogCardProps,
  FooterLinkSection,
  PlumbingServicesDataType,
  ProfileCard,
  serviceDataType,
  testimonialsType,
} from "@/types/types";

export const footerContact = [
  {
    icon: "Location.svg",
    text: "3249 Henery Street, Kansas 67204",
  },
  {
    icon: "Email2.svg",
    text: "info@template.com",
  },
  {
    icon: "Call.svg",
    text: "+ (100) 234-5678",
  },
];
export const footerLinks: FooterLinkSection[] = [
  {
    heading: "Navigation",
    urls: [
      {
        text: "Home",
        href: "/",
      },
      {
        text: "Service",
        href: "/service",
      },
      {
        text: "Blog",
        href: "/blog",
      },
      {
        text: "Our Teams",
        href: "/our-terms",
      },
      {
        text: "Contact Us",
        href: "/contact-us",
      },
    ],
  },
  {
    heading: "Template",
    urls: [
      {
        text: "404",
        href: "/404",
      },
      {
        text: "Login",
        href: "/login",
      },
      {
        text: "Licenses",
        href: "/licenses",
      },
      {
        text: "Styleguide",
        href: "/styleguide",
      },
      {
        text: "Changelog",
        href: "/changelog",
      },
    ],
  },
];

export const servicesData: serviceDataType[] = [
  {
    image: "PipeInstallation.png",
    icon: "PipeInstallation.svg",
    title: "Plumbing Installation",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.",
  },
  {
    image: "GeneralPlumbing.png",
    icon: "PipePlumbing.svg",
    title: "General Plumbing",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.",
  },
  {
    image: "PlumbingMaintanence.png",
    icon: "PipeMaintanence.svg",
    title: "Plumbing Maintanence",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.",
  },
  {
    image: "FixingPipes.png",
    icon: "PipeDualPipe.svg",
    title: "Fixing Pipes",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.",
  },
  {
    image: "PlumbingLineConsultation.png",
    icon: "PipeLineConsultation.svg",
    title: "Plumbing Line Consultation",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.",
  },
  {
    image: "DrainCleaning.png",
    icon: "PipeSunction.svg",
    title: "Drain Cleaning",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.",
  },
  {
    image: "PlumbingMaintanence.png",
    icon: "PipeMaintanence.svg",
    title: "Plumbing Maintanence",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.",
  },
  {
    image: "PipeInstallation.png",
    icon: "PipeInstallation.svg",
    title: "Plumbing Installation",
    text: "Lorem ipsum dolor sit amet consectetur. Adipiscing quis ornare hac convallis a diam gravida in. Ac in tempus leo dolor nisl donec erat consequat.",
  },
];

export const plansData = [
  {
    duration: "Monthly",
    plans: [
      {
        title: "Residential Plumbing",
        price: "199",
        gurantees: [
          "Free Diagnostics & Consultation",
          "Plumbing Repairs",
          "Emergency Plumbing",
          "Sewer & Drain Cleaning",
          "Trenchless Sewer Replacement",
          "Heater Installation & Replacement, Repair",
        ],
      },
      {
        title: "Commercial Plumbing",
        price: "499",
        gurantees: [
          "Comprehensive System Inspection",
          "Water Line Installation & Repair",
          "Backflow Prevention Services",
          "Grease Trap Installation & Cleaning",
          "Commercial Sewer & Drain Solutions",
          "Industrial Water Heater Installation & Maintenance",
        ],
      },
      {
        title: "Service & Repair",
        price: "399",
        gurantees: [
          "Detailed Diagnostics & Troubleshooting",
          "Fixture Repair & Replacement",
          "Leak Detection & Repair",
          "Pipe & Valve Maintenance",
          "Drain & Clog Removal",
          "Water Heater Repair & Servicing",
        ],
      },
    ],
  },
  {
    duration: "Annual",
    plans: [
      {
        title: "Residential Plumbing",
        price: "1999",
        gurantees: [
          "Free Yearly Diagnostics & Consultation",
          "Unlimited Plumbing Repairs",
          "24/7 Emergency Plumbing Support",
          "Annual Sewer & Drain Maintenance",
          "Trenchless Sewer Replacement Coverage",
          "Heater Installation, Replacement & Yearly Service",
        ],
      },
      {
        title: "Commercial Plumbing",
        price: "4999",
        gurantees: [
          "Full-System Annual Inspection",
          "Yearly Water Line Maintenance & Repairs",
          "Advanced Backflow Prevention Management",
          "Grease Trap Annual Cleaning & Replacement",
          "Commercial Sewer & Drain Annual Plan",
          "Industrial Water Heater Annual Servicing & Replacement",
        ],
      },
      {
        title: "Service & Repair",
        price: "3999",
        gurantees: [
          "Yearly Diagnostics & Preventive Checks",
          "Unlimited Fixture Repair & Replacement",
          "Proactive Leak Detection & Repair Coverage",
          "Pipe & Valve Annual Maintenance",
          "Clog-Free Annual Drain Guarantee",
          "Comprehensive Water Heater Servicing Plan",
        ],
      },
    ],
  },
];

export const PlumbingServicesData: PlumbingServicesDataType = {
  all: [
    {
      title: "Water Line Repair",
      category: "Plumbing",
      description:
        "Expert repair and replacement of water lines, fixing leaks and ensuring proper water flow throughout your property.",
      imageUrl:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
    },
    {
      title: "Drain Cleaning",
      category: "Plumbing",
      description:
        "Professional drain cleaning services to remove clogs and blockages, restoring proper drainage in sinks, toilets, and showers.",
      imageUrl: "/assets/backgrounds/DrainCleaning.png",
    },
    {
      title: "Pipe Installation",
      category: "Plumbing",
      description:
        "Complete pipe installation and replacement services for residential and commercial properties using high-quality materials.",
      imageUrl:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    },
    {
      title: "Faucet Repair",
      category: "Plumbing",
      description:
        "Quick and efficient faucet repair and replacement services for kitchens, bathrooms, and utility areas.",
      imageUrl:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
    },
    {
      title: "Toilet Installation",
      category: "Plumbing",
      description:
        "Professional toilet installation and repair services, including fixing leaks, clogs, and complete replacements.",
      imageUrl:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    },
    {
      title: "Water Heater Service",
      category: "Plumbing",
      description:
        "Comprehensive water heater installation, maintenance, and repair services for gas, electric, and tankless units.",
      imageUrl: "/assets/backgrounds/aboutusSection.png",
    },
  ],
  commercial: [
    {
      title: "Commercial Pipe Systems",
      category: "Commercial Plumbing",
      description:
        "Large-scale pipe installation and maintenance for office buildings, restaurants, and commercial facilities.",
      imageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
    },
    {
      title: "Industrial Drain Solutions",
      category: "Commercial Plumbing",
      description:
        "Heavy-duty drain cleaning and maintenance for industrial facilities and commercial kitchens.",
      imageUrl:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    },
    {
      title: "Commercial Water Systems",
      category: "Commercial Plumbing",
      description:
        "Installation and maintenance of commercial water heating systems and pressure regulation equipment.",
      imageUrl:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
    },
    {
      title: "Backflow Prevention",
      category: "Commercial Plumbing",
      description:
        "Installation and testing of backflow prevention devices to protect water supply in commercial buildings.",
      imageUrl:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
    },
  ],
  residential: [
    {
      title: "Bathroom Plumbing",
      category: "Residential Services",
      description:
        "Complete bathroom plumbing solutions including fixture installation, leak repairs, and pipe upgrades.",
      imageUrl:
        "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop",
    },
    {
      title: "Kitchen Plumbing",
      category: "Residential Services",
      description:
        "Kitchen sink installation, garbage disposal repair, and dishwasher connection services for your home.",
      imageUrl:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
    },
    {
      title: "Home Water Heaters",
      category: "Residential Services",
      description:
        "Residential water heater installation, repair, and maintenance for optimal hot water supply in your home.",
      imageUrl:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    },
    {
      title: "Leak Detection",
      category: "Residential Services",
      description:
        "Advanced leak detection services to identify hidden water leaks and prevent costly water damage.",
      imageUrl:
        "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop",
    },
  ],
  emergency: [
    {
      title: "24/7 Pipe Burst",
      category: "Emergency Services",
      description:
        "Immediate response for burst pipes and water emergencies to minimize damage and restore water service quickly.",
      imageUrl:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop",
    },
    {
      title: "Emergency Drain Clearing",
      category: "Emergency Services",
      description:
        "Urgent drain clearing services for severe blockages that threaten to cause flooding or backup.",
      imageUrl: "/assets/backgrounds/DrainCleaning.png",
    },
    {
      title: "Water Heater Emergency",
      category: "Emergency Services",
      description:
        "Emergency water heater repair and replacement services when you suddenly lose hot water supply.",
      imageUrl:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop",
    },
    {
      title: "Flood Prevention",
      category: "Emergency Services",
      description:
        "Rapid response to prevent and mitigate water damage from plumbing failures and flooding situations.",
      imageUrl:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop",
    },
  ],
};

export const testimonialsData: testimonialsType[] = [
  {
    stars: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur. Pretium malesuada pulvinar sed feugiat sem est nisl pharetra. Facilisis ridiculus amet commodo aliquet a phasellus malesuada. Ac id quam mattis neque. Urna tellus ut maecenas interdum. Euismod egestas scelerisque viverra feugiat sit amet.",
    avatar: "https://i.pravatar.cc/100?img=1",
    name: "Michael Adam",
    role: "Hotel Manager",
  },
  {
    stars: 4,
    review:
      "Facilisis ridiculus amet commodo aliquet a phasellus malesuada. Ac id quam mattis neque. Urna tellus ut maecenas interdum. Sit amet porttitor eget dolor morbi non arcu risus quis varius quam. Proin eget tortor risus.",
    avatar: "https://i.pravatar.cc/100?img=2",
    name: "Wade Warren",
    role: "Marketing Coordinator",
  },
  {
    stars: 5,
    review:
      "Urna tellus ut maecenas interdum. Euismod egestas scelerisque viverra feugiat sit amet. Etiam ultricies nisi vel augue. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Integer posuere erat a ante.",
    avatar: "https://i.pravatar.cc/100?img=3",
    name: "Albert Flores",
    role: "President of Sales",
  },
  {
    stars: 3,
    review:
      "Habitant tristique senectus et netus et malesuada fames ac turpis egestas. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada.",
    avatar: "https://i.pravatar.cc/100?img=4",
    name: "Jane Cooper",
    role: "Product Designer",
  },
  {
    stars: 5,
    review:
      "Eget sit amet tellus cras adipiscing enim eu turpis egestas pretium. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Donec sollicitudin molestie malesuada.",
    avatar: "https://i.pravatar.cc/100?img=5",
    name: "Esther Howard",
    role: "Project Manager",
  },
  {
    stars: 4,
    review:
      "Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.",
    avatar: "https://i.pravatar.cc/100?img=6",
    name: "Devon Lane",
    role: "Software Engineer",
  },
  {
    stars: 5,
    review:
      "Sit amet porttitor eget dolor morbi non arcu risus quis varius quam. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec.",
    avatar: "https://i.pravatar.cc/100?img=7",
    name: "Eleanor Pena",
    role: "HR Specialist",
  },
  {
    stars: 4,
    review:
      "Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada. Curabitur aliquet quam id dui posuere blandit.",
    avatar: "https://i.pravatar.cc/100?img=8",
    name: "Marvin McKinney",
    role: "UI/UX Designer",
  },
  {
    stars: 5,
    review:
      "Sem viverra aliquet eget sit amet tellus cras adipiscing enim eu. Donec sollicitudin molestie malesuada. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.",
    avatar: "https://i.pravatar.cc/100?img=9",
    name: "Brooklyn Simmons",
    role: "Business Analyst",
  },
];

export const BlogData: BlogCardProps[] = [
  {
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop",
    category: "TIPS & TRICKS",
    title: "The Do's and Don'ts of Fixing a Blocked Drain",
    date: "January 4, 2022",
    description:
      "The Do's and Don'ts of Fixing a Blocked Drain Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    category: "MAINTENANCE",
    title: "Essential Home Plumbing Maintenance Guide",
    date: "February 15, 2022",
    description:
      "Learn the essential maintenance tasks every homeowner should know to keep their plumbing system running smoothly and prevent costly repairs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
    category: "REPAIRS",
    title: "How to Fix a Leaky Faucet in 5 Easy Steps",
    date: "March 8, 2022",
    description:
      "Stop wasting water and money with this comprehensive guide to fixing common faucet leaks using basic tools you probably already have.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop",
    category: "TIPS & TRICKS",
    title: "10 Signs Your Pipes Need Professional Attention",
    date: "June 3, 2022",
    description:
      "Don't ignore these warning signs that indicate your plumbing system needs professional inspection and possible repair or replacement.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=400&h=300&fit=crop",
    category: "UPGRADES",
    title: "Modern Bathroom Fixtures: Style Meets Function",
    date: "July 18, 2022",
    description:
      "Explore the latest trends in bathroom fixtures that combine aesthetic appeal with water efficiency and smart home integration.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=400&h=300&fit=crop",
    category: "MAINTENANCE",
    title: "Seasonal Plumbing Checklist for Homeowners",
    date: "August 25, 2022",
    description:
      "Stay ahead of plumbing problems with this comprehensive seasonal maintenance checklist that covers spring, summer, fall, and winter tasks.",
  },
];


export const ProfessionalData: ProfileCard[] = [
  {
    id: 1,
    name: "Steven Grant",
    profession: "Plumber",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      telegram: "#",
      email: "#"
    }
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    profession: "Electrician",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      telegram: "#",
      email: "#"
    }
  },
  {
    id: 3,
    name: "David Chen",
    profession: "HVAC Technician",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      telegram: "#",
      email: "#"
    }
  },
  {
    id: 4,
    name: "Sarah Johnson",
    profession: "Carpenter",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    socialLinks: {
      facebook: "#",
      linkedin: "#",
      twitter: "#",
      telegram: "#",
      email: "#"
    }
  }
];

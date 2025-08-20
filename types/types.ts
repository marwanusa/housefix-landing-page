type FooterUrl = {
  text: string;
  href: string;
};

export type FooterLinkSection = {
  heading: string;
  urls: FooterUrl[];
};

export type serviceDataType = {
  image: string;
  icon: string;
  title: string;
  text: string;
};

export type PlumbingServiceType = {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
};

export type PlumbingServicesDataType = {
  all: PlumbingServiceType[];
  commercial: PlumbingServiceType[];
  emergency: PlumbingServiceType[];
  residential: PlumbingServiceType[];
};

export type testimonialsType = {
  stars: number;
  review: string;
  avatar: string;
  name: string;
  role: string;
};


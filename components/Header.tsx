import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="h-[36px] mainContainer bg-primary-900 text-white flex justify-between items-center p4 font-medium">
      <p>Working Time: Mon - Thu 9:00 AM - 5:00 PM</p>
      <div className="flex gap-5 items-center">
        <div className="flex gap-2 items-center">
          <Image
            src={"/assets/icons/Email-2.svg"}
            width={16}
            height={12}
            alt="Email"
          />
          <p>info@template.com</p>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src={"/assets/icons/Call.svg"}
            width={13}
            height={13}
            alt="Email"
          />
          <p>+ (100) 234-5678</p>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <Link href={"facebook.com"}>
          <Image
            src={"/assets/icons/Socialfacebook1.svg"}
            width={20}
            height={20}
            alt="Facebook"
          />
        </Link>

        <Link href={"instagram.com"}>
          <Image
            src={"/assets/icons/SocialInstagram.svg"}
            width={20}
            height={20}
            alt="Instagram"
          />
        </Link>
        <Link href={"x.com"}>
          <Image
            src={"/assets/icons/Socialtwitter.svg"}
            width={20}
            height={20}
            alt="twitter"
          />
        </Link>
        <Link href={"whatsapp.com"}>
          <Image
            src={"/assets/icons/SocialWhatsapp.svg"}
            width={20}
            height={20}
            alt="Whatsapp"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;

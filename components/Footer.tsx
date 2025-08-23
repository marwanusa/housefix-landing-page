import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";
import { footerContact, footerLinks } from "@/data/data";

const Footer = () => {
  return (
    <div className=" lg:pt-[100px] pt-[20px] pb-[10px]  mainContainer flex flex-col gap-10 bg-neutral-900 text-white">
      {/* Footer Heading */}
      <div className="flex flex-col xl:flex-row gap-8 justify-between relative mb-14">
        <h1 className="h1 font-bold">Contact us to get a quotation.</h1>
        <Link href={"/contact-us"}>
        <Button size="md" variant={"secondary"}>
          Contact Us
        </Button>
        </Link>
      </div>
      <hr />
      {/* Footer Contact Most Left Section*/}
      <div className="flex flex-col-reverse xl:flex-row items-start xl:items-center justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="h5 font-bold">Contact</h2>
          {footerContact.map((contact, idx) => {
            return (
              <div key={idx} className="flex gap-2">
                <Image
                  src={`/assets/icons/${contact.icon}`}
                  width={16}
                  height={16}
                  alt={"image"}
                />
                <p className="p3">{contact.text}</p>
              </div>
            );
          })}
          <h2 className="p1 font-medium">Emergency 24/7 Service</h2>
          <div className="flex gap-2">
            <Image
              src={`/assets/icons/CallRed.svg`}
              width={16}
              height={16}
              alt={"CallRed"}
            />
            <p className="p1 font-bold">+1-800-777-584</p>
          </div>
        </div>

        {/* Footer Links*/}
        {footerLinks.map((link, idx) => {
          return (
            <div className="flex flex-col gap-4" key={idx}>
              <h2 className="h5 font-bold">{link.heading}</h2>
              {link.urls.map((url, idx) => {
                return (
                  <Link href={url.href} key={idx}>
                    <p className="p3 font-medium">{url.text}</p>
                  </Link>
                );
              })}
            </div>
          );
        })}
        {/* Footer Newsletter*/}

        <div className="flex flex-col gap-4">
          <h2 className="h2 font-medium">Newsletter</h2>
          <p className="p3">
            Get the latest tips and tricks, updates, offers and discount right
            into your mailbox.
          </p>
          <input
            type="email"
            placeholder="Your Email"
            className="w-full h-[60px] bg-white border-0 outline-0 rounded-md text-black px-4"
          />
          <Button size="lg" variant={"primary"} className="w-full">
            Subscribe Now
          </Button>
        </div>
      </div>

      {/* Footer Social Links*/}
      <div className="flex gap-8 items-center">
        <Link href={"facebook.com"}>
          <Image
            src={"/assets/icons/Socialfacebook1.svg"}
            width={32}
            height={32}
            alt="Facebook"
          />
        </Link>
        <Link href={"instagram.com"}>
          <Image
            src={"/assets/icons/SocialInstagram.svg"}
            width={32}
            height={32}
            alt="Instagram"
          />
        </Link>
        <Link href={"x.com"}>
          <Image
            src={"/assets/icons/Socialtwitter.svg"}
            width={32}
            height={32}
            alt="twitter"
          />
        </Link>
        <Link href={"whatsapp.com"}>
          <Image
            src={"/assets/icons/SocialWhatsapp.svg"}
            width={32}
            height={32}
            alt="Whatsapp"
          />
        </Link>
      </div>
      <hr />
      {/* Footer Copyright*/}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-center text-primary-50 pb-5">
        <p className="p3 cursor-pointer">
          © Copyright 2025 by Housefix. Designed & Developed by Hexwaave.
          Powered by Webflow
        </p>
        <div className="flex gap-4  ">
          <p className="p3 cursor-pointer ">Privacy & Police</p>
          <p className="p3 cursor-pointer">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

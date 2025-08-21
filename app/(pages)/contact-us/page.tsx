import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col py-[60px] mainContainer bg-[url(/assets/backgrounds/contactusHero.jpg)] bg-cover h-[260px] text-white gap-8 justify-center items-center">
        <h1 className="h1 font-bold">Contact Us</h1>
        <p className="p2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Panel - Contact Info */}
            <div className="bg-slate-900 text-white p-8 md:w-1/2 lg:w-2/5">
              {/* Head Office */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold">Head Office</h3>
                </div>
                <p className="text-gray-300 ml-9">
                  3249 Henery Street, Wichita, Kansas 67204
                </p>
              </div>

              {/* Office Phone */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold">OFFICE PHONE</h3>
                </div>
                <div className="ml-9 text-gray-300">
                  <p>+ 316-831-8372</p>
                  <p>+ 316-204-6225</p>
                  <p className="mt-2 text-sm">Emergency 24/7 Hotline</p>
                  <p>+ 1 555 9345 677</p>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold">EMAIL</h3>
                </div>
                <div className="ml-9 text-gray-300">
                  <p>info@underrated.com</p>
                  <p>hello@website.com</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold">WORKING HOURS</h3>
                </div>
                <p className="text-gray-300 ml-9">
                  Mon-Fri : 9 AM-5 PM Sat : 9AM- 3 PM
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 ml-9">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <Facebook className="w-5 h-5 text-slate-900" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <Twitter className="w-5 h-5 text-slate-900" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <Instagram className="w-5 h-5 text-slate-900" />
                </div>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                  <MessageCircle className="w-5 h-5 text-slate-900" />
                </div>
              </div>
            </div>

            {/* Right Panel - Form */}
            <div className="p-8 md:w-1/2 lg:w-3/5">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Request Your Services Today
              </h2>

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Address Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="3249 Henery Street, Wichita"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+123 000 000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="w-full bg-blue-500 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

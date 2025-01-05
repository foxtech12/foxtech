import React from "react";
import logo from "../../pages/images/4.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-white text-gray-700 w-full">
      {/* Top Line */}
      <div className="w-full h-px bg-gray-300"></div>

      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-6 lg:px-24 py-12 w-full max-w-screen-xl mx-auto">
        {/* Logo Section */}

        {/* Links Section */}
        <div className="flex flex-col lg:flex-row justify-between w-full lg:w-full lg:mr-14">
          <img
            src={logo}
            alt="Logo"
            className="w-[40%] lg:w-[25%] h-auto lg:mr-14 justify-start"
          />
          {/* Links and Help sections will stay on the same line */}
          <div className="flex flex-row w-full lg:w-2/3 justify-between">
            {/* Links */}
            <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-4 lg:mb-10">
                Links
              </h4>
              <ul className="space-y-4 lg:space-y-6">
                <li className="text-xs sm:text-sm lg:text-base">Home</li>
                <li className="text-xs sm:text-sm lg:text-base">Services</li>
                <li className="text-xs sm:text-sm lg:text-base">About</li>
                <li className="text-xs sm:text-sm lg:text-base">Contact Us</li>
              </ul>
            </div>

            {/* Help */}
            <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
              <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-4 lg:mb-10">
                Help
              </h4>
              <ul className="space-y-4 lg:space-y-6">
                <li className="text-xs sm:text-sm lg:text-base">
                  Payment Options
                </li>
                <li className="text-xs sm:text-sm lg:text-base">
                  Marketing Issue
                </li>
                <li className="text-xs sm:text-sm lg:text-base">
                  Privacy Policies
                </li>
                <li>
                  {/* Social Media Icons */}
                  <div className="flex justify-center sm:justify-start space-x-6 lg:space-x-8 mt-4">
                    <FaFacebook
                      className="text-blue-600 cursor-pointer hover:scale-110 transition-transform duration-200"
                      size={26}
                    />
                    <FaLinkedin
                      className="text-blue-800 cursor-pointer hover:scale-110 transition-transform duration-200"
                      size={26}
                    />
                    <FaTwitter
                      className="text-blue-400 cursor-pointer hover:scale-110 transition-transform duration-200"
                      size={26}
                    />
                    <Link to="https://www.instagram.com/foxteach_offical/?hl=en">
                      <FaInstagram
                        className="text-pink-500 cursor-pointer hover:scale-110 transition-transform duration-200"
                        size={26}
                      />
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section will be moved below only on small screens */}
          <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-4 lg:mb-10">
              Newsletter
            </h4>
            <div className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Email"
                className="w-full sm:w-[80%] lg:w-[90%] outline-none py-2 text-xs sm:text-sm lg:text-base border-b border-black bg-transparent mb-4 sm:mb-0 sm:mr-3"
              />
              <button className="text-xs sm:text-sm lg:text-base font-semibold border-b border-black text-black">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-[90%] lg:w-[85%] h-px bg-gray-300 mx-auto"></div>

      {/* Copyright */}
      <div className="text-start ml-2 py-6 text-xs sm:text-sm lg:text-base text-gray-500">
        <p className="w-full lg:w-4/5 mx-auto">
          2023 FURINO. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

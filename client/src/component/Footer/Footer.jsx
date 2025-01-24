import React, { useState } from "react";
import logo from "../../pages/images/4.png";
import logo1 from "../../pages/images/3.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const handleSubscribe = () => {
    navigate(`/contact?name=${email}`);
  };

  return (
    <div className="bg-white text-gray-700 w-full">
      {/* Top Line */}
      <div className="w-full h-px bg-gray-300"></div>
      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-6 lg:px-24 lg:py-12 w-full max-w-screen-xl mx-auto">
        {/* Large screen: Hide this on small screens and show it on large screens */}
        <div className="block lg:hidden sm:hidden mb-6 lg:mb-0 flex justify-center items-center w-full">
          <img
            src={logo}
            alt="Logo"
            className="w-60 lg:w-40 object-cover"
            style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>

        {/* Show logo for small screens and hide on medium/large */}
        <div className="hidden sm:block md:justify-center md:items-center mb-6 lg:mb-0 flex justify-center items-center ">
          <img src={logo1} alt="Logo" className="w-40 h-auto lg:w-30" />
        </div>
        {/* Links and Newsletter Section */}
        <div className="flex flex-row  w-full lg:w-2/3 justify-start">
          {/* Links Section */}
          <div className="mb-6 sm:mb-0 w-full sm:w-1/2">
            <h2 className="text-lg sm:text-lg lg:text-lg font-semibold mb-4 lg:mb-10">
              Links
            </h2>
            <ul className="space-y-4 lg:space-y-6 ">
              <li className="text-md  lg:text-base sm:mt-5">
                <Link to="/">Home</Link>
              </li>
              <li className="text-md lg:text-base sm:mt-5">
                <Link to="/service">Services</Link>
              </li>
              <li className="text-md lg:text-base sm:mt-5">
                <Link to="/about">About</Link>
              </li>
              <li className="text-md  lg:text-base sm:mt-5">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2">
            <h4 className="text-lg sm:text-lg lg:text-lg font-semibold mb-4">
              Newsletter
            </h4>
            <form className="space-y-4">
              {/* Name Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm sm:text-sm lg:text-base font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-green-500 text-xs sm:text-md lg:text-base p-1"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm sm:text-sm lg:text-base font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border-b border-gray-400 focus:outline-none focus:ring-0 focus:border-green-500 text-xs sm:text-sm lg:text-base p-1"
                  required
                />
              </div>

              {/* Subscribe Button */}
            </form>

            <div className="flex items-center mt-3">
              <button
                type="submit"
                onClick={handleSubscribe}
                className="text-sm sm:text-sm lg:text-base font-semibold border-b border-gray-700 text-gray-700 hover:text-black"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-center space-x-6 lg:space-x-8 mb-4">
        <FaFacebook
          className="text-blue-600 cursor-pointer hover:scale-110 transition-transform duration-200 text-lg md:text-xl lg:text-3xl"
          size={30}
        />
        <FaLinkedin
          className="text-blue-800 cursor-pointer hover:scale-110 transition-transform duration-200 text-lg md:text-xl lg:text-3xl"
          size={30}
        />
        <FaTwitter
          className="text-blue-400 cursor-pointer hover:scale-110 transition-transform duration-200 text-lg md:text-xl lg:text-3xl"
          size={30}
        />
        <Link to="https://www.instagram.com/foxteach_offical/?hl=en">
          <FaInstagram
            className="text-pink-500 cursor-pointer hover:scale-110 transition-transform duration-200 text-lg md:text-xl lg:text-3xl"
            size={30}
          />
        </Link>
      </div>

      {/* Bottom Line */}
      <div className="w-[90%] lg:w-[85%] h-px bg-gray-300 mx-auto"></div>
      {/* Copyright */}
      <div className="text-center ml-2 py-6 text-xs sm:text-sm lg:text-base text-gray-500">
        <p className="w-full lg:w-4/5 mx-auto">
          © 2023 Foxteach. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

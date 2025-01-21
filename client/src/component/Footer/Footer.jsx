import React, { useState } from "react";
import logo from "../../pages/images/4.png";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();

  const [email,setEmail] = useState("")
  const handleSubscribe = () => {
    navigate(`/contact?name=${email}`);
  };

  return (
    <div className="bg-white text-gray-700 w-full">
      {/* Top Line */}
      <div className="w-full h-px bg-gray-300"></div>
      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-6 lg:px-24 py-12 w-full max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="mb-6 lg:mb-0 flex lg:justify-start sm:justify-center items-center w-full">
          <img src={logo} alt="Logo" className="w-40 h-auto lg:w-30" />
        </div>
        {/* Links and Newsletter Section */}
        <div className="flex flex-row  w-full lg:w-2/3 justify-start">
          {/* Links Section */}
          <div className="mb-6 sm:mb-0 w-full sm:w-1/2">
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-4 lg:mb-10">
              Links
            </h4>
            <ul className="space-y-4 lg:space-y-6">
              <li className="text-xs sm:text-sm lg:text-base">
                <Link to="/">Home</Link>
              </li>
              <li className="text-xs sm:text-sm lg:text-base">
                <Link to="/service">Services</Link>
              </li>
              <li className="text-xs sm:text-sm lg:text-base">
                <Link to="/about">About</Link>
              </li>
              <li className="text-xs sm:text-sm lg:text-base">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2">
            <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-4">
              Newsletter
            </h4>
            <form  className="space-y-4">
              {/* Name Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="border rounded-md p-2 text-xs sm:text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm lg:text-base font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="border rounded-md p-2 text-xs sm:text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              {/* Subscribe Button */}
             
            </form>
            <div className="flex items-center mt-3">
                <button
                  type="submit"
                  onClick={handleSubscribe}
                  className="text-xs sm:text-sm lg:text-base font-semibold border-b border-gray-700 text-gray-700 hover:text-black"
                >
                  SUBSCRIBE
                </button>
              </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:justify-center space-x-6 lg:space-x-8 mb-4 ">
        <FaFacebook
          className="text-blue-600 cursor-pointer hover:scale-110 transition-transform duration-200"
          size={22}
        />
        <FaLinkedin
          className="text-blue-800 cursor-pointer hover:scale-110 transition-transform duration-200"
          size={22}
        />
        <FaTwitter
          className="text-blue-400 cursor-pointer hover:scale-110 transition-transform duration-200"
          size={22}
        />
        <Link to="https://www.instagram.com/foxteach_offical/?hl=en">
          <FaInstagram
            className="text-pink-500 cursor-pointer hover:scale-110 transition-transform duration-200"
            size={22}
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

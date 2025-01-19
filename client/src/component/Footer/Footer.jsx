import React, { useState } from "react";
import logo from "../../pages/images/4.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleInput = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
      navigate(`/about?name=${email} - Footer`);
  };

  return (
    <div className="bg-white text-gray-700 w-full">
      {/* Top Line */}
      <div className="w-full h-px bg-gray-300"></div>

     {/* Footer Content */}
     <div className="flex flex-col lg:flex-row justify-between items-start px-6 lg:px-24 py-12 w-full max-w-screen-xl mx-auto">
      {/* Logo Section */}
          <div className="mb-6 lg:mb-0 flex justify-center items-center w-full">
            <img src={logo} alt="Logo" className="w-40 h-auto lg:w-30" />
          </div>

        {/* Links Section */}
        <div className="flex flex-row w-full lg:w-2/3 justify-around">
          <div className="mb-6 lg:mb-0 w-full lg:w-1/2">
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
        </div>

        <div className="w-full lg:w-1/3">
          <h4 className="text-sm sm:text-base lg:text-lg font-semibold mb-4">
            Newsletter
          </h4>
          <div className="flex flex-col sm:flex-row items-center">
            <button
              onClick={handleSubscribe}
              className="text-xs sm:text-sm lg:text-base font-semibold border-b border-gray-700 text-gray-700 hover:text-black"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="w-[90%] lg:w-[85%] h-px bg-gray-300 mx-auto"></div>

      {/* Copyright */}
      <div className="text-start ml-2 py-6 text-xs sm:text-sm lg:text-base text-gray-500">
        <p className="w-full lg:w-4/5 mx-auto">
          © 2023 FURINO. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

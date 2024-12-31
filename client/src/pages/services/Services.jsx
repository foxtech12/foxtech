import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import "swiper/css";
import "swiper/css/navigation";
import case1 from "./images/image1.png";
import report from "./images/image.png";
import first from "../images/1st.png";
import sec from "../images/2nd.png";
import third from "../images/3rd.png";
import four from "../images/4th.png";
import fiv from "../images/5th.png";
import six from "../images/6th.png";
import eventBg from "../images/eventbg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./service.css";
import CardSwiper from "../../component/cardSwiper/CardSwiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import ContactFoot from "../../component/ContactFooter/ContactFoot";
import "swiper/css";
import "swiper/css/navigation";
gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(
      card,
      {
        x: "-100%", // Start the card off-screen to the left
        opacity: 0,
      },
      {
        x: "0%", // Animate it to its original position
        opacity: 1,
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing for the animation
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Start the animation when the top of the card reaches 80% of the viewport
          end: "bottom 20%", // End the animation when the bottom of the card reaches 20% of the viewport
          toggleActions: "play none none none", // Only play the animation once
        },
      }
    );
  }, []);

  const cardReference = useRef(null); // Changed reference name here

  useEffect(() => {
    const card = cardReference.current;

    gsap.fromTo(
      card,
      {
        x: "100%", // Start the card off-screen to the right
        opacity: 0, // Start with the card hidden
      },
      {
        x: "0%", // Animate it to its original position
        opacity: 1, // Fade it in
        duration: 1.5, // Duration of the animation
        ease: "power3.out", // Smooth easing for the animation
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Start the animation when the top of the card reaches 80% of the viewport
          end: "bottom 20%", // End the animation when the bottom of the card reaches 20% of the viewport
          toggleActions: "play none none none", // Only play the animation once
        },
      }
    );
  }, []);

  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Animation for the header (fade in from the left)
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%", // Start animation when the header reaches 80% of the viewport
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for the content (fade in and slide up)
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out",
      once: true,
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="w-full bg-white">
        <div
          className="relative bg-cover bg-center w-full h-72 flex items-center justify-center animate-slide-down"
          style={{ backgroundImage: `url(${eventBg})` }}
        >
          <div className="text-center text-black">
            <h1 className="text-4xl font-bold tracking-wide">Services</h1>
            <p className="text-sm text-gray-600 mt-2">Home &gt; Services</p>
          </div>
        </div>
        <div className="w-full h-20 bg-[#f0fff0] flex items-center justify-center animate-slide-down"></div>

        {/* Highlight Section */}
        <div className="flex justify-center items-center mt-10">
          <div
            className="p-6 bg-[#E7FFE7] rounded mx-4 md:mx-6 lg:mx-8 flex flex-col items-center justify-center text-center slide-left-animation"
            style={{
              boxShadow: "0px 8px 6px 2px rgba(169, 169, 169, 0.3)", // Gray color bottom shadow
              maxWidth: "900px", // Set a maximum width
            }}
          >
            <p className="text-lg md:text-2xl lg:text-3xl  leading-tight text-left">
              <span className="text-black lg:text-5xl text-left">
                "Elevate Your Brand with Expert Social Media Solutions"
              </span>
            </p>
            <p className="text-black mt-2 text-sm md:text-lg lg:text-2xl">
              Innovative Strategies Tailored to Your Business Needs
            </p>
          </div>
        </div>
      </div>

      <div id="services" className="py-20 bg-white">
        {/* Section title */}

        {/* Service cards with hover effect */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8 sm:px-24"
          data-aos="fade-up"
        >
          {/* Service Card 1 */}
          <div
            className="flex flex-col items-center p-8 transform transition-all duration-300 hover:scale-105 hover:z-10 hover:translate-y-[-10px]"
            onClick={() => navigate("/content")}
          >
            <div className="w-40 h-40 mb-4 transform transition-all duration-300 hover:scale-110">
              <img
                src={first}
                alt="Service Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Service Card 2 */}
          {/* Service Card 2 */}
          <div
            className="flex flex-col items-center p-8 transform transition-all duration-300 hover:scale-105 hover:z-10 hover:translate-y-[-10px]"
            onClick={() => navigate("/social")}
          >
            <div className="w-40 h-40 mb-4 transform transition-all duration-300 hover:scale-110 overflow-hidden">
              <img
                src={sec}
                alt="Service Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Service Card 3 */}
          <div
            className="flex flex-col items-center p-8 transform transition-all duration-300 hover:scale-105 hover:z-10 hover:translate-y-[-10px]"
            onClick={() => navigate("/web")}
          >
            <div className="w-40 h-40 mb-4 transform transition-all duration-300 hover:scale-110">
              <img
                src={third}
                alt="Service Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Service Card 4 */}
          <div
            className="flex flex-col items-center p-8 transform transition-all duration-300 hover:scale-105 hover:z-10 hover:translate-y-[-10px]"
            onClick={() => navigate("/application")}
          >
            <div className="w-40 h-40 mb-4 transform transition-all duration-300 hover:scale-110">
              <img
                src={four}
                alt="Service Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Service Card 5 */}
          <div
            className="flex flex-col items-center p-8 transform transition-all duration-300 hover:scale-105 hover:z-10 hover:translate-y-[-10px]"
            onClick={() => navigate("/seo")}
          >
            <div className="w-40 h-40 mb-4 transform transition-all duration-300 hover:scale-110">
              <img
                src={fiv}
                alt="Service Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Service Card 6 */}
          <div
            className="flex flex-col items-center p-8 transform transition-all duration-300 hover:scale-105 hover:z-10 hover:translate-y-[-10px]"
            onClick={() => navigate("/personal")}
          >
            <div className="w-40 h-40 mb-4 transform transition-all duration-300 hover:scale-110">
              <img
                src={six}
                alt="Service Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        {/* Header Section */}
        <div className="inline-block bg-[#46FF46] text-white px-6 py-2 rounded-tr-3xl rounded-bl-3xl shadow-md mx-auto">
          <p className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide text-black">
            Analytics And Reporting
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {/* Cards container */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:mx-10 mx-auto justify-center items-center hidden sm:block">
          <div className="flex justify-between">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6 lg:mx-10 mx-auto justify-center items-center md:flex-col">
              {/* Card 1 */}
              <div
                ref={cardRef}
                className="border lg:ml-14 rounded-md shadow-lg overflow-hidden w-full sm:w-[300px] md:w-[350px] lg:w-[400px] justify-center items-center"
              >
                <img
                  src={report}
                  alt="Analytics"
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-contain" // Decreased height for the image
                />
                <div className="p-4 bg-green-50">
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                    ANALYTICS
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">
                    Analytics Description
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div
                ref={cardReference} // Updated reference name here
                className="border lg:ml-14 rounded-md shadow-lg overflow-hidden w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
              >
                <img
                  src={report}
                  alt="Analytics"
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-contain" // Decreased height for the image
                />
                <div className="p-4 bg-green-50">
                  <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                    ANALYTICS
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">
                    Analytics Description
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontally scrollable for small screens */}
        <div className="flex  block sm:hidden overflow-x-auto w-full mt-8">
          <div className="flex space-x-6">
            {/* Card 1 for horizontal scroll */}
            <div className="border rounded-md shadow-lg overflow-hidden w-[300px]">
              <img
                src={report}
                alt="Analytics"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-contain"
              />
              <div className="p-4 bg-green-50">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                  ANALYTICS
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">
                  Analytics Description
                </p>
              </div>
            </div>

            {/* Card 2 for horizontal scroll */}
            <div className="border rounded-md shadow-lg overflow-hidden w-[300px]">
              <img
                src={report}
                alt="Analytics"
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-contain"
              />
              <div className="p-4 bg-green-50">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                  ANALYTICS
                </h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">
                  Analytics Description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white w-full mb-4">
        {/* Analytics and Reporting Section */}

        {/* Case Studies Section */}
        <div className="text-center mt-8">
          <p className="text-sm md:text-lg lg:text-2xl font-bold text-black bg-[#46FF46] inline-block px-6 py-2 rounded-tr-3xl rounded-bl-3xl shadow-md ">
            CASE STUDIES
          </p>
        </div>

        <CardSwiper />

        <div className="my-16">
          {/* How We Provide Services Header */}
          <div className="text-center mt-8">
            <h2
              ref={headerRef}
              className="text-sm md:text-lg lg:text-2xl font-bold bg-[#46FF46] px-6 py-2 rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none inline-block text-black"
            >
              HOW WE PROVIDE SERVICES
            </h2>
          </div>
        </div>
        {/* Content Section */}
        <div
          ref={contentRef}
          className="p-6 bg-[#E7FFE7] rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none mx-4 md:mx-8 lg:mx-16 mt-5"
        >
          <p className="text-black text-lg md:text-md leading-relaxed">
            At our social marketing company, we provide comprehensive services
            designed to elevate your brand's online presence and drive
            measurable results. Our process begins with an initial consultation
            to understand your business goals and key performance indicators
            (KPIs). We then craft a tailored social media strategy, leveraging
            market research, audience analysis, and competitor insights. Our
            team of experts creates high-quality content, manages your social
            media accounts, and runs targeted paid advertising campaigns.
            Throughout this process, we collect and analyze performance data,
            providing regular, custom reports that highlight key metrics and
            actionable insights. Our commitment to continuous monitoring and
            strategic adjustments ensures that your social media efforts are
            optimized for maximum engagement, growth, and return on investment.
          </p>
        </div>
      </div>

      <ContactFoot />
      <Footer />
    </div>
  );
};

export default Services;

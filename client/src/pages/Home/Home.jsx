import React, { useEffect } from "react";
import "./Home.css";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-cards";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import StickyStackedCards from "../Test";
import first from "../images/1st.png";
import sec from "../images/2nd.png";
import third from "../images/3rd.png";
import four from "../images/4th.png";
import fiv from "../images/5th.png";
import six from "../images/6th.png";
import right from "../images/3.png";
import bg from "../images/bg.png";
import { useNavigate } from "react-router-dom";
import Testimonial from "../../component/testimonial/Testimonial";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const navbar = document.querySelector(".navbar");
            const background = document.querySelector(".background-overlay");
            const rightImage = document.querySelector(".right-image");
            const leftContent = document.querySelector(".left-content");

            // Animating navbar immediately
            setTimeout(() => {
              navbar.classList.add("animate-navbar");
            }, 0);

            // Background overlay animation with slight delay
            setTimeout(() => {
              background.classList.add("animate-background");
            }, 500);

            // Right image animation (faster)
            setTimeout(() => {
              rightImage.classList.add("animate-right-image");
            }, 0);

            // Left content animation (slower)
            setTimeout(() => {
              leftContent.classList.add("animate-left-content");
            }, 0); // Delayed to start after the right image

            // Stop observing after animations are triggered
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    // Select the section to observe
    const section = document.querySelector(".animated-section");
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      mirror: true,
    });

    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timeout);
  }, [location]);

  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full bg-white ">
        {/* Top Navbar */}

        <Navbar />

        {/* Hero Section */}
        <div className="relative flex items-center h-screen bg-white">
          {/* Background Overlay */}
          <div
            className="background-overlay absolute top-0 right-[15%] w-[80%] h-[90%] bg-cover bg-center opacity-0"
            style={{
              backgroundImage: `url(${bg})`,
              animationName: "background-grow-up",
              animationDuration: "0.8s",
              animationTimingFunction: "ease-out",
              animationFillMode: "forwards",
            }}
          ></div>

          {/* Left Side Content */}
          <div className="left-content relative flex flex-col px-8 sm:px-24 max-w-3xl bg-opacity-40 opacity-0">
            <div className="relative z-10 opacity-100 mb-10">
              <h1 className="text-5xl font-bold text-black leading-tight font-poppins">
                We Are Experts In Carving
              </h1>
            </div>

            <div className="relative z-10 mb-10">
              <button
                className="px-6 py-3 bg-[#12fc2d] text-black font-bankGothic rounded-full hover:bg-green-600 font-poppins"
                onClick={() => navigate(`/contact?name=home`)}
              >
                Get Started
              </button>
            </div>

            <div className="relative z-10">
              <p
                className="text-lg text-black font-bankGothic text-justify"
                data-aos="zoom-out" // "zoom-in" effect for gradual scaling
              >
                Our mission is to unravel the intricacies of our genetic code,
                providing you with the most detailed marketing insights.
              </p>
            </div>
          </div>

          <div className="left-content absolute right-0 top-0 w-[45%] h-[85%] flex items-center justify-end rounded-bl-[222px] overflow-hidden opacity-0 hidden lg:flex">
            <div className="w-full h-full relative">
              <img
                src={right}
                alt="Experts Illustration"
                className="w-auto h-auto object-contain mt-10 rounded-full animate-top-down" // Apply the custom animation class here
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div id="services" className="py-20 bg-white">
          {/* Section title */}
          <div className="flex justify-center">
            <div className="text-center bg-[#46FF46] mb-5 py-5 px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl">
              <p className="text-3xl font-medium  text-black font-montserrat">
                Our Services
              </p>
            </div>
          </div>

          {/* Service cards with hover effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8 sm:px-24">
            {/* Service Card 1 */}
            <div
              className="flex flex-col items-center p-8 transform transition-all duration-300 hover:scale-105 hover:z-10 hover:translate-y-[-10px]"
              data-aos="grow-right-bottom-left-top"
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
            <div
              className="flex flex-col items-center p-8 transform transition-all duration-300 hover:scale-105 hover:z-10 hover:translate-y-[-10px]"
              data-aos="grow-bottom-top"
              onClick={() => navigate("/social")}
            >
              <div className="w-40 h-40 mb-4 transform transition-all duration-300 hover:scale-110">
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
              data-aos="grow-left-bottom-right-top"
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
              data-aos="grow-right-bottom-left-top"
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
              data-aos="grow-bottom-top"
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
              data-aos="grow-left-bottom-right-top"
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

        {/* Events Section */}
        <div className="flex justify-center flex-col items-center overflow-x-hidden">
          {/* Header Section */}
          <div className="text-center bg-[#46FF46] mb-5 py-5 px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl">
            <h2 className="text-3xl font-medium text-black font-montserrat">
              Events
            </h2>
          </div>

          <StickyStackedCards />

          <div className="flex justify-center flex-col items-center">
            {/* Header Section */}
            <div className="text-center bg-[#46FF46] mb-5 py-5 px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl">
              <h2 className="text-2xl font-bold text-black font-montserrat">
                WHAT WE DO
              </h2>
            </div>
          </div>

          <div className="flex justify-center flex-col px-5 sm:px-[10%] items-center">
            <div className="text-center bg-[#E7FFE7] mb-5 py-5 px-5 sm:px-10 inline-block rounded-bl-3xl rounded-tr-3xl mx-auto mt-5 h-auto">
              <p className="text-lg sm:text-2xl text-black font-montserrat text-justify tracking-normal leading-normal whitespace-normal m-0 p-0">
                At Foxtech, we specialize in delivering comprehensive social
                marketing solutions tailored to elevate your brand's online
                presence and drive measurable results. Our services encompass
                every aspect of social media management, from crafting impactful
                strategies to executing engaging content and providing
                insightful analytics.
              </p>
            </div>
          </div>

          {/* About us */}
          <div className="flex justify-center flex-col items-center">
            {/* Header Section */}
            <div className="text-center bg-[#46FF46] mb-5 py-5 px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl  mt-10">
              <h2 className="text-2xl font-bold text-black font-montserrat">
                ABOUT US
              </h2>
            </div>
          </div>
          <div className="flex justify-center flex-col px-5 sm:px-[10%] items-center">
            <div className="text-center bg-[#E7FFE7] mb-5 py-5 px-5 sm:px-10 inline-block rounded-bl-3xl rounded-tr-3xl mx-auto mt-5 h-auto">
              <p className="text-lg sm:text-2xl text-black font-montserrat text-justify tracking-normal leading-normal">
                At Foxtech, we are passionate about helping brands navigate the
                ever-evolving landscape of social media marketing. Our mission
                is to empower businesses to connect with their audience in
                meaningful ways, driving engagement, growth, and success. With a
                team of experienced social media strategists, content creators,
                and data analysts, we offer a comprehensive suite of services
                tailored to meet your unique needs and objectives.
              </p>
            </div>
          </div>

          {/* WHY FOXTECH */}
          <div className="flex justify-center flex-col items-center">
            {/* Header Section */}
            <div className="text-center bg-[#46FF46] mb-5 py-5 px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl  mt-10">
              <h2 className="text-2xl font-bold text-black font-montserrat">
                WHY FOXTECH
              </h2>
            </div>
          </div>
          <div className="flex justify-center flex-col px-5 sm:px-[10%] items-center">
            <div className="text-center bg-[#E7FFE7] mb-5 py-5 px-5 sm:px-10 inline-block rounded-bl-3xl rounded-tr-3xl mx-auto mt-5 h-auto">
              <p className="text-lg sm:text-2xl text-black font-montserrat text-justify tracking-normal leading-normal">
                Choosing our social marketing company means partnering with a
                team of experienced professionals dedicated to your brand's
                success. Our expertise in social media strategy, content
                creation, and data-driven analytics ensures that every campaign
                is optimized for maximum impact. We use cutting-edge tools and
                technology to provide accurate and comprehensive insights,
                enabling you to make informed decisions. Our commitment to
                customization means that our services are tailored to meet your
                specific business goals and needs, ensuring personalized and
                effective solutions.
              </p>
            </div>
          </div>
        </div>
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default Home;

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
  const cards = [
    {
      name: "Content Creation",
      role: "Exceptional Content Creation Captivate, Engage, and Convert Elevate your brand’s voice with our innovative content creation services.",
      gradientFrom: "from-sky-200",
      gradientVia: "via-orange-200",
      gradientTo: "to-orange-700",
      nameNavi: "content",
      image: first,
    },
    {
      name: "Social Media Marketing",
      role: "Harness the power of social media to connect with your audience and drive real results.",
      gradientFrom: "from-sky-200",
      gradientVia: "via-orange-200",
      gradientTo: "to-orange-700",
      nameNavi: "social",
      image: sec,
    },
    {
      name: "Web Development Service",
      role: "At Foxtech, we specialize in creating stunning, functional, and user-friendly websites that drive engagement and conversions. ",
      gradientFrom: "from-sky-200",
      gradientVia: "via-orange-200",
      gradientTo: "to-orange-700",
      nameNavi: "web",
      image: third,
    },
    {
      name: "Application development Services",
      role: "At Foxtech, we specialize in developing custom applications that deliver exceptional user experiences and drive business success.",
      gradientFrom: "from-sky-200",
      gradientVia: "via-orange-200",
      gradientTo: "to-orange-700",
      nameNavi: "application",
      image: four,
    },
    {
      name: "SEO Handling services",
      role: "At foxtech, we specialize in SEO strategies that enhance your websites visibility, drive organic traffic, and improve search engine rankings.",
      gradientFrom: "from-sky-200",
      gradientVia: "via-orange-200",
      gradientTo: "to-orange-700",
      nameNavi: "seo",
      image: fiv,
    },
    {
      name: "Personal Branding Service",
      role: "At Foxteach, we help individuals create powerful personal brands that stand out in a crowded market.",
      gradientFrom: "from-sky-200",
      gradientVia: "via-orange-200",
      gradientTo: "to-orange-700",
      nameNavi: "personal",
      image: six,
    },
    // Add more cards as needed
  ];

  const Card = ({
    name,
    role,
    gradientFrom,
    gradientVia,
    gradientTo,
    nameNavi,
    image,
  }) => {
    return (
      <div className="group relative bg-slate-50 w-80 min-h-[20rem] rounded-2xl overflow-hidden flex flex-col items-center text-center">
        {/* Background Overlay */}
        <div
          className={`absolute inset-0  group-hover:scale-95 transition-all duration-500 rounded-2xl`}
          style={{
            background: "linear-gradient(to right, #46FF46,rgb(220, 234, 220))",
          }}
        ></div>

        {/* Profile Image */}
      <div className="w-28 h-28 bg-white rounded-full border-4 border-gray-200 z-10 mt-6 group-hover:scale-200 group-hover:-translate-x-24 group-hover:-translate-y-20 transition-all duration-500 flex items-center justify-center overflow-hidden">
  <img
    src={image}
    alt=""
    className="w-full h-full object-cover p-4 slide-animation"
  />
</div>


        {/* Content */}
        <div className="z-10 mt-4 px-4">
          <span className="text-2xl font-semibold block mb-2">{name}</span>
          <p className="text-sm sm:text-base text-gray-800">{role}</p>
        </div>

        {/* Follow Button */}
        <div className="mt-auto mb-4 z-10">
          <button
            onClick={() => navigate(`/${nameNavi}`)}
            className="bg-green-100 px-4 py-2 text-black rounded-md hover:scale-105 transition-all duration-500 hover:bg-green-700"
          >
            view more
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative w-full bg-white ">
        {/* Top Navbar */}

        <Navbar />

        {/* Hero Section */}
        <div className="relative flex items-center h-screen bg-white">
          {/* Background Overlay */}
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
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
          {/* Section Title */}
          <div className="flex justify-center">
            <div className="text-center bg-[#46FF46] mb-5 py-5 px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl">
              <p className="text-lg sm:text-xl font-semibold text-black">
                Our Services
              </p>
            </div>
          </div>

          {/* Cards Container */}
          <div
            className="container mx-auto px-8 py-8 flex justify-center items-center"
            data-aos="fade-up"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
              {cards.map((card, index) => (
                <Card
                  key={index}
                  name={card.name}
                  role={card.role}
                  gradientFrom={card.gradientFrom}
                  gradientVia={card.gradientVia}
                  gradientTo={card.gradientTo}
                  nameNavi={card.nameNavi}
                  image={card.image}
                />
              ))}
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

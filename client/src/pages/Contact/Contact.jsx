import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import eventBg from "../images/eventbg.png";
import { useEffect, useState } from "react";
import ContactForm from "../../component/contactPageFor/contactPageForm";
import "./contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMessage } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Contact = () => {
  const [queryData, setQueryData] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const name = searchParams.get("name");
    setQueryData(name);
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [scrollDirection, setScrollDirection] = useState(0); // 0 for up, 1 for down
  const [width, setWidth] = useState("100%"); // Initial width 100%

  // Function to handle scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 300; // Change width after scrolling 300px

    // Detect scroll direction and apply changes
    if (currentScrollY > scrollDirection) {
      if (currentScrollY > scrollThreshold) {
        setWidth("100%"); // Increase width after scrolling past threshold
      }
    } else if (currentScrollY < scrollDirection) {
      setWidth("80%"); // Reset to original width when scrolling up
    }

    // Update scroll position
    setScrollDirection(currentScrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  const [faqs, setFaqs] = useState([]);
  const fetchFaqs = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/faq`
      );
      setFaqs(response.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error.message);
    }
  };

  useEffect(() => {
    fetchFaqs();
  }, []);

  return (
    <>
      <Navbar />
      <div
        className="relative bg-cover bg-center w-full h-72 flex items-center justify-center animate-slide-down"
        style={{ backgroundImage: `url(${eventBg})` }}
      >
        <div className="text-center text-black">
          <h1 className="text-4xl font-bold tracking-wide">Contact Us</h1>
          <p className="text-sm text-gray-600 mt-2">Home &gt; Contact Us</p>
        </div>
      </div>
      <div className="w-full h-20 bg-[#f0fff0] flex items-center justify-center animate-slide-down"></div>
      <div className="p-6 bg-[#E7FFE7] rounded mx-auto mt-5 flex flex-col items-center justify-center text-center w-full sm:w-4/5 md:w-3/4 lg:w-1/2 animate-slide-right">
        <p className="text-lg md:text-2xl lg:text-3xl font-semibold leading-tight">
          <span className="text-green-800 lg:text-5xl">
            Get in touch with us
          </span>
        </p>
      </div>

      <ContactForm val={queryData} />

      <div className="bg-white px-4 py-8 lg:py-12 overflow-x-hidden ">
        {/* Contact Section */}
        <div className="text-center mb-10">
          <h2
            className="text-xl lg:text-2xl font-bold text-gray-800 mb-8 uppercase"
            data-aos="fade-up"
          >
            Or Contact Directly With Us :
          </h2>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-start gap-8 text-gray-700">
              {/* Phone */}
              <div
                className="flex flex-col items-start gap-2"
                data-aos="fade-up"
              >
                <div className="flex items-center gap-5">
                  <FontAwesomeIcon icon={faPhone} />
                  <p className="font-semibold">Phone:</p>
                </div>
                <p className="ml-7">(123) 456-789</p>
              </div>

              {/* Email */}
              <div
                className="flex flex-col items-start gap-2"
                data-aos="fade-up"
              >
                <div className="flex items-center gap-5">
                  <FaEnvelope className="text-xl mt-1 text-black" />
                  <p className="font-semibold">Email:</p>
                </div>
                <p className="ml-7">contact@yourcompany.com</p>
              </div>

              {/* Address */}
              <div
                className="flex flex-col items-start gap-2"
                data-aos="fade-up"
              >
                <div className="flex items-center gap-5">
                  <FaMapMarkerAlt className="text-xl mt-1 text-black" />
                  <p className="font-semibold">Address:</p>
                </div>
                <p className="ml-7">1234 Marketing St., City, State, Zip</p>
              </div>

              {/* Business Hours */}
              <div
                className="flex flex-col items-start gap-2"
                data-aos="fade-up"
              >
                <div className="flex items-start gap-5">
                  <FaMapMarkerAlt className="text-xl mt-1 text-black" />
                  <p className="font-semibold">Business Hours:</p>
                </div>
                <p className="ml-7">Monday - Friday: 9:00AM - 5:00PM</p>
                <p className="ml-7">Saturday: 10:00AM - 4:00PM</p>
                <p className="ml-7">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media */}

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-lg lg:text-xl text-white px-4 py-2 inline-block rounded-md mb-4">
            <div className="text-center mt-8">
              {/* Header Section */}
              <div className="inline-block bg-[#46FF46] text-white px-6 py-2 rounded-tr-3xl rounded-bl-3xl shadow-md mx-auto">
                <p className="text-lg md:text-xl lg:text-2xl font-medium uppercase tracking-wide text-black">
                  FAQ’s
                </p>
              </div>
            </div>
          </div>
          {/* FAQ 1 */}
          <div className="space-y-4">
            {faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                  <details className="group border rounded-md p-4 bg-[#E7FFE7]">
                    <summary className="font-medium cursor-pointer flex justify-between items-center">
                      {faq.headline} {/* Display the FAQ headline */}
                      <span className="text-lg transition-transform">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 transform group-open:rotate-180 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-2 text-gray-600">{faq.description}</p>{" "}
                    {/* Display the FAQ description */}
                  </details>
                </div>
              ))
            ) : (
              <div>No Data Found</div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

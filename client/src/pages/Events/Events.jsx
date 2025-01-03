import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../component/Navbar/Navbar";
import eventBg from "../images/eventbg.png";
import Footer from "../../component/Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EventBanner from "./Eventbanner";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const Events = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cards, setCards] = useState([]);

  const fetchSuggestions = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/event/get-event`
      );
      const lastThreeCards = response.data.slice(-3).map((card) => ({
        ...card,
        formattedDate: new Date(card.date).toLocaleString(), // Format the date field
      }));
      setCards(lastThreeCards);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      mirror: true,
    });
  }, []);

  const createImageUrl = (fileData, contentType) => {
    try {
      const blob = new Blob([new Uint8Array(fileData)], { type: contentType });
      const url = URL.createObjectURL(blob);
      return url;
    } catch (error) {
      console.error("Error decoding image:", error);
      return "";
    }
  };

  const upcomingEventsRef = useRef(null);

  const [cards1, setCards1] = useState([]);

  const fetchSuggestions1 = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/event/get-event`
      );
      const lastThreeCards = response.data.map((card) => ({
        ...card,
        formattedDate: new Date(card.date).toLocaleString(),
      }));
      setCards1(lastThreeCards);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    fetchSuggestions1();
  }, []);
  // Scroll to the Upcoming Events section
  const scrollToUpcomingEvents = () => {
    upcomingEventsRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards1.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [cards1.length]);

  // Get the next three events to display
  const getDisplayedEvents = () => {
    if (cards1.length === 0) return []; // Handle empty data scenario
    return [
      cards1[activeIndex % cards1.length],
      cards1[(activeIndex + 1) % cards1.length],
      cards1[(activeIndex + 2) % cards1.length],
    ];
  };

  const Arrow1 = ({ direction }) => (
    <div className="flex justify-center items-center w-12 h-12 bg-[#E7FFE7] rounded-lg cursor-pointer">
      {direction === "left" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="black"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="black"
          className="w-10 h-10"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </div>
  );

  const displayedEvents = getDisplayedEvents();

  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Navbar />

      {/* Page Header */}
      <div
        className="relative bg-cover bg-center w-full h-72 flex items-center justify-center animate-slide-right"
        style={{ backgroundImage: `url(${eventBg})` }}
      >
        <div className="text-center text-black">
          <h1 className="text-4xl font-bold tracking-wide">Events</h1>
          <p className="text-sm text-gray-600 mt-2">Home &gt; Events</p>
        </div>
      </div>

      <div className="w-full h-20 bg-[#f0fff0] flex items-center justify-center animate-slide-right"></div>

      {/* Event Cards Section */}
      <div className="hidden lg:flex justify-center items-start mt-12 gap-[30%] animate-slide-up">
  {cards1.length > 0 &&
    displayedEvents.map((event, index) => (
      <div
        key={event._id}
        className={`group relative flex flex-col items-center cursor-pointer ${
          index === 1 ? "scale-110" : ""
        }`}
      >
        {/* Image container (Front card) */}
        <div
          className={`h-[300px] w-[250px] bg-cover bg-center rounded-lg shadow-lg relative transition-transform duration-700 ease-in-out z-10 ${
            index === 1
              ? "group-hover:translate-y-[-150px] group-hover:rotate-[20deg] group-hover:-translate-y-16" 
              : "group-hover:translate-y-[-150px] group-hover:rotate-[20deg] group-hover:-translate-y-16"
          }`}
          style={{
            backgroundImage: `url(${createImageUrl(
              event.image.data.data,
              event.image.contentType
            )})`,
          }}
        >
          {/* Event Name and Time on the Front */}
          <div className="absolute top-4 left-4 text-white">
            <p className="font-semibold text-xl">{event.name}</p>
            <p className="text-sm">{event.formattedDate}</p>
          </div>
        </div>

        {/* Card content (Back card) */}
        <div
          className={`absolute inset-0 flex flex-col justify-end text-center shadow-lg rounded-lg mt-4 p-4 h-[345px] w-[250px] opacity-0 transition-opacity duration-500 ${
            index === 1
              ? "opacity-100" // Always visible for the middle card
              : "group-hover:opacity-100"
          }`}
          style={{ backgroundColor: "#c4c0c0" }}
        >
          <p className="text-black font-semibold text-[10px] mb-[25%]">
            {event.name}
          </p>
          <button
            className="absolute bottom-2 left-2 px-3 py-2 bg-[#00FF00] text-black rounded-full hover:bg-green-600 transition duration-300"
            onClick={() => navigate(`/contact?name=${event.name}`)}
          >
            Register Now
          </button>
        </div>
      </div>
    ))}
</div>


      <div className="w-full flex items-center justify-center my-6 mt-[10%]">
        <hr className="hidden lg:block w-full ml-8 mr-8 mx-auto border-t border-gray-400" />
      </div>

      <div className="hidden lg:flex flex-row gap-4 mb-8 items-center justify-center text-center lg:text-left">
        <button
          className="px-4 py-2 bg-white text-black font-semibold rounded-full border border-black hover:bg-gray-200 transition duration-300 w-full lg:w-auto"
          onClick={scrollToUpcomingEvents}
        >
          Upcoming Events
        </button>

        <p className="inline mx-4 lg:mx-6">OR</p>

        <button
          className="px-4 py-2 bg-white text-black font-semibold rounded-full border border-black hover:bg-gray-200 transition duration-300 w-full lg:w-auto"
          onClick={() => navigate(`/contact?name=eventPageManual`)}
        >
          Join Us
        </button>

        <p className="text-center lg:text-left">AND DISCOVER MORE</p>
      </div>

      <div className="flex justify-center flex-col px-5 sm:px-[10%] items-center">
        <div className="text-center bg-[#E7FFE7] mb-5 py-5 px-5 sm:px-10 inline-block rounded-bl-3xl rounded-tr-3xl mx-auto mt-5 h-auto">
          <p className="text-lg sm:text-2xl text-black font-montserrat text-justify tracking-tight leading-tight whitespace-normal m-0 p-0">
            EXPLORE OUR UPCOMING EVENTS DESIGNED TO INSPIRE, EDUCATE, AND
            CONNECT. FROM WORKSHOPS AND WEBINARS TO INDUSTRY CONFERENCES, [YOUR
            COMPANY NAME] OFFERS A VARIETY OF EVENTS TAILORED TO HELP YOU STAY
            AHEAD IN THE SOCIAL MEDIA MARKETING LANDSCAPE. JOIN US TO GAIN
            VALUABLE INSIGHTS, NETWORK WITH INDUSTRY PROFESSIONALS, AND ENHANCE
            YOUR SKILLS.
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-col items-center">
        <div
          className="text-center  mb-5 py-5 px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl  mt-10"
          style={{
            background: "linear-gradient(to right, #46FF46,rgb(220, 234, 220))",
          }}
        >
          <h2 className="text-2xl font-bold text-black font-montserrat">
            FEATURED EVENTS
          </h2>
        </div>
      </div>

      <section className="py-10 px-5" id="featured" ref={upcomingEventsRef}>
        {/* Horizontal Scroll for Small Screens */}
        <div className="sm:hidden overflow-x-auto">
          <div className="flex space-x-4 min-w-max">
            {" "}
            {/* Added min-w-max to ensure the cards stay in a single row */}
            {cards.map((item, index) => (
              <div className="flex justify-center items-start" key={index}>
                <div className="group relative flex flex-col items-center cursor-pointer w-64">
                  {" "}
                  {/* Fixed width of the card */}
                  <div className="relative cursor-pointer overflow-hidden text-gray-50 h-72 rounded-xl border border-gray-300">
                    <div className="w-full h-full">
                      <img
                        src={createImageUrl(
                          item.image.data.data,
                          item.image.contentType
                        )}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="absolute bg-[#E7FFE7] -bottom-10 w-full p-3 flex flex-col gap-2 transition-all duration-500 group-hover:bottom-0">
                      <span className="text-black font-bold text-xs">
                        {item.name}
                      </span>
                      <p className="text-black text-sm">{item.formattedDate}</p>
                      <p className="text-black text-sm">{item.location}</p>
                      <button
                        className="mt-2 px-4 py-2 bg-green-100 text-black font-bold rounded-md hover:bg-green-200"
                        style={{
                          background: "linear-gradient(to right, #46FF46,rgb(220, 234, 220))",
                        }}
                        onClick={() => navigate(`/contact?name=${item.name}`)}
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Display Cards for Medium Screens */}
        <div className="hidden sm:grid md:grid-cols-2 gap-6 lg:hidden">
          {cards.map((item, index) => (
            <div key={item._id} className="flex justify-center items-start">
              <div className="group relative flex flex-col items-center cursor-pointer w-full max-w-[380px]">
                <div className="relative cursor-pointer overflow-hidden text-gray-50 h-80 w-72 rounded-2xl border border-black">
                  <div className="w-full h-full">
                    <img
                      src={createImageUrl(
                        item.image.data.data,
                        item.image.contentType
                      )}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute bg-[#E7FFE7] -bottom-10 w-full p-3 flex flex-col gap-2 transition-all duration-500 group-hover:bottom-0">
                    <span className="text-black font-bold text-xl">
                      {item.name}
                    </span>
                    <p className="text-neutral-800 text-lg">
                      {item.formattedDate}
                    </p>
                    <p className="text-neutral-800 text-lg">{item.location}</p>
                    <button
                      className="mt-2 px-4 py-2 bg-green-100 text-black font-bold rounded-md hover:bg-green-600"
                      onClick={() => navigate(`/contact?name=${item.name}`)}
                      style={{
                        background: "linear-gradient(to right, #46FF46,rgb(220, 234, 220))",
                      }}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Display Three Cards for Large Screens */}
        <div className="hidden lg:grid grid-cols-3 gap-10">
          {cards.map((item, index) => (
            <div key={item._id} className="flex justify-center items-start">
              <div className="group relative flex flex-col items-center cursor-pointer w-full max-w-[380px]">
                <div className="relative cursor-pointer overflow-hidden text-gray-50 h-80 w-72 rounded-2xl border border-black">
                  <div className="w-full h-full">
                    <img
                      src={createImageUrl(
                        item.image.data.data,
                        item.image.contentType
                      )}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute bg-[#E7FFE7] -bottom-24 w-full p-3 flex flex-col gap-2 transition-all duration-500 group-hover:bottom-0">
                    <span className="text-black font-bold text-xl">
                      {item.name}
                    </span>
                    <p className="text-neutral-800 text-lg">
                      {item.formattedDate}
                    </p>
                    <p className="text-neutral-800 text-lg">{item.location}</p>
                    <button
                      className="mt-2 px-4 py-2 bg-green-100 text-black font-bold rounded-md hover:bg-green-600"
                      onClick={() => navigate(`/contact?name=${item.name}`)}
                      style={{
                        background: "linear-gradient(to right, #46FF46,rgb(220, 234, 220))",
                      }}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center flex-col items-center">
        <div
          className="text-center mb-5 py-5 px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl mt-10 w-full sm:w-auto"
          style={{
            background: "linear-gradient(to right, #46FF46,rgb(220, 234, 220))",
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black font-montserrat">
            What Attendees Say?
          </h2>
        </div>
      </div>

      <div className="flex justify-center flex-col px-4 sm:px-[10%] items-center">
        <div className="text-center bg-[#E7FFE7] mb-5 py-4 sm:py-5 px-4 sm:px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl mx-auto mt-5">
          <p className="text-lg sm:text-2xl text-black font-montserrat text-justify tracking-tight leading-tight whitespace-normal m-0 p-0">
            "THE SOCIAL MEDIA MASTERY WORKSHOP WAS INCREDIBLY INSIGHTFUL. I
            LEARNED SO MUCH AND CAN'T WAIT TO APPLY THESE STRATEGIES TO MY
            BUSINESS!" - ATTENDEE A
          </p>
        </div>
      </div>

      <div className="flex justify-center flex-col px-4 sm:px-[10%] items-center">
        <div className="text-center bg-[#E7FFE7] mb-5 py-4 sm:py-5 px-4 sm:px-10 sm:px-14 inline-block rounded-bl-3xl rounded-tr-3xl mx-auto mt-5">
          <p className="text-lg sm:text-2xl text-black font-montserrat text-justify">
            "GREAT EVENT WITH LOTS OF PRACTICAL TIPS. THE NETWORKING
            OPPORTUNITIES WERE FANTASTIC!" - ATTENDEE B
          </p>
        </div>
      </div>

      <EventBanner />

      <Footer />
    </div>
  );
};

export default Events;

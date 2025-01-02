import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./test.css";

const StickyStackedCards = () => {
  const [cards, setCards] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const upcomingEventsRef = useRef(null);

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

  const createImageUrl = (fileData, contentType) => {
    try {
      const blob = new Blob([new Uint8Array(fileData)], { type: contentType });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error decoding image:", error);
      return "";
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [cards.length]);

  // Display the three upcoming events
  const getDisplayedEvents = () => {
    if (cards.length === 0) return []; // Handle empty data scenario
    return [
      cards[activeIndex % cards.length],
      cards[(activeIndex + 1) % cards.length],
      cards[(activeIndex + 2) % cards.length],
    ];
  };

  const displayedEvents = getDisplayedEvents();

  return (
    <div>
      {/* Desktop Layout for Large Screens */}
      <div className="hidden sm:block lg:flex justify-center items-start mt-12 mb-40 gap-[30%] animate-slide-up">
        {displayedEvents.length > 0 &&
          displayedEvents.map((event, index) => (
            <div
              key={event._id}
              className={`group relative flex flex-col items-center cursor-pointer ${
                index === 1 ? "scale-110" : ""
              }`}
            >
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
                <div className="absolute top-4 left-4 text-white">
                  <p className="font-semibold text-xl">{event.name}</p>
                  <p className="text-sm">{event.formattedDate}</p>
                </div>
              </div>
              <div
                className={`absolute inset-0 flex flex-col justify-end text-center shadow-lg rounded-lg mt-4 p-4 h-[345px] w-[250px] opacity-0 transition-opacity duration-500 ${
                  index === 1 ? "opacity-100" : "group-hover:opacity-100"
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

      {/* For Medium and Small Screens (Horizontal Scrolling) */}
      <div className="sm:hidden lg:hidden mt-12 mb-40 flex justify-center gap-8">
        {displayedEvents.length > 0 &&
          displayedEvents.map((event, index) => (
            <div
              key={event._id}
              className={`group relative flex-shrink-0 flex flex-col items-center cursor-pointer w-[250px] h-[300px] bg-cover bg-center rounded-lg shadow-lg ${
                index === 1 ? "scale-110" : "" // Apply scaling to the active card (centered card)
              }`}
              style={{
                backgroundImage: `url(${createImageUrl(
                  event.image.data.data,
                  event.image.contentType
                )})`,
              }}
            >
              <div className="absolute top-4 left-4 text-white">
                <p className="font-semibold text-xl">{event.name}</p>
                <p className="text-sm">{event.formattedDate}</p>
              </div>
              <div
                className="absolute inset-0 flex flex-col justify-end text-center shadow-lg rounded-lg mt-4 p-4 h-[345px] w-[250px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
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
    </div>
  );
};

export default StickyStackedCards;

import React, { useEffect, useState } from "react";
import "./test.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StickyStackedCards = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  // Fetch card data from the server
  const fetchSuggestions = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/event/get-event`
      );
      const lastThreeCards = response.data.slice(-3).map((card) => ({
        ...card,
        formattedDate: new Date(card.date).toLocaleString(),
      }));
      setCards(lastThreeCards);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  // Generate image URL from file data
  const createImageUrl = (fileData, contentType) => {
    try {
      const blob = new Blob([new Uint8Array(fileData)], { type: contentType });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error decoding image:", error);
      return "";
    }
  };

  return (
    <div>
      {/* Horizontal Scroll for Small Screens */}
      <div className="sm:hidden overflow-x-auto py-6">
        <div className="flex space-x-4 min-w-max">
          {cards.map((item, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-64"
            >
              <div className="group relative flex flex-col items-center cursor-pointer">
                <div className="relative cursor-pointer overflow-hidden h-72 rounded-xl border border-gray-300 text-gray-50">
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
                    <p className="text-black text-sm">
                      {item.formattedDate}
                    </p>
                    <p className="text-black text-sm">{item.location}</p>
                    <button
                      className="mt-2 px-4 py-2 bg-green-100 text-black font-bold rounded-md hover:bg-green-200"
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

      {/* Grid Layout for Small and Medium Screens */}
      <div className="hidden sm:grid md:grid-cols-2 gap-6 lg:hidden">
        {cards.map((item) => (
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
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stacked Layout for Large Screens */}
      <div className="hidden lg:flex justify-center items-start mt-12 mb-40 gap-[30%] animate-slide-up">
        {cards.map((event, index) => (
          <div
            key={event._id}
            className={`group relative flex flex-col items-center cursor-pointer ${
              index === 1 ? "scale-110" : ""
            }`}
          >
            <div
              className={`h-[300px] w-[250px] bg-cover bg-center rounded-lg shadow-lg relative transition-transform duration-700 ease-in-out z-10 ${
                index === 1
                  ? ""
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
    </div>
  );
};

export default StickyStackedCards;

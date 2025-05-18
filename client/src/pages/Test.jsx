import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Arrow1 = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-700 transition"
    aria-label={direction === "left" ? "Previous" : "Next"}
  >
    {direction === "left" ? "←" : "→"}
  </button>
);

const StickyStackedCards = () => {
  const [cards, setCards] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1); // focus on middle card initially
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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

  const createImageUrl = (fileData, contentType) => {
    try {
      const blob = new Blob([new Uint8Array(fileData)], { type: contentType });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error decoding image:", error);
      return "";
    }
  };

  // Swiper navigation init
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [cards]);

  // Large screen navigation handlers
  const handlePrevLarge = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };
  const handleNextLarge = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      {/* Large Screen: 3 cards side by side */}
      <div className="hidden lg:flex justify-center items-start mt-12 gap-[30%] animate-slide-up lg:mb-14 md:mb-14 relative">
        {/* Custom Prev/Next buttons for large screen */}
        <div className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 z-20">
          <Arrow1 direction="left" onClick={handlePrevLarge} />
        </div>
        <div className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 z-20">
          <Arrow1 direction="right" onClick={handleNextLarge} />
        </div>

        {cards.length > 0 &&
          cards.map((event, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center cursor-pointer transition-transform duration-700 ${
                index === activeIndex ? "scale-110" : "scale-100"
              }`}
            >
              {/* Front card image */}
              <div
                className={`h-[300px] w-[250px] bg-cover bg-center rounded-lg shadow-lg relative z-10
                  transition-transform duration-700 ease-in-out
                  group-hover:translate-y-[-150px] group-hover:rotate-[20deg] group-hover:-translate-y-16`}
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

              {/* Back card content */}
              <div
                className={`absolute inset-0 flex flex-col justify-end text-center shadow-lg rounded-lg mt-4 p-4 h-[345px] w-[250px] opacity-0 transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "group-hover:opacity-100"
                }`}
                style={{ backgroundColor: "#c4c0c0", visibility: "visible" }}
              >
                <p className="text-black font-semibold text-[10px] mb-[25%]">
                  {event.name}
                </p>
                <button
                  className="absolute bottom-2 left-2 px-3 py-2 bg-[#00FF00] text-black rounded-full hover:bg-green-600 transition duration-300"
                  onClick={() =>
                    navigate(
                      `/contact?name=${event.name}&location=${event.location}&normal=yes`
                    )
                  }
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Small and Medium Screens: Swiper Slider */}
      <div className="lg:hidden mt-12 mb-40 px-4 relative">
        {/* Custom Navigation Buttons */}
        <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20">
          <Arrow1
            direction="left"
            onClick={() => swiperRef.current?.slidePrev()}
          />
        </div>
        <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20">
          <Arrow1
            direction="right"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>

        {cards.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ clickable: true }}
            loop={true}
          >
            {cards.map((event, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative flex flex-col items-center cursor-pointer"
                  style={{
                    width: "250px",
                    height: "300px",
                    margin: "0 auto",
                    borderRadius: "0.5rem",
                    boxShadow:
                      "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
                    backgroundImage: `url(${createImageUrl(
                      event.image.data.data,
                      event.image.contentType
                    )})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute top-4 left-4 text-white z-10">
                    <p className="font-semibold text-xl">{event.name}</p>
                    <p className="text-sm">{event.formattedDate}</p>
                  </div>

                  {/* Back card content */}
                  <div
                    className="absolute inset-0 flex flex-col justify-end text-center rounded-lg p-4 h-full w-full bg-[#c4c0c0] bg-opacity-90"
                    style={{ visibility: "visible" }}
                  >
                    <p className="text-black font-semibold text-[10px] mb-[25%]">
                      {event.name}
                    </p>
                    <button
                      className="absolute bottom-2 left-2 px-3 py-2 bg-[#00FF00] text-black rounded-full hover:bg-green-600 transition duration-300"
                      onClick={() =>
                        navigate(
                          `/contact?name=${event.name}&location=${event.location}&normal=yes`
                        )
                      }
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default StickyStackedCards;

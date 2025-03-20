import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaDownload } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CardSwiper = () => {
  const [slidesData, setSlidesData] = useState([]);

  // Fetch case studies
  const fetchSuggestions = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/case/get-case`
      );
      setSlidesData(response.data);
    } catch (error) {
      console.error("Error fetching case studies:", error);
    }
  };

  useEffect(() => {
    fetchSuggestions();
  }, []);

  // Function to handle PDF download
  const downloadPdf = (bufferData, fileName) => {
    const blob = new Blob([new Uint8Array(bufferData)], {
      type: "application/pdf",
    });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${fileName}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 md:p-6 w-full max-w-7xl mx-auto">
      {/* Swiper Section */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        grabCursor={true}
        loop={true}
        className="w-full"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="shadow-md rounded-xl p-3 flex flex-col justify-between min-h-56"
              style={{
                background:
                  "linear-gradient(to right, #46FF46, rgb(220, 234, 220))",
              }}
            >
              <h3 className="text-md font-semibold text-gray-900 truncate">
                {slide.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3 overflow-hidden max-h-14">
                {slide.review}
              </p>

              {/* Download PDF Button */}
              <div className="mt-auto pt-3 flex justify-end items-center">
                {slide.image?.data?.data &&
                slide.image.contentType === "application/pdf" ? (
                  <button
                    className="flex items-center gap-2 px-3 py-1.5 bg-white text-black text-xs font-medium rounded-lg shadow hover:bg-[#3FE13F] transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      downloadPdf(slide.image.data.data, slide.name);
                    }}
                  >
                    Download <FaDownload className="h-4 w-4 text-black" />
                  </button>
                ) : (
                  <p className="text-gray-500 text-xs">No PDF available</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSwiper;

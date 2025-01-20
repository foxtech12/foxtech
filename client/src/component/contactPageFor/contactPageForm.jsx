import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBuilding,
  faBars,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = ({ val }) => {
  // State to track the form width
  const [inputWidth, setInputWidth] = useState(50);

  // Set width to 100% once the form is rendered
  useEffect(() => {
    const timer = setTimeout(() => {
      setInputWidth(100); // Increase the width to 100% after the form has loaded
    }, 500); // Set a small delay for smooth transition (500ms or whatever works best)

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
    company: "",
    subject: "",
    related: val,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    // Ensure `related` field is updated when `val` changes
    setFormData((prevData) => ({
      ...prevData,
      related: val,
    }));
  }, [val]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER}/api/contact/add`,
        formData
      );
      toast.success("we will get back to you soon...");
      setFormData({
        email: "",
        phone: "",
        message: "",
        name: "",
        company: "",
        subject: "",
      });
    } catch (error) {
      toast.error("Internal Server Error");
      setResponseMessage("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen bg-white p-4">
        <div className="w-full max-w-4xl bg-[#E7FFE7] p-8 rounded-lg">
          {/* Header */}
          <div className="text-center">
            <div className="inline-block bg-[#46FF46] text-white px-6 py-2 rounded-tr-3xl rounded-bl-3xl shadow-md mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-wide text-black">
                JOIN US
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex justify-center items-center min-h-screen">
            <form
              className="space-y-6 w-full sm:w-3/4 md:w-1/2 p-6"
              onSubmit={handleSubmit}
            >
              {["name", "email", "phone", "company", "subject"].map((field) => (
                <div key={field}>
                  <label className="block text-black font-semibold mb-2 capitalize  font-sans">
                    {field}
                  </label>
                  <div
                    className="relative flex items-center bg-[#E7FFE7] border border-black rounded transition-all duration-500"
                    style={{ width: `${inputWidth}%` }}
                  >
                    {/* Conditionally render the email icon */}
                    {field === "email" && (
                      <span className="absolute left-3 text-black">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                    )}

                    {field === "phone" && (
                      <span className="absolute left-3 text-black">
                        <FontAwesomeIcon icon={faPhone} />
                      </span>
                    )}
                    {field === "company" && (
                      <span className="absolute left-3 text-black">
                        <FontAwesomeIcon icon={faBuilding} />
                      </span>
                    )}

                    {field === "subject" && (
                      <span className="absolute left-3 text-black">
                        <FontAwesomeIcon icon={faBars} />
                      </span>
                    )}

                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Enter your ${field}`}
                      className="w-full pl-10 p-3 bg-transparent text-black outline-none transition-all duration-500 font-sans"
                      required={field !== "subject"} // Subject is optional
                    />
                  </div>
                </div>
              ))}
              
              {/* Message */}
              <div className="relative">
                <label className="block text-black font-semibold mb-2 font-sans">
                  Message
                </label>
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">
                  <FontAwesomeIcon icon={faMessage} />
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi! I would like to ask you something..."
                  rows="4"
                  style={{ width: `${inputWidth}%` }}
                  className="p-3 pl-10 bg-[#E7FFE7] text-black border border-black rounded transition-all duration-500 font-sans"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  style={{ width: `${inputWidth}%` }} // Adjust width dynamically
                  className="bg-[#00FF00] hover:bg-green-600 text-black font-semibold py-3 px-8 rounded-full transition-all duration-500 font-sans"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
              {/* Response Message */}
              {responseMessage && (
                <p className="text-center mt-4 text-lg font-medium text-black">
                  {responseMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;

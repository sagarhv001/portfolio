"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
require("dotenv").config();

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Hello There!";

  const form = useRef();
  async function sendEmail(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key","f6d8d22d-0627-4183-a280-4ece1def5167");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
        console.log(result);
        setSuccess(true);
    }
    if (!result.success) {
        console.error("Error sending email:", result);
        setError(true);
      }
   
  
  }

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 justify-center p-24"
        >
          <span>Hi Sagar!</span>
          <span>My name is:</span>
          <input
            name="name"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          
          <span>I would like to discuss regarding:</span>
          <textarea
            rows={10}
            className="bg-transparent border-b-2 border-b-black outline-none resize-10"
            name="message"
          />
          
          
          <span>My e-mail address is:</span>
          <input
            name="email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
        
      </div>
    </motion.div>
  );
};

export default ContactPage;

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1}}
    >
      <div className="flex flex-col lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        <div className="h-1/2 relative lg:h-full lg:w-1/2">
          <Image
            src="/hero3.png"
            alt=""
            fill
            className="object-contain w-full h-full"
            unoptimized
          />
        </div>

        <div className="h-1/2 flex flex-col items-center justify-center lg:h-full lg:w-1/2">
          {/* TEXT CONTAINER */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold">
              {" "}
              Building Clarity, Unveiling Insight
            </h1>
            <p className="md:text-xl">
              Dive into my digital space! I&apos;m a aspiring Data Scientist and Tech
              Enthusiat, crafting insights from every byte. Join me in a journey
              where challenges spark growth, and data unveils its hidden
              stories. Let&apos;s explore the world of insights together.
            </p>
          </div>
          <div className="flex gap-4 w-full mt-4 item-align-left">
            <Link href="/contact">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Contact Me
            </button>
            </Link>
            <Link href="https://drive.google.com/file/d/1ymQ0Dx2EHVKvS1ezCEJwfgbKXpoV26dr/view?usp=drive_link"> 
            <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">
              Resume
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;

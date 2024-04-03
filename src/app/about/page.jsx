"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
const Aboutpage = () => {


  const containerRef = useRef();
  const {scrollYProgress} = useScroll({container:containerRef});

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });


  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex " ref={containerRef}>
        {/*Container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-24 xl:p-48 flex flex-col gap-24 md:gap-36 lg:gap-46 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* Text Container */}
          <div className="flex flex-col gap-12 justify-center ">
            {/* About Container */}
            <h1 className="font-bold text-2xl">ABOUT</h1>
            <p>
              As a passionate engineering scholar, I am fascinated by the
              mysteries of data analytics, data science, and AI/ML. I am driven
              by the promise of acquiring knowledge and constantly seek to
              refine my skills, traversing the ever-evolving technology
              landscape. My ardor lies in the art of transforming data into
              actionable insights that unravel complex problems, enabling
              informed decision-making with clarity. I welcome challenges and
              obstacles as opportunities for growth, and remain constantly
              curious in my pursuit of new paths to enlighten my way forward.
              out of this content i want catchy title and text for my portfolio
              website
            </p>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="flex flex-col gap-12 justify-center pb-48" ref={skillRef}>
            {/* Skills Container */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* Skills List */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                python
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                Java
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                Pandas
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                Numpy
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                C
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                TensorFlow
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                Tableau
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="text-white bg-black rounded-md p-1 font-semibold hover:bg-white hover:text-black">
                Framer-motion
              </div>
            </motion.div>

            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
            {/* Experience Container */}
            {/* <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1> */}
            {/* <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="">
              <div className="">
              <div className="flex justify-between h-48"> */}
                {/* Experience List Item */}
                {/* <div className="w-1/3"> */}
                  {/* Left */}
                  {/* <div className="p-3 bg-white p-3 font-semibold rounded-lg w-fit "> */}
                    {" "}
                    {/* Job Title:AL/ML Intern */}
                  {/* </div>
                  <div className="p-3 text-sm italic "> */}
                   {/* Job Description */}
                  {/* </div>
                  <div className="p-3 text-red-400 text-sm font-semibold"> */}
                    {" "}
                    {/* Job DateApril-2024 */}
                  {/* </div>
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit"> */}
                    {" "}
                    {/* Job CompanyInfosys SpringBoard */}
                  {/* </div>
                </div>
                <div className="w-1/6"> */}
                  {/* Middle */}
                  {/* <div className="w-1 h-60 bg-black rounded relative"> */}
                    {/* line */}
                    {/* <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"> */}
                      {/*  circle */}
                    {/* </div> */}
                  {/* </div> */}
                {/* </div>
                <div className="w-1/3">Right</div>
              </div>
            </div>
            

              </motion.div> */}
            {/* Experience List */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EDUCATION
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className="">
              <div className="">
              <div className="flex justify-between h-48">
                {/* Experience List Item */}
                <div className="w-1/3">
                  {/* Left */}
                  <div className="p-3 bg-white p-3 font-semibold rounded-lg w-fit ">
                    {" "}
                    {/* Job Title */}BTech
                  </div>
                  <div className="p-3 text-sm italic ">
                   {/* Job Description */} Informaion Science and Engineering
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {" "}
                    {/* Job Date */}2021-till date
                  </div>
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    {" "}
                    {/* Job Company */}PES College of Engineering, Mandya
                  </div>
                </div>
                <div className="w-1/6">
                  {/* Middle */}
                  <div className="w-1 h-60 bg-black rounded relative">
                    {/* line */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                      {/*  circle */}
                    </div>
                  </div>
                </div>
                <div className="w-1/3">{/* Right */}</div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-between h-48">
                {/* Experience List Item */}
                <div className="w-1/3">{/* Left */}</div>
                <div className="w-1/6">
                  {/* Middle */}
                  <div className="w-1 h-60 bg-black rounded relative">
                    {/* line */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2">
                      {/*  circle */}
                    </div>
                  </div>
                </div>
                <div className="w-1/3">
                  {/* Right */}
                  <div className="p-3 bg-white p-3 font-semibold rounded-lg w-fit ">
                    {" "}
                    {/* Job Title */}PU
                  </div>

                  <div className="p-3 text-sm italic ">
                   {/* Job Description */}
                  </div>
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    {" "}
                    {/* Job Date */}2019-2021
                  </div>
                  <div className="p-3 rounded bg-white text-sm font-semibold w-fit">
                    {" "}
                    {/* Job Company */}Marimallappa`&apos;`s PU College, Mysuru
                  </div>
                </div>
              </div>
            </div>
            

              </motion.div>
            
          </div>
        </div>
        <div>
         
        </div>
         {/* Svg Container */}
         <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
         <Brain scrollYProgress={scrollYProgress}/>
        </div> 
      </div>
    </motion.div>
  );
};

export default Aboutpage;

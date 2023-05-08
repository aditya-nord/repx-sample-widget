import React from "react";
import  RectangleTop from '../../assets/RectangleTop';
import  RectangleLeft from '../../assets/RectangleLeft';
import  RectangleMiddle from '../../assets/RectangleMiddle';
import  RectangleRight from '../../assets/RectangleRight';
import  CircleRight from '../../assets/CircleRight';
import  Line from '../../assets/Line';
import '../../tailwind.css'

import { motion, AnimatePresence } from "framer-motion";


const PendingState = ({ bodyMessage }: { bodyMessage: string }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="absolute w-[310px] h-[250px] right-[2px] mx-4 my-6 rounded-md bg-[#1C1E29] text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="flex w-[180px] h-[55px]  m-5 rounded-[106px] bg-[#FFFFFF] bg-opacity-[17%] text-white">
        
        <motion.div
            className="p-2"
            animate={{ scale: [1, 1.2, 1]}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.2,
            }}
          >
          {/* <img src={circleRight} alt="" className=" mt-0.5" /> */}
          <CircleRight className=" mt-0.5" />
          </motion.div>

          <motion.div
            className="p-4"
            animate={{ scale: [1, 1.2, 1]}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.2,
            }}
          >
          {/* <img src={rectangleTop} alt="" width={80} /> */}
          <RectangleTop className='w-[80px]' />
          </motion.div>
        </div>

        {/* <img src={line} alt="" className="w-[170px] ml-4" /> */}
        <Line className="w-[170px] ml-4"/>


        {/* address display */}
        <div>
          <p className="whitespace-normal truncate p-4 ">{bodyMessage}</p>
        </div>

        {/* Loading animation */}
        <div className="flex mt-3 mx-auto">
          <motion.div
            className="p-2 ml-2"
            animate={{ scale: [1, 1.2, 1]}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {/* <img src={rectangleLeft} alt="" /> */}
            <RectangleLeft />
          </motion.div>

          <motion.div
            className="p-2"
            animate={{ scale: [1, 1.2, 1]}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.2,
            }}
          >
            {/* <img src={rectangleMiddle} alt="" /> */}
            <RectangleMiddle />
          </motion.div>

          <motion.div
            className="p-2"
            animate={{ scale: [1, 1.2, 1]}}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.4,
            }}
          >
            {/* <img src={rectangleRight} alt="" /> */}
            <RectangleRight/>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PendingState;


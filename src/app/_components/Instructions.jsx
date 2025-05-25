"use client";

import React from "react";
import { motion } from "framer-motion";
import Stepper from "./Stepper";
export default function Instructions() {
  const animationVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <main className="w-11/12 mx-auto my-10 max-w-[1440px] space-y-10">
      <div>
        <motion.h1
          className="w-full font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Заполните все формы и начните строит приложения
        </motion.h1>
        <motion.p
          variants={animationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, delay: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-montserrat text-lg md:text-xl lg:text-2xl text-center text-primary"
        >
          Внимательно заполните формы соблюдая тему вашего бизнеса
        </motion.p>
      </div>
      <div className="bg-thin rounded-md md:rounded-[30px] md:p-5 max-w-3xl md:w-10/12 mx-auto h-full">
        <Stepper/>
      </div>
    </main>
  );
}

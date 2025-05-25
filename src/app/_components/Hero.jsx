"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { ImageCarousel } from "@/components/shared/image-corousel";
import Image from "next/image";

export default function Hero() {
  const animationVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="flex justify-center items-center gap-16 flex-col">
      <div className="w-11/12 max-w-[1440px] mx-auto flex flex-col items-center gap-2 pt-8">
        <motion.h1
          variants={animationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="w-full font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary"
        >
          Создайте мобильное приложения в несколько кликов
        </motion.h1>

        <motion.p
          variants={animationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-montserrat text-lg md:text-xl lg:text-2xl text-center text-primary"
        >
          Сделайте первый шаг в улучшении вашего бизнеса!
        </motion.p>
      </div>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <ImageCarousel />
        <motion.div
          variants={animationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src="/appImage/main.webp"
              alt="Main App Image"
              width={320}
              height={200}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="w-11/12 max-w-[1440px] mx-auto flex flex-col items-center gap-1">
        <motion.div
          variants={animationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/">
            <Button className="text-md hover:bg-primary hover:opacity-90 hover:ring-1 transition-all duration-200 ease-linear">
              Создать Приложения
            </Button>
          </Link>
        </motion.div>
        <motion.h1
          className="text-primary hover:underline cursor-pointer"
          variants={animationVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Узнать про приложения
        </motion.h1>
      </div>
    </div>
  );
}

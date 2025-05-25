"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";

const imageAnimations = [
  {
    src: "/appImage/1.webp",
    style: "absolute -top-16 z-10 -left-[120px]",
    initial: { opacity: 0, y: -50 },
    delay: 0.2,
  },
  {
    src: "/appImage/2.webp",
    style: "absolute -top-4 z-10 left-[120px]",
    initial: { opacity: 0, x: 50 },
    delay: 0.4,
  },
  {
    src: "/appImage/4.webp",
    style: "absolute top-16 z-20 -left-[160px]",
    initial: { opacity: 0, y: 50 },
    delay: 0.6,
  },
  {
    src: "/appImage/5.webp",
    style: "absolute -bottom-36 z-30 -left-[100px]",
    initial: { opacity: 0, x: -50 },
    delay: 0.8,
  },
  {
    src: "/appImage/3.webp",
    style: "absolute -bottom-28 z-30 left-28",
    initial: { opacity: 0, y: 50 },
    delay: 1.0,
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <main className="w-full max-w-[1440px] mx-auto flex justify-between items-center py-10 max-lg:flex-col lg:gap-10">
      <div className="w-11/12 lg:w-1/2 space-y-5">
        <motion.h1
          className="w-full font-montserrat text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Коротко о нашем сервисе
        </motion.h1>
        <motion.p
          className="text-xl font-[300] w-11/12 mx-auto text-primary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Мобильное приложения имеет все важные функции для улучшения продаж
          товаров.
        </motion.p>

        <motion.ul
          className="list-disc pl-5 w-10/12 mx-auto text-primary"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {[
            "Окно регистрации",
            "Каталог товаров",
            "Окно подиум для товара",
            "Корзина для заказа.",
            "Доставка или заказ на вынос",
            "Возможность оплаты наличными и интеграция со всеми платёжными системами",
            "История заказов",
            "Бонусная система",
            "Окно “О нас” про ваш бизнес",
          ].map((text, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
              }}
              className="mb-1"
            >
              {text}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div
        ref={containerRef}
        className="relative w-full lg:w-1/2 flex justify-center items-center h-[620px] overflow-hidden"
      >
        {imageAnimations.map((img) => (
          <motion.div
            key={img.src}
            className={`${img.style} w-full h-full flex justify-center items-center`}
            variants={{
              hidden: img.initial,
              visible: { opacity: 1, x: 0, y: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ delay: img.delay, duration: 0.8, ease: "easeOut" }}
          >
            <Image src={img.src} alt={`Image`} width={150} height={100} />
          </motion.div>
        ))}

        <motion.div
          className="z-50"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            <Image
              src="/appImage/main2.webp"
              alt="Main App Image"
              width={200}
              height={150}
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}

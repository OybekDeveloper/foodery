"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PhoneInput } from "@/components/ui/phone-input";
import { ChevronLeft, X } from "lucide-react";
import ColorPicker from "@/components/shared/color-picker";
import StepControler from "./StepControler";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants for step container
const stepVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    x: -100, 
    transition: { duration: 0.3, ease: "easeIn" } 
  },
};

// Animation variants for text
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

// Animation variants for form fields
const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
};

// Animation variants for images
const imageVariants = {
  hidden: (custom) => ({
    opacity: 0,
    x: custom.x || 0,
    y: custom.y || 0,
    scale: custom.scale || 1,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const StepContent = ({ setError, error, step, orderData, setOrderData }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        variants={stepVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {(() => {
          switch (step) {
            case 1:
              return (
                <Step1
                  error={error}
                  orderData={orderData}
                  setOrderData={setOrderData}
                  setError={setError}
                />
              );
            case 2:
              return (
                <Step2
                  error={error}
                  orderData={orderData}
                  setOrderData={setOrderData}
                  setError={setError}
                />
              );
            case 3:
              return (
                <Step3
                  error={error}
                  orderData={orderData}
                  setOrderData={setOrderData}
                  setError={setError}
                />
              );
            case 4:
              return (
                <Step4
                  error={error}
                  orderData={orderData}
                  setOrderData={setOrderData}
                  setError={setError}
                />
              );
            default:
              return null;
          }
        })()}
      </motion.div>
    </AnimatePresence>
  );
};

export default function Stepper() {
  const [step, setStep] = useState(1);
  const [orderData, setOrderData] = useState({
    name: "",
    business: "",
    product_type: "",
    phone: "",
    colors: {
      primary: "rgba(58, 135, 253, 1)",
      background: "rgba(255, 255, 255, 1)",
      text: "rgba(62, 62, 62, 1)",
      button: "rgba(62, 62, 62, 1)",
    },
  });
  const [error, setError] = useState({
    name: "",
    business: "",
    product_type: "",
    phone: "",
    colors: {
      primary: "",
      background: "",
      text: "",
      button: "",
    },
  });

  return (
    <div className="p-6 mx-auto">
      <StepContent
        step={step}
        orderData={orderData}
        setOrderData={setOrderData}
        error={error}
        setError={setError}
      />
      <StepControler
        setError={setError}
        error={error}
        step={step}
        setStep={setStep}
        orderData={orderData}
        setOrderData={setOrderData}
      />
    </div>
  );
}

const Step1 = ({ orderData, setOrderData, error, setError }) => {
  const [openBusiness, setOpenBusiness] = useState(false);
  const [openProductType, setOpenProductType] = useState(false);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-4">
      <motion.h2 
        className="text-3xl font-[400] text-primary" 
        variants={textVariants}
      >
        Первый щаг!
      </motion.h2>
      <motion.p 
        className="text-lg text-primary" 
        variants={textVariants}
      >
        Расскажите про ваш бизнес
      </motion.p>
      <motion.form 
        className="w-full max-w-md space-y-4"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.2 } 
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {/* Название бренда */}
        <motion.div
          variants={formFieldVariants}
          className={`w-full px-3 border-2 pb-2 rounded-md ${
            error.name ? "border-red-500" : "border-[#CFD3D4]"
          } bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all ease-linear duration-100`}
        >
          <Label className="text-black/50 text-[12px]">Название бренда</Label>
          <Input
            type="text"
            name="name"
            value={orderData.name}
            onChange={(e) => {
              setOrderData({ ...orderData, name: e.target.value });
              setError({ ...error, name: "" });
            }}
            placeholder="Обязательно"
            className="p-1 text-[16px] h-auto border-none shadow-none focus-visible:ring-0 focus:outline-none"
          />
          {error.name && (
            <p className="text-sm text-red-500 mt-1">{error.name}</p>
          )}
        </motion.div>

        {/* Бизнес */}
        <motion.div
          variants={formFieldVariants}
          onClick={() => setOpenBusiness(!openBusiness)}
          className={`cursor-pointer w-full px-3 border-2 pb-2 rounded-md ${
            error.business ? "border-red-500" : "border-[#CFD3D4]"
          } bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all ease-linear duration-100`}
        >
          <Label className="text-black/50 text-[12px]">Тип бизнеса</Label>
          <Select
            value={orderData.business}
            open={openBusiness}
            onOpenChange={setOpenBusiness}
            onValueChange={(e) => {
              setOrderData({ ...orderData, business: e });
              setError({ ...error, business: "" });
            }}
          >
            <SelectTrigger className="p-1 h-auto focus:ring-0 focus:outline-none w-full border-none shadow-none">
              <SelectValue placeholder="Выберите бизнес" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          {error.business && (
            <p className="text-sm text-red-500 mt-1">{error.business}</p>
          )}
        </motion.div>

        {/* Тип продукта */}
        <motion.div
          variants={formFieldVariants}
          onClick={() => setOpenProductType(!openProductType)}
          className={`cursor-pointer w-full px-3 border-2 pb-2 rounded-md ${
            error.product_type ? "border-red-500" : "border-[#CFD3D4]"
          } bg-white focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all ease-linear duration-100`}
        >
          <Label className="text-black/50 text-[12px]">Тип продукта</Label>
          <Select
            open={openProductType}
            value={orderData.product_type}
            onOpenChange={setOpenProductType}
            onValueChange={(e) => {
              setOrderData({ ...orderData, product_type: e });
              setError({ ...error, product_type: "" });
            }}
          >
            <SelectTrigger className="p-1 h-auto focus:ring-0 focus:outline-none w-full border-none shadow-none">
              <SelectValue placeholder="Выберите тип продукта" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
          {error.product_type && (
            <p className="text-sm text-red-500 mt-1">{error.product_type}</p>
          )}
        </motion.div>

        {/* Телефон */}
        <motion.div variants={formFieldVariants}>
          <PhoneInput
            error={error.phone}
            value={orderData.phone}
            onChange={(e) => {
              setOrderData({ ...orderData, phone: e });
              setError({ ...error, phone: "" });
            }}
          />
          {error.phone && (
            <p className="text-sm text-red-500 mt-1">{error.phone}</p>
          )}
        </motion.div>
      </motion.form>
    </div>
  );
};

// Step2, Step3, and Step4 remain unchanged for brevity
// You can keep their existing code as provided, as they already handle their animations appropriately
const Step2 = ({ orderData, setOrderData, error, setError }) => {
  const [activeColor, setActiveColor] = useState("primary");
  return (
    <div className="pt-5 sm:min-h-[450px] w-full flex justify-between items-start gap-4">
      <div className="w-full flex flex-col gap-4">
        <motion.h2 
          className="w-full text-start text-3xl font-[400] text-primary"
          variants={textVariants}
        >
          Второй щаг!
        </motion.h2>
        <motion.p 
          className="w-full text-start text-lg text-primary"
          variants={textVariants}
        >
          Выберите нужные вам цвета
        </motion.p>
        <div className="relative">
          <ColorPicker
            open={activeColor === "primary"}
            name="primary"
            label="Основной цвет"
            value={orderData?.colors?.primary}
            onChange={(color) => {
              setOrderData({
                ...orderData,
                colors: {
                  ...orderData.colors,
                  primary: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                },
              });
            }}
            onClose={() => setActiveColor("")}
            onOpenChange={() => {
              setActiveColor("primary");
            }}
            defaultValue={{
              r: "58",
              g: "135",
              b: "253",
              a: "1",
            }}
          />
          <ColorPicker
            open={activeColor === "background"}
            label="Фон"
            name="background"
            value={orderData?.colors?.background}
            onChange={(color) => {
              setOrderData({
                ...orderData,
                colors: {
                  ...orderData.colors,
                  background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                },
              });
            }}
            onClose={() => setActiveColor("")}
            onOpenChange={() => {
              setActiveColor("background");
            }}
            defaultValue={{
              r: "255",
              g: "255",
              b: "255",
              a: "1",
            }}
          />
          <ColorPicker
            open={activeColor === "text"}
            label="Цвет текста"
            name="text"
            value={orderData?.colors?.text}
            onChange={(color) => {
              setOrderData({
                ...orderData,
                colors: {
                  ...orderData.colors,
                  text: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                },
              });
            }}
            onClose={() => setActiveColor("")}
            onOpenChange={() => {
              setActiveColor("text");
            }}
            defaultValue={{
              r: "62",
              g: "62",
              b: "62",
              a: "1",
            }}
          />
          <ColorPicker
            open={activeColor === "button"}
            label="Цвет кнопок"
            name="button"
            value={orderData?.colors?.button}
            onChange={(color) => {
              setOrderData({
                ...orderData,
                colors: {
                  ...orderData.colors,
                  button: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                },
              });
            }}
            onClose={() => setActiveColor("")}
            onOpenChange={() => {
              setActiveColor("button");
            }}
            defaultValue={{
              r: "62",
              g: "62",
              b: "62",
              a: "1",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Step3 = () => (
  <div className="w-full flex justify-center items-center flex-col gap-4">
    <motion.h2 
      className="text-3xl font-[400] text-primary" 
      variants={textVariants}
    >
      Готово!
    </motion.h2>
    <motion.p 
      className="text-lg text-primary" 
      variants={textVariants}
    >
      Предпросмотр вашего приложения
    </motion.p>
    <div className="relative flex justify-center items-center">
      <motion.div
        custom={{ x: 50, scale: 0.8 }}
        variants={imageVariants}
        className="max-sm:hidden absolute -right-24 -bottom-2"
      >
        <Image
          width={130}
          height={230}
          src="/appImage/1phone.webp"
          alt="image"
        />
      </motion.div>
      <motion.div
        custom={{ y: 20, scale: 0.9 }}
        variants={imageVariants}
      >
        <Image
          width={170}
          height={270}
          src="/appImage/2phone.webp"
          alt="image"
        />
      </motion.div>
      <motion.div
        custom={{ x: -50, scale: 0.8 }}
        variants={imageVariants}
        className="max-sm:hidden absolute -left-24 bottom-2"
      >
        <Image
          width={130}
          height={230}
          src="/appImage/3phone.webp"
          alt="image"
        />
      </motion.div>
    </div>
  </div>
);

const Step4 = () => (
  <div className="w-full flex justify-center items-center flex-col gap-4">
    <motion.h2 
      className="text-3xl font-[400] text-primary"
      variants={textVariants}
    >
      Ваше приложения почти готово!
    </motion.h2>
    <motion.p 
      className="text-lg text-primary"
      variants={textVariants}
    >
      Ближайшее время наши менеджеры свяжутся с вами
    </motion.p>
    <div className="relative flex justify-center items-center">
      <motion.div
        custom={{ x: 30, y: -30 }}
        variants={imageVariants}
        className="max-sm:hidden absolute left-4 -top-4"
      >
        <Image
          width={80}
          height={150}
          src="/appImage/1.webp"
          alt="image"
        />
      </motion.div>
      <motion.div
        custom={{ x: 20, y: 20 }}
        variants={imageVariants}
        className="max-sm:hidden absolute right-0 -bottom-2"
      >
        <Image
          width={80}
          height={150}
          src="/appImage/3.webp"
          alt="image"
        />
      </motion.div>
      <motion.div
        custom={{ x: -20, y: -20 }}
        variants={imageVariants}
        className="max-sm:hidden absolute -right-4 top-0"
      >
        <Image
          width={80}
          height={150}
          src="/appImage/2.webp"
          alt="image"
        />
      </motion.div>
      <motion.div
        custom={{ x: 40 }}
        variants={imageVariants}
        className="max-sm:hidden absolute -left-8 z-[40]"
      >
        <Image
          width={80}
          height={150}
          src="/appImage/4.webp"
          alt="image"
        />
      </motion.div>
      <motion.div
        custom={{ x: -40, y: 40 }}
        variants={imageVariants}
        className="max-sm:hidden absolute left-8 z-40 bottom-0"
      >
        <Image
          width={80}
          height={150}
          src="/appImage/5.webp"
          alt="image"
        />
      </motion.div>
      <motion.div
        custom={{ scale: 0.9 }}
        variants={imageVariants}
        className="z-20"
      >
        <Image
          width={250}
          height={350}
          src="/appImage/main.webp"
          alt="image"
        />
      </motion.div>
    </div>
  </div>
);
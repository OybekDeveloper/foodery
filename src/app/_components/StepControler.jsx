"use client";

import React from "react";
import { ChevronLeft, X } from "lucide-react";

const StepControler = ({
  error,
  setError,
  step,
  setStep,
  orderData,
  setOrderData,
}) => {
  const validateStep1 = () => {
    const errors = {};
    if (!orderData.name) errors.name = "Введите название бренда";
    if (!orderData.business) errors.business = "Выберите бизнес";
    if (!orderData.product_type) errors.product_type = "Выберите тип продукта";
    if (orderData.phone && orderData.phone.length < 13)
      errors.phone = "Неверный номер телефона";
    if (!orderData.phone) errors.phone = "Неверный номер телефона";
    return errors;
  };

  const validateStep2 = () => {
    const errors = { colors: {} };
    const colorKeys = ["primary", "background", "text", "button"];
    colorKeys.forEach((key) => {
      if (!orderData.colors[key]) {
        errors.colors[key] = `Выберите ${key} цвет`;
      }
    });
    return errors;
  };

  const handleNextStep = () => {
    if (step === 1) {
      const validationErrors = validateStep1();
      if (Object.keys(validationErrors).length > 0) {
        setError({ ...error, ...validationErrors });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      const validationErrors = validateStep2();
      if (Object.keys(validationErrors.colors).length > 0) {
        setError({ ...error, ...validationErrors });
        return;
      }
      setStep(3);
    } else if (step < 4) {
      setStep(step + 1);
    } else if (step == 4) {
      setStep(1);
      setOrderData({
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
      setError({
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
    }
  };

  return (
    <div
      className={`${
        step == 4 ? "justify-center" : "justify-between"
      } w-full flex items-center mt-4 px-4 sm:px-6 lg:px-8`}
    >
      {step !== 4 && (
        <button
          onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
          disabled={step === 1}
          className="w-10 h-10 bg-primary text-white flex justify-center items-center disabled:opacity-50 rounded-full"
        >
          {step === 1 ? <X /> : <ChevronLeft />}
        </button>
      )}
      <button
        onClick={handleNextStep}
        className="font-bold bg-primary text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {step === 3
          ? "Подтвердить и заказать"
          : step == 4
          ? "Вернутся"
          : "Следующий шаг"}
      </button>
      {step !== 4 && <div className="max-md:hidden"></div>}
    </div>
  );
};

export default StepControler;

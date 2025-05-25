"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { motion, AnimatePresence } from "framer-motion";

export default function ColorPicker({
  onClose,
  name,
  onOpenChange,
  onChange,
  label,
  open,
  defaultValue,
}) {
  const [color, setColor] = useState(defaultValue);

  const handleChange = (color) => {
    setColor(color.rgb);
    onChange(color.rgb);
  };

  const handleOpen = () => {
    onOpenChange();
  };

  const handleClose = () => {
    onClose();
  };

  const colorStyle = {
    background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
  };

  // Animation variants for the color picker
  const pickerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };

  return (
    <div className="w-full max-sm:relative">
      <div
        className={`p-2 rounded-md flex justify-start items-center gap-4 ${open ? "text-primary" : ""}`}
        onClick={handleOpen}
      >
        <div
          className={`w-9 h-9 rounded-md ${open ? "ring-2" : ""}`}
          style={colorStyle}
        />
        <h1>{label}</h1>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-10 top-12 sm:-top-32 z-10"
            variants={pickerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="relative">
              {/* <div className="absolute w-8 h-8 rotate-45 -left-2 top-10 bg-[#2C2C2E] -z-10 rounded-sm"/> */}
              <div className="h-[40px] flex justify-between items-center gap-4 absolute top-0 left-0 w-full max-w-[280px] rounded-[12px] opacity-50 z-10 px-3 text-white">
                <div></div>
                <h1>Выберите цвет</h1>
                <div
                  onClick={handleClose}
                  className="cursor-pointer p-1 rounded-full bg-[#2C2C2E] text-white"
                >
                  <X size={18} className="" />
                </div>
              </div>
              <SketchPicker
                color={color}
                onChange={handleChange}
                styles={{
                  default: {
                    picker: {
                      background: "#1e1e1e",
                      boxShadow: "0 0 10px rgba(0, 0, 0, 0.6)",
                      borderRadius: "8px",
                      padding: "20px",
                      paddingTop: "40px",
                      maxWidth: "240px",
                      width: "100%",
                    },
                    saturation: {
                      borderRadius: "4px",
                      overflow: "hidden",
                    },
                    hue: {
                      borderRadius: "4px",
                      height: "20px",
                      overflow: "hidden",
                    },
                    alpha: {
                      borderRadius: "4px",
                      height: "20px",
                      overflow: "hidden",
                    },
                    controls: {
                      display: "flex",
                      flexDirection: "column",
                    },
                    color: {
                      background: "#1e1e1e",
                    },
                    activeColor: {
                      borderColor: "#ffffff",
                    },
                  },
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker() {
  const [color, setColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });
  const [displayColorPicker, setDisplayColorPicker] = useState(true);

  const handleChange = (color) => {
    setColor(color.rgb);
  };

  const handleOpen = () => {
    setDisplayColorPicker(!displayColorPicker);
  }
  
  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const colorStyle = {
    width: "36px",
    height: "14px",
    borderRadius: "2px",
    background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
  };

  const swatchStyle = {
    padding: "5px",
    background: "#fff",
    borderRadius: "1px",
    boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
    display: "inline-block",
    cursor: "default",
  };

  return (
    <div>
      <div onClick={handleOpen} style={swatchStyle}>
        <div style={colorStyle} />
      </div>
      {displayColorPicker && (
        <div className="relative">
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
      )}
    </div>
  );
}

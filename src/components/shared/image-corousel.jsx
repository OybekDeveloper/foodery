"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

const images = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/appImage/1.webp",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/appImage/2.webp",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/appImage/3.webp",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/appImage/4.webp",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/appImage/5.webp",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/appImage/6.webp",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/appImage/7.webp",
  },
];

export function ImageCarousel() {
  return (
    <div className="relative w-full max-w-[100vw] flex flex-col items-center justify-center overflow-x-hidden">
      <Marquee className="[--duration:60s] max-w-screen overflow-hidden">
        {images.map((image, idx) => (
          <Image
            src={image.img}
            key={idx}
            width={150}
            height={250}
            alt="Main App Image"
          />
        ))}
      </Marquee>
    </div>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false); // Pastga scroll — yashirin
      } else {
        setShowHeader(true); // Yuqoriga scroll — ko‘rsatish
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            key="header"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="z-[999] fixed top-0 left-0 w-full bg-white h-20 shadow-md"
          >
            <div className="max-w-[1440px] mx-auto h-full w-11/12 flex justify-between items-center">
              {/* Logo */}
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={100}
                  height={40}
                  className="h-10"
                  loading="eager"
                />
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex space-x-8 items-center">
                <Link
                  href="/"
                  className="text-black hover:text-primary transition-all ease-linear duration-150"
                >
                  Про приложения
                </Link>
                <Link
                  href="/"
                  className="text-black hover:text-primary transition-all ease-linear duration-150"
                >
                  Инструкция
                </Link>
                <Link href="/">
                  <Button className="hover:bg-primary hover:opacity-90 hover:ring-1 transition-all duration-200 ease-linear">
                    Создать Приложения
                  </Button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={toggleMenu}>
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="mobile-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden w-full px-6 pb-4 bg-white flex flex-col items-start gap-3 shadow-md"
                >
                  <Link
                    href="/"
                    className="text-black hover:text-primary transition-all ease-linear duration-150"
                    onClick={toggleMenu}
                  >
                    Про приложения
                  </Link>
                  <Link
                    href="/"
                    className="text-black hover:text-primary transition-all ease-linear duration-150"
                    onClick={toggleMenu}
                  >
                    Инструкция
                  </Link>
                  <Link href="/" onClick={toggleMenu}>
                    <Button className="hover:bg-primary hover:opacity-90 hover:ring-1 transition-all duration-200 ease-linear">
                      Создать Приложения
                    </Button>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>
    </>
  );
}

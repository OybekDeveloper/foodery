import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <main className="fixed top-0 left-0 w-full z-50 bg-white h-20">
      <div className="max-w-[1440px] mx-auto h-full w-11/12 flex justify-between items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={40}
          className="h-10"
          loading="eager"
        />
        <div className="space-x-[32px] space-y-2">
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
          <Link href="/" className="">
            <Button className="hover:bg-primary hover:opacity-90 hover:ring-1 transition-all duration-200 ease-linear">
              Создать Приложения
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

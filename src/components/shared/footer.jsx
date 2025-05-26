import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-white mt-8  pt-8 pb-4">
      <div className="max-w-[1440px] w-11/12 mx-auto space-y-5">
        <div className="flex w-full max-md:flex-col justify-between items-center gap-5 md:gap-10">
          <div className="flex justify-center items-center flex-col gap-2">
            <Image src="/logo.svg" alt="logo" width={70} height={70} />
          </div>{" "}
          <div className="flex gap-5 max-md:flex-col justify-end items-center">
            <Link href={"tel:+998958331020"}>+998 95 833 10 20</Link>
            <div className="flex justify-between items-center gap-5">
              <Link href="">
                <Image
                  alt="img"
                  width={32}
                  height={32}
                  src="/socials/facebook.png"
                />
              </Link>
              <Link href="">
                <Image
                  alt="img"
                  width={32}
                  height={32}
                  src="/socials/telegram.png"
                />
              </Link>
              <Link href="">
                <Image
                  alt="img"
                  width={32}
                  height={32}
                  src="/socials/instagram.png"
                />
              </Link>
              <Link href="">
                <Image
                  alt="img"
                  width={32}
                  height={32}
                  src="/socials/google.png"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black/60"></div>
        <div className="w-full flex text-black/60 justify-center items-center">
          <h1>Possible Group © 2020-2025, Все права защищены</h1>
        </div>
      </div>
    </footer>
  );
}

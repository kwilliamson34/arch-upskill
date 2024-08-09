'use client'

import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className="relative flex items-center justify-between px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-500 text-white"
      style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        <Image
          priority
          alt="Watercolor brush stroke"
          src="/images/brush-stroke.jpg"
          fill
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex items-center z-10">
        <Image
          priority
          src="/images/profile.jpg"
          className="rounded-full z-10"
          height={64}
          width={64}
          alt="Katy's face"
        />
        <div className="ml-4">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-wide antialiased">
            Katy Williamson's
          </h1>
          <h2 className="text-lg lg:text-xl font-bold tracking-wide antialiased">
            Arch Upskill Course
          </h2>
        </div>
      </div>

      <Link
        href="/about"
        className="bg-white rounded-full no-underline text-sm leading-loose p-2 z-10"
      >
        About
      </Link>
    </header>
  );
};

export default Header;

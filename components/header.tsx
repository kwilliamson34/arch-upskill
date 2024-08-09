"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between px-8 text-white">
      <div className="container">
        <div className="absolute inset-0 w-full overflow-hidden -z-10">
          <Image
            priority
            alt="Watercolor brush stroke"
            src="/images/brush-stroke.jpg"
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        <div className="flex items-center">
          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full"
            height={80}
            width={80}
            alt="Katy's face"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <div className="ml-4">
            <h1 className="text-2xl lg:text-4xl font-bold tracking-wide antialiased pt-4">
              Katy Williamson
            </h1>
            <div>
              <Link
                href="/"
                className="inline-block bg-gray-100 rounded-t-2xl mt-2 mr-2 py-2 px-4 text-gray-800 no-underline text-lg font-bold tracking-wide"
              >
                Learning
              </Link>
              <Link
                href="/about"
                className="inline-block bg-gray-100 rounded-t-2xl mt-2 mr-2 p-2 text-gray-800 no-underline text-lg font-bold tracking-wide"
              >
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

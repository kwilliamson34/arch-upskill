"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const renderNavTab = (href: string, label: string) => {
    return (
      <Link
        href={href}
        className={clsx(
          "inline-block rounded-t-2xl",
          "font-bold tracking-wide text-gray-800 no-underline",
          "mr-2 mt-2 px-2 py-2 md:px-4",
          href == pathname ? "bg-white" : "bg-gray-200"
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="relative flex items-center justify-between px-8 text-white">
      <div className="container">
        <div className="absolute inset-0 -z-10 w-full overflow-hidden">
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
            <h1 className="pt-4 text-2xl font-bold tracking-wide antialiased lg:text-4xl">
              Katy Williamson
            </h1>
            <div>
              {renderNavTab("/", "Learning")}
              {renderNavTab("/about", "About Me")}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

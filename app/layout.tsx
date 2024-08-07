import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import "../styles/global.css";
import { siteTitle } from "./constants";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://kit.fontawesome.com/b610207085.js" />

        <meta
          name="description"
          content="See how Katy learned to build a personal website using Next.js to track her course of study!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>

      <body className="container w-full">
        <header className="flex flex-row gap-x-4 items-center px-8 py-2">
          <div className="w-full h-32 absolute inset-0 overflow-hidden flex">
            <Image
              priority
              alt="Watercolor brush stroke"
              src="/images/brush-stroke.jpg"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <Image
            priority
            src="/images/profile.jpg"
            className="rounded-full z-10"
            height={108}
            width={108}
            alt="Katy's face"
          />
          <h2 className="text-black z-10 font-bold tracking-wider antialiased lg:text-4xl">
            Katy Williamson's
            <br />
            Arch Upskill Course
          </h2>
          <Link
            href="/about"
            className="bg-white rounded-3xl no-underline text-sm leading-loose ml-auto p-2 z-10"
          >
            About
          </Link>
        </header>
        <main className="container w-full mt-4">{children}</main>
      </body>
    </html>
  );
}

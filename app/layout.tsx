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

      <body>
        <header className="relative flex items-center justify-between px-8 text-white">
          <div className="container">
            <div className="absolute inset-0 w-full overflow-hidden -z-10">
              <Image
                priority
                alt="Watercolor brush stroke"
                src="/images/brush-stroke.jpg"
                fill
                layout="fill"
                objectFit="cover"
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
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

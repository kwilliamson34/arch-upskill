import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import { clsx } from "clsx";
import Script from "next/script";

export const siteTitle = "Katy's Next.js Learning Website";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://kit.fontawesome.com/b610207085.js" />

        <meta
          name="description"
          content="See how Katy learned to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
          Arch Upskill Guide
        </h2>
        {!home && (
          <Link
            href="/"
            className="bg-white rounded-3xl no-underline text-sm leading-loose ml-auto p-2 z-10"
          >
            ←<span className="hidden md:inline-block">&nbsp;Back</span>
          </Link>
        )}
      </header>
      <main className={clsx(styles.container, "w-full")}>{children}</main>
    </>
  );
}

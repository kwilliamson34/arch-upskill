import { GoogleTagManager } from "@next/third-parties/google";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/global.css";
import { siteTitle } from "./constants";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="G-R4HM6TPMV5" />
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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>

      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

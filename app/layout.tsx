import "@fortawesome/fontawesome-svg-core/styles.css";
import Script from "next/script";
import "../styles/global.css";
import { siteTitle } from "./constants";
import Header from "../components/header";

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
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}

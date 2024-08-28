import { Metadata } from "next";
import { getAllPosts, sortByDate, getUndated } from "../lib/posts";
import { siteTitle } from "./constants";
import Link from "next/link";
import CalendarItem from "../components/calendar-item";

export const metadata: Metadata = {
  title: `${siteTitle} - Home`,
  description:
    "See how Katy learned to build a personal website using Next.js to track her course of study!",
};

export default async function HomePage() {
  const allPosts = getAllPosts();
  return (
    <>
      <section className="my-8">
        <h2 className="container mb-4">Learning Goal Calendar</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="hidden h-6 text-center lg:block">M</div>
          <div className="hidden h-6 text-center lg:block">T</div>
          <div className="hidden h-6 text-center lg:block">W</div>
          <div className="hidden h-6 text-center lg:block">Th</div>
          <div className="hidden h-6 text-center lg:block">F</div>
          {sortByDate(allPosts).map((post) => (
            <CalendarItem post={post} key={post.id} className="mb-4 lg:mr-4" />
          ))}
          {getUndated(allPosts).map((post) => (
            <CalendarItem post={post} key={post.id} className="mb-4 lg:mr-4" />
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="container mb-4">My helpful links</h2>
        <ol className="ml-8 list-decimal">
          <li>
            Algorithms and data structures practice:{" "}
            <a href="https://leetcode.com/explore/" target="_blank">
              Leetcode
            </a>{" "}
            (<Link href="/leetcode">notes</Link>)
          </li>
          <li>
            System design practice:{" "}
            <span className="underline">
              System Design Interview Insiders Vol 1
            </span>{" "}
            and{" "}
            <a
              href="https://github.com/donnemartin/system-design-primer"
              target="_blank"
            >
              System Design Primer
            </a>
          </li>
          <li>
            Current events in tech:{" "}
            <a href="https://tldr.tech/" target="_blank">
              TLDR
            </a>
            &nbsp;or ByteByteGo Newsletter
          </li>
          <li>
            Career coaching:{" "}
            <a
              href="https://leopard.fyi/engineer-signup/?mwr=90c3cb4c"
              target="_blank"
            >
              Leopard
            </a>
          </li>
        </ol>
      </section>
    </>
  );
}

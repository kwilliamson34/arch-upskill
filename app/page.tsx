import { Metadata } from "next";
import { sortByDate, getUndated } from "../utils/posts";
import { siteTitle } from "./constants";
import Link from "next/link";
import CalendarItem from "../components/calendar-item";

export const metadata: Metadata = {
  title: `${siteTitle} - Home`,
  description:
    "See how Katy learned to build a personal website using Next.js to track her course of study!",
};

export default async function HomePage() {
  return (
    <>
      <section className="my-8">
        <h2 className="mb-4">Lead Engineer to Web App Architect in 1 month</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {sortByDate().map((post, index) => (
            <CalendarItem post={post} key={post.id} lessonNumber={index} />
          ))}
          {getUndated().map((post, index) => (
            <CalendarItem
              post={post}
              key={post.id}
              lessonNumber={100 + index}
            />
          ))}
        </div>
      </section>
    </>
  );
}

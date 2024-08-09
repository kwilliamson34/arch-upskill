import CalendarItem from "../components/calendar-item";
import Link from "next/link";

export default function HomeClientPage({ allPosts }) {
  return (
    <>
      <section className="my-8">
        <h2 className="container mb-4">Daily Tasks</h2>
        <ol className="ml-8 list-decimal">
          <li>Learning goal</li>
          <li>
            Code practice:{" "}
            <a href="https://leetcode.com/explore/" target="_blank">
              Leetcode
            </a>{" "}
            (<Link href="/leetcode">notes</Link>)
          </li>
          <li>Reading: TLDR or ByteByteGo news letter</li>
          <li>
            Career coaching:{" "}
            <a
              href="https://www.yournextstep.com/job-search/jobs?what=Senior+Software+Engineer&where=Washington+DC"
              target="_blank"
            >
              Intoo
            </a>
          </li>
        </ol>
      </section>

      <section>
        <h2 className="container mb-4">Learning Goal Calendar</h2>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="hidden h-6 text-center lg:block">M</div>
          <div className="hidden h-6 text-center lg:block">T</div>
          <div className="hidden h-6 text-center lg:block">W</div>
          <div className="hidden h-6 text-center lg:block">Th</div>
          <div className="hidden h-6 text-center lg:block">F</div>
          {allPosts.map((post) => (
            <CalendarItem post={post} key={post.id} className="mb-4 lg:mr-4" />
          ))}
        </div>
      </section>
    </>
  );
}

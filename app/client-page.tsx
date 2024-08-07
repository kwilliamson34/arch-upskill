import CalendarItem from "../components/calendar-item";
import Link from "next/link";

export default function HomeClientPage({ allPosts }) {
  return (
    <>
      <section className="mb-8">
        <h2 className="container mb-4">Daily Tasks</h2>
        <ol className="list-decimal ml-8">
          <li>Learning goal</li>
          <li>
            Code practice: 3{" "}
            <a href="https://leetcode.com/explore/" target="_blank">
              Leetcode
            </a>{" "}
            (<Link href="/leetcode">notes</Link>) or InterviewCake questions
          </li>
          <li>
            Reading: 3 chapters of{" "}
            <Link href="/posts/system-design">System Design</Link> and 3
            articles from TLDR news letter
          </li>
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
          <div className="hidden lg:block h-6 text-center">M</div>
          <div className="hidden lg:block h-6 text-center">T</div>
          <div className="hidden lg:block h-6 text-center">W</div>
          <div className="hidden lg:block h-6 text-center">Th</div>
          <div className="hidden lg:block h-6 text-center">F</div>
          {allPosts.map((post) => (
            <CalendarItem post={post} key={post.id} className="mb-4 lg:mr-4" />
          ))}
        </div>
      </section>
    </>
  );
}

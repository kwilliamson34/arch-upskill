import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import CalendarItem from "../components/calendar-item";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="mb-8">
        <h2 className="container mb-4">Daily Tasks</h2>
        <ol className="list-decimal ml-8">
          <li>Learning goal</li>
          <li>
            <a href="https://leetcode.com/explore/" target="_blank">
              Leetcode
            </a>{" "}
            or InterviewCake
          </li>
          <li>
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
          {allPostsData.map((post) => (
            <CalendarItem {...post} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

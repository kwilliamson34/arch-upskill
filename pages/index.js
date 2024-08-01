import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import {
  faCheck,
  faSpinner,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSortedPostsData } from "../lib/posts";
import clsx from "clsx";

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
        <h2 className="container text-2xl mb-4">Daily Tasks</h2>
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
        <h2 className="container text-2xl mb-4">Learning Goals</h2>
        <div className="flex flex-wrap">
          {allPostsData.map(({ id, date, title, subtitle, status }) => (
            <Link
              href={`/posts/${id}`}
              key={id}
              className={clsx(utilStyles.card, "mr-4 mb-4")}
            >
              <div>
                {title}
                &nbsp;-&nbsp;
                <FontAwesomeIcon
                  icon={
                    status === "In Progress"
                      ? faSpinner
                      : status === "Done"
                      ? faCheck
                      : faQuestion
                  }
                />
                <p className="text-sm italic">{subtitle}</p>
                <p className="text-sm text-gray-500">
                  <Date dateString={date} />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

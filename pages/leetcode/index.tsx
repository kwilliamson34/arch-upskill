import Head from "next/head";
import Layout from "../../components/layout";
import { GetStaticProps } from "next";
import { getHtmlFromMd } from "../../lib/posts";
import path from "path";

export const getStaticProps: GetStaticProps = async (_) => {
  const html = await getHtmlFromMd(
    path.join(process.cwd(), "pages", "leetcode", "leetcode.md")
  );
  return {
    props: {
      html,
    },
  };
};

export default function Leetcode({ html }) {
  return (
    <Layout home={false}>
      <Head>
        <title>Leetcode Learnings</title>
      </Head>
      <a href="https://leetcode.com/explore/" target="_blank">
        Leetcode
      </a>
      <div className="text-md" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

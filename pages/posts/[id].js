import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1 className="text-4xl">{postData.title}</h1>
      <h2 className="text-lg italic text-gray-500 mb-4">
        <Date dateString={postData.date} />
      </h2>
      <div
        className="text-md"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Layout>
  );
}

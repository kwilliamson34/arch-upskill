import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostsAsContextParams, getPostData } from "../../lib/posts";
import Date from "../../components/date";

import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  const postData = await getPostData(context.params.id);
  return {
    props: {
      postData,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async (_) => {  
  const paths = getAllPostsAsContextParams();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h1>{postData.title}</h1>
      <h2 className="mb-4">
        <Date dateString={postData.date} />
      </h2>
      <div
        className="text-md"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </Layout>
  );
}

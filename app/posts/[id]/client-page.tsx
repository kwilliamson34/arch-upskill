import Date from "../../../components/date";

interface Props {
  postData: PostData;
}

export default function PostClientPage({ postData }: Props) {
  return (
    <>
      <h1>{postData.title}</h1>
      <h2>{postData.subtitle}</h2>
      <p className="italic text-gray-700">
        <Date dateString={postData.date} /> - {postData.status}
      </p>
      <div
        className="text-md"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
}

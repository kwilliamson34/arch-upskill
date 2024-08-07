import Date from "../../../components/date";

export default function PostClientPage({ postData }) {
  return (
    <>
      <h1>{postData.title}</h1>
      <h2 className="mb-4">
        <Date dateString={postData.date} />
      </h2>
      <div
        className="text-md"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </>
  );
}

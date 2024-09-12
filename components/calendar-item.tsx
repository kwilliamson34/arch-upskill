import clsx from "clsx";
import Link from "next/link";
import { FaCheck, FaCheckDouble, FaQuestion, FaSpinner } from "react-icons/fa";
import Date from "./date";

function ProgressIcon({ status }: { status?: string }) {
  return status === "In Progress" ? (
    <FaSpinner className="ml-2 animate-spin text-blue-500" />
  ) : status === "Done" ? (
    <FaCheckDouble className="ml-2 text-green-500" />
  ) : status === "Done with Todos" ? (
    <FaCheck className="ml-2 text-blue-500" />
  ) : status === "Not Started" ? (
    <FaQuestion className="ml-2 text-orange-500" />
  ) : null;
}

function Sticky({
  post,
  lessonNumber,
}: {
  post: PostMetadata;
  lessonNumber: number;
}) {
  const stickyColors = {
    "In Progress": "bg-pink-100",
    Done: "bg-green-100",
    "Done with Todos": "bg-blue-100",
    "Not Started": "bg-yellow-100",
  };

  return (
    <div
      key={post.id}
      className={clsx(
        "relative block h-full overflow-hidden rounded-lg p-4 shadow-lg transition-all duration-300",
        "rotate-0 transform hover:-translate-y-0 hover:rotate-1 hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
        stickyColors[post.status as keyof typeof stickyColors] || "bg-gray-100"
      )}
    >
      <div className="absolute right-0 top-0 h-12 w-12 rounded-bl-full bg-white opacity-20"></div>
      <div className="flex h-full flex-col">
        <p className="text-lg">{post.title}</p>
        <p className="mb-2 text-sm italic">{post.subtitle}</p>
        <p className="mt-auto flex text-sm text-gray-600">
          {`Lesson ${lessonNumber}`}
          <ProgressIcon status={post.status} />
        </p>
      </div>
    </div>
  );
}

export default function CalendarItem({
  post,
  lessonNumber,
}: {
  post: PostMetadata;
  lessonNumber: number;
}) {
  return (
    <Link
      href={`/posts/${post.id}`}
      key={post.id}
      className="mb-4 !text-inherit !no-underline lg:mr-4"
    >
      <Sticky post={post} lessonNumber={lessonNumber} />
    </Link>
  );
}

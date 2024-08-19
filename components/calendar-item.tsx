import clsx from "clsx";
import Link from "next/link";
import { FaCheck, FaCheckDouble, FaQuestion, FaSpinner } from "react-icons/fa";
import utilStyles from "../styles/utils.module.css";
import Date from "./date";

interface Props {
  post: PostMetadata;
  className: string | undefined;
}

export default function CalendarItem({ post, className = "" }: Props) {
  if (post.title === "Blank") {
    return (
      <div className={clsx(utilStyles.cardBlank, className)}>
        <Date dateString={post.date} />
        <br />
        Break + Re-read notes
      </div>
    );
  }

  const iconFill =
    post.status === "In Progress"
      ? "blue"
      : post.status === "Done" || post.status === "Done with Todos"
        ? "green"
        : "auto";

  return (
    <Link
      href={`/posts/${post.id}`}
      key={post.id}
      className={clsx(utilStyles.card, className)}
    >
      <div>
        {post.status === "In Progress" ? (
          <FaSpinner fill={iconFill} className="inline-block" />
        ) : post.status === "Done" ? (
          <FaCheckDouble fill={iconFill} className="inline-block" />
        ) : post.status === "Done with Todos" ? (
          <FaCheck fill={iconFill} className="inline-block" />
        ) : (
          <FaQuestion fill={iconFill} className="inline-block" />
        )}
        &nbsp;{post.title}
        <p className="text-sm italic">{post.subtitle}</p>
        <p className="text-sm text-gray-500">
          <Date dateString={post.date} />
        </p>
      </div>
    </Link>
  );
}

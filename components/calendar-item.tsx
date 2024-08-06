import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "./date";
import {
  faCheck,
  faSpinner,
  faQuestion,
  faCheckDouble,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface Props {
  post: Post;
  className: string | undefined;
}

export default function CalendarItem({ post, className = "" }: Props) {
  if (post.title === "Blank") {
    return <div className={clsx(utilStyles.cardBlank, className)}></div>;
  }

  return (
    <Link
      href={`/posts/${post.id}`}
      key={post.id}
      className={clsx(utilStyles.card, className)}
    >
      <div>
        <FontAwesomeIcon
          icon={
            post.status === "In Progress"
              ? faSpinner
              : post.status === "Done"
              ? faCheckDouble
              : post.status === "Done with Todos"
              ? faCheck
              : faQuestion
          }
          color={
            post.status === "In Progress"
              ? "blue"
              : post.status === "Done" || post.status === "Done with Todos"
              ? "green"
              : "auto"
          }
        />
        &nbsp;{post.title}
        <p className="text-sm italic">{post.subtitle}</p>
        <p className="text-sm text-gray-500">
          <Date dateString={post.date} />
        </p>
      </div>
    </Link>
  );
}

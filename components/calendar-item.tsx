import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "./date";
import {
  faCheck,
  faSpinner,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CalendarItem(post: Post) {
  if (post.title === "Blank") {
    return <div className={utilStyles.cardBlank}></div>;
  }

  return (
    <Link href={`/posts/${post.id}`} key={post.id} className={utilStyles.card}>
      <div>
        <FontAwesomeIcon
          icon={
            post.status === "In Progress"
              ? faSpinner
              : post.status === "Done"
              ? faCheck
              : faQuestion
          }
          color={
            post.status === "In Progress"
              ? "blue"
              : post.status === "Done"
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

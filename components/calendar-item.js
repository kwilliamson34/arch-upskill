import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import {
  faCheck,
  faSpinner,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CalendarItem({ id, date, title, subtitle, status }) {
  if (title === "Blank") {
    return <div className={utilStyles.cardBlank}></div>;
  }

  return (
    <Link href={`/posts/${id}`} key={id} className={utilStyles.card}>
      <div>
        <FontAwesomeIcon
          icon={
            status === "In Progress"
              ? faSpinner
              : status === "Done"
              ? faCheck
              : faQuestion
          }
          color={
            status === "In Progress"
              ? "blue"
              : status === "Done"
              ? "green"
              : "auto"
          }
        />
        &nbsp;{title}
        <p className="text-sm italic">{subtitle}</p>
        <p className="text-sm text-gray-500">
          <Date dateString={date} />
        </p>
      </div>
    </Link>
  );
}

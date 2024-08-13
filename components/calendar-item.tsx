import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "./date";
import { FaCheck, FaCheckDouble, FaQuestion, FaSpinner } from 'react-icons/fa';
import clsx from "clsx";

interface Props {
  post: Post;
  className: string | undefined;
}

export default function CalendarItem({ post, className = "" }: Props) {
  if (post.title === "Blank") {
    return <div className={clsx(utilStyles.cardBlank, className)}></div>;
  }

  const iconFill = post.status === "In Progress"
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
        {
            post.status === "In Progress"
              ? <FaSpinner fill={iconFill} className='inline-block'/>
              : post.status === "Done"
                ? <FaCheckDouble fill={iconFill} className='inline-block'/>
                : post.status === "Done with Todos"
                  ? <FaCheck fill={iconFill} className='inline-block' />
                  : <FaQuestion fill={iconFill} className='inline-block'/>
          }
        
        &nbsp;{post.title}
        <p className="text-sm italic">{post.subtitle}</p>
        <p className="text-sm text-gray-500">
          <Date dateString={post.date} />
        </p>
      </div>
    </Link>
  );
}

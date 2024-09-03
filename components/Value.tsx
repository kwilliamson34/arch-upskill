"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Value({
  title,
  children,
  readMoreLink,
  dark = false,
}: {
  title: string;
  children: any;
  readMoreLink?: string;
  dark?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx("mb-4 overflow-hidden rounded-lg")}>
      <button
        className={clsx(
          "flex w-full items-center justify-between px-4 py-2 text-left text-inherit transition",
          dark
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-gray-200 hover:bg-gray-300",
          isOpen && "!rounded-b-none"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && (
        <div
          className={clsx("px-4 py-2", dark ? "bg-gray-600" : "bg-gray-100")}
        >
          <p>{children}</p>
          {readMoreLink && (
            <a href={readMoreLink} target="_blank" className="mr-2 text-sm">
              Inspiration
            </a>
          )}
        </div>
      )}
    </div>
  );
}

"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log("[Error Boundary] Posts");
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong (hit the Posts error boundary)</h2>
      <br />
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

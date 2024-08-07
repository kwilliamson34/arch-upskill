"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log("[Error Boundary] Global");
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <h1>Oops!</h1>
        <h2>Something went wrong (hit the global error boundary)</h2>
        <br />
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}

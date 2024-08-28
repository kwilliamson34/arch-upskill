import { Suspense } from "react";
import { FaSpinner } from "react-icons/fa";

async function Fallback() {
  return (
    <div className="container">
      <FaSpinner />
    </div>
  );
}

async function Joke(): Promise<JSX.Element | null> {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return (
      <>
        <p>{json.setup}</p>
        <p className="italic">{json.punchline}</p>
      </>
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      console.error(error.message);
    } else {
      console.error("An unknown error occurred");
    }
  }
  return null;
}

export default function JokeWrapper() {
  return (
    <>
      <Suspense fallback={<Fallback />}>
        <Joke />
      </Suspense>
    </>
  );
}
